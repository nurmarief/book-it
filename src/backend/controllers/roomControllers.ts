import { NextResponse, NextRequest } from "next/server";

export const getAllRooms = async (response: NextRequest) => {
  return NextResponse.json({ success: true });
}