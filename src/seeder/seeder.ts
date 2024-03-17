import Room from "../backend/models/room";
import mongoose from "mongoose";
import { rooms } from "./data";
require('dotenv').config({ path: '.env.local' });

const seedRooms = async () => {
  try {
    await mongoose.connect(process.env.DB_LOCAL_URI!);

    await Room.deleteMany();
    console.log("Rooms data are deleted");

    await Room.insertMany(rooms);
    console.log("Rooms data are added");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

seedRooms();