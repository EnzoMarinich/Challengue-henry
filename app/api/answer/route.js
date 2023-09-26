import { NextResponse } from "next/server"
const { PrismaClient } = require("@prisma/client");

export async function GET(){
    try {
        const prisma = new PrismaClient()

        const data = await prisma.answer.findMany()

        return NextResponse.json({"data": data})
    } catch (error) {

        return new NextResponse(error.message, {status:500})

    }
}


export async function POST(req) {
    try {
        const prisma = new PrismaClient()
        const {form} = await req.json()
        

        const rsta = await prisma.answer.create({
            data : form
        })

        return NextResponse.json({"data": form})
    } catch (error) {

        return new NextResponse(error, {status:500})
    }
}