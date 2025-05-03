import { cookies } from "next/headers";
import { getUserFromToken } from "@/lib/auth";
import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(res: NextResponse){
    try{
        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value;

        const userData = getUserFromToken(token || '');

        if(!userData){
            return NextResponse.json({
                message: `cannot fetch userData!`
            })
        }

        const user = await db.user.findUnique({
            where: {
                email: userData?.email
            },
            include: {
                bankAccount: true
            }
        })

        return NextResponse.json({
            user
        })

    }catch(err){
        console.log(`something's up with the server!`, err)
    }
}
