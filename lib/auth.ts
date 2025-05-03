import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const jwtPassword = process.env.jwtPassword as string;

export function getUserFromToken( token:string ){
    try{
        return jwt.verify(token, jwtPassword) as {id: string, email: string};
    }catch(err){
        return null;
    }
}