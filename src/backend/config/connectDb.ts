import mongoose from "mongoose";

const connectDb = async () => {
  if (mongoose.connection.readyState >= 1) return;

  let DB_URI: string = "";

  switch (process.env.NODE_ENV) {
    case "production":
      DB_URI = process.env.DB_URI!
      break;
    default:
      DB_URI = process.env.DB_LOCAL_URI!
      break;
  }

  await mongoose.connect(DB_URI);
};

export default connectDb;