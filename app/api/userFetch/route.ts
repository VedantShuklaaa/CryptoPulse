import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { z } from "zod";


const userInput = z.object({
    id: z.string(),
})

type userInputParse = z.infer<typeof userInput>

export async function POST(req: NextRequest) {
    try {
        const { id }: userInputParse = userInput.parse(await req.json());


        const findUser = await db.bankAccount.findUnique({
            where: {
                id
            },
            include: {
                user: true,
            }
        })

        if (!findUser) {
            return NextResponse.json({
                message: `can't find any user with your entered credentials`
            })
        }

        return NextResponse.json({
            findUser
        })


    } catch (err) {
        return NextResponse.json({
            message: `something's up with the server`
        })
    }
}