import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  // auth check
  if (!session || !session.user?.id) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );
  }

  try {
    const body = await req.json();

    const {
      age,
      gender,
      weight,
      height,
      bloodGroup,
      diet,
      activity,
      sleepHours,
      hydration,
      profession,
      goal,
      allergies,
      chronicDiseases,
      habits,
      onTreatment,
    } = body;

    const userId = session?.user?.id;

    if (!age || !gender || !weight || !height) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 },
      );
    }

    //  Upsert  IF exists → update ELSE → create
    await prisma.userBodyDetails.upsert({
      where: { userId },
      update: {
        age,
        gender,
        weight,
        height,
        bloodGroup,
        diet,
        activity,
        sleepHours,
        hydration,
        profession,
        goal,
        allergies,
        chronicDiseases,
        habits,
        onTreatment,
      },
      create: {
        userId,
        age,
        gender,
        weight,
        height,
        bloodGroup,
        diet,
        activity,
        sleepHours,
        hydration,
        profession,
        goal,
        allergies,
        chronicDiseases,
        habits,
        onTreatment,
      },
    });

    return NextResponse.json({
      success: true,
      message: "User body details saved successfully",
    });
  } catch (error) {
    console.log("Error while saving user details:", error);

    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
