import { NextRequest, NextResponse } from "next/server";
import { serialize } from 'cookie'
import { PrismaClient } from "@prisma/client";
import { z } from 'zod';
import jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();

const jwtPassword = process.env.jwtPassword as string
const prisma = new PrismaClient();

const loginSchema = z.object({
    email: z.string().email('invalid input'),
    password: z.string().min(8, 'password must contain minimum 8 letters')
})

type loginParams = z.infer<typeof loginSchema>

export async function POST(req: NextRequest) {
    try {
        const { email, password }: loginParams = loginSchema.parse(await req.json());
        const userExist = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (!userExist) {
            return NextResponse.json(
                { message: `user doesn't exists` },
                { status: 404 }
            )
        }

        const checkPassword = await bcrypt.compare(password, userExist.password)

        if (!checkPassword) {
            return NextResponse.json(
                { message: `Invalid Credentials` },
                { status: 404 }
            )
        }

        if (!jwtPassword) {
            throw new Error('jwt password is not defined in environment variable!')
        }
        
        const token = jwt.sign({ email: email, id: userExist?.id }, jwtPassword, { expiresIn: '7d' });
        const cookie = serialize('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return NextResponse.json(
            {message: `successfully logged in`},
            {headers: {'Set-Cookie': cookie}}
        )
    } catch (err) {
        return NextResponse.json(
            { message: `something's up with the server` },
            { status: 500 },
        )
    }
}