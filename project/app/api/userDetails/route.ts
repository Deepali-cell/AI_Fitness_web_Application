import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  // auth check
  if (!session || !session.user?.id) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );
  }

  try {
    const userId = session?.user?.id;
    const userBodyDetails = await prisma.userBodyDetails.findFirst({
      where: { userId },
    });

    if (!userBodyDetails) {
      return NextResponse.json({
        success: false,
        message: "User Body Details not found",
      });
    }
    return NextResponse.json({
      success: true,
      message: "User body details found successfully",
      userBodyDetails,
    });
  } catch (error) {
    console.log("Error while fetching user details:", error);

    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
