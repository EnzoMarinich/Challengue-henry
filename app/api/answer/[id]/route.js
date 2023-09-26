import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server"

export async function POST(req) {
    try { 
        const prisma = new PrismaClient()
        const {answerId} = await req.json()

        const rsta = await prisma.answer.findUnique({
            where : {
                id : answerId
            }
        })
        
        return NextResponse.json({"data": rsta});
    } catch (error) {
        console.log(error)
        return new NextResponse(error.message, {status:500});
    }
}

export async function PUT(req) {
    try { 
        const prisma = new PrismaClient()
        const {form} = await req.json()

        const rsta = await prisma.answer.update({
            where : {
                id : form.id
            },
            data : {
                ...form
            }
        })

        
        return NextResponse.json({"data": rsta});
    } catch (error) {
        console.log(error)
        return new NextResponse(error.message, {status:500});
    }
}