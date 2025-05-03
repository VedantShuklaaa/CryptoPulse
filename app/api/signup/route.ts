import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import * as bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();
const saltRounds = Number(process.env.SALTROUNDS)

const prisma = new PrismaClient();

const signUpSchema = z.object({
    email: z.string().email('invalid input'),
    password: z.string().min(8, 'password must contain minimum 8 letters'),
    firstName: z.string(),
    lastName: z.string(),
})

type userParams = z.infer<typeof signUpSchema>

export async function POST(req: NextRequest) {
    try{
        const {email, password, firstName, lastName}: userParams = signUpSchema.parse(await req.json())
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const userExist = await prisma.user.findUnique({
            where: {
                email,
            }
        })

        if(userExist){
            return NextResponse.json(
                {message: `Email already exists!`},
                { status: 409 }
            )
        }
        if(password.length<8){
            return NextResponse.json(
                {message: `password must contain 8 letters`}
            )
        }
        const res = await prisma.$transaction(async (tx) => {
            const user = await tx.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    firstName,
                    lastName
                }
            })

            const bankAccount = await tx.bankAccount.create({
                data: {
                    balance: 0,
                    user_id: user.id,

                }
            })
        })

        
        console.log(res)
        return NextResponse.json({
            message: `Signed up successfully!`
        })

    }catch(err){
        return NextResponse.json(
            {message: `something's up with the server!`},
            { status: 500 }
        )
            
    }
}
