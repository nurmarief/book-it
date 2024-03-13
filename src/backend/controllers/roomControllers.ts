import { NextResponse, NextRequest } from "next/server";
import Room from "../models/room";

export const getAllRooms = async (req: NextRequest) => {
  const resPerPage: number = 8;

  const rooms = await Room.find();

  return NextResponse.json({ 
    success: true,
    resPerPage,
    rooms,
   });
}

export const postNewRoom = async (req: NextRequest) => {
  const body = await req.json();

  const room = await Room.create(body);

  return NextResponse.json({
    success: true,
    room,
  });
};