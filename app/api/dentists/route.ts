import { db } from "@/app/db";
import { dentistSlides } from "@/app/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const dentists = await db.select().from(dentistSlides).orderBy(dentistSlides.displayOrder);
    return NextResponse.json(dentists);
  } catch (error) {
    console.error("Error fetching dentists:", error);
    return NextResponse.json(
      { error: "Failed to fetch dentists" },
      { status: 500 }
    );
  }
}
