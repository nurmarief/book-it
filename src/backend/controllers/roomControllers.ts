import { NextResponse, NextRequest } from "next/server";
import Room from "../models/room";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors";
import ErrorHandler from "../utils/errorHandler";

export const getAllRooms = catchAsyncErrors(async (req: NextRequest) => {
  const resPerPage: number = 8;

  const rooms = await Room.find();

  return NextResponse.json({ 
    success: true,
    resPerPage,
    rooms,
   });
});

export const postNewRoom = catchAsyncErrors(async (req: NextRequest) => {
  const body = await req.json();

  const room = await Room.create(body);

  return NextResponse.json({
    success: true,
    room,
  });
});

export const getRoomDetails = catchAsyncErrors(async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const room = await Room.findById(params.id);

  if (!room) throw new ErrorHandler("Room not found", 404);

  return NextResponse.json({
    success: true,
    room,
  });
});

export const updateRoom = catchAsyncErrors(async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  let room = await Room.findById(params.id);
  const body = await req.json();

  if (!room) throw new ErrorHandler("Room not found", 404);

  room = await Room.findByIdAndUpdate(params.id, body, {
    new: true,
  });

  return NextResponse.json({
    success: true,
    room,
  });
});

export const deleteRoom = catchAsyncErrors(async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const room = await Room.findById(params.id);

  if (!room) throw new ErrorHandler("Room not found", 404);

  // TODO - Delete images associated with the room

  await room.deleteOne();

  return NextResponse.json({
    success: true,
  });
});
