import { NextRequest, NextResponse } from "next/server";
import { Error as MongooseError, mongo } from "mongoose";
import ErrorHandler from "../utils/errorHandler";

type HandlerFunction = (req: NextRequest, params: any) => Promise<NextResponse>;

export const catchAsyncErrors =
  (handler: HandlerFunction) => async (req: NextRequest, params: any) => {
    try {
      return await handler(req, params);
    } catch (error: any) {
      const newErrorData = new ErrorHandler("Internal server error", 500);

      // Mongodb or mongoose error
      if (error instanceof MongooseError || error instanceof mongo.MongoError || error.name === "MongoError") {
        if (error.code === 11000) {
          newErrorData.message = `Duplicate ${Object.keys(error.keyValue)} entered`;
          newErrorData.statusCode = 404;
        }
        if (error instanceof MongooseError.CastError) {
          newErrorData.message = 'Request value was not in correct format';
          newErrorData.statusCode = 400;
        }
        if (error instanceof MongooseError.ValidationError) {
          newErrorData.message = `${Object.values(error.errors).map(value => value.message)}`;
          newErrorData.statusCode = 404;
        }
        if (process.env.NODE_ENV === 'production') {
          newErrorData.message = 'Input error';
          newErrorData.statusCode = 400;
        }
      }

      return NextResponse.json(
        {
          status: newErrorData.statusCode,
          message: newErrorData.message,
        },
      );
    }
  };