import dbConnect from "../../../utils/dbConnection";
import Contact from "../../../models/contact";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        const body = await req.json();
        await dbConnect();
        await Contact.create(body);
        return NextResponse.json(
            { message: "Message sent successfully!" }, { status: 200 }
        )
    }
    catch (e) {
        console.error("what is the error =====>", e);
        return NextResponse.json(
            { message: "Server error, please try again!" }, { status: 500 }
        )
    }
}