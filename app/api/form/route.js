import data from "@/app/form.json"
import { NextResponse } from "next/server"


export async function GET(req) {
    try {

        return NextResponse.json(data)
    } catch (error) {
        
        return new NextResponse(error, {status:500})
    }
}

