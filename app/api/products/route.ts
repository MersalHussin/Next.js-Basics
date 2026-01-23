import { NextResponse } from "next/server"

export const dynamic = 'force-static'
 
export async function GET() {
    return NextResponse.json([{id:"Product 1", title: "Product Title"}])
}