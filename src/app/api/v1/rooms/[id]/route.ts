import type { NextRequest } from "next/server";
import { createEdgeRouter } from "next-connect";
import { getRoomDetails } from "@/backend/controllers/roomControllers";
import connectDb from "@/backend/config/connectDb";

interface RequestContext {
  params: {
    id: string;
  }
};

const router = createEdgeRouter<NextRequest, RequestContext>();

connectDb();

router.get(getRoomDetails);

export async function GET(request: NextRequest, context: RequestContext) {
  return router.run(request, context)
}
