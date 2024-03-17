import type { NextRequest } from "next/server";
import { createEdgeRouter } from "next-connect";
import { updateRoom } from "@/backend/controllers/roomControllers";
import connectDb from "@/backend/config/connectDb";

interface RequestContext {
  params: {
    id: string;
  }
};

const router = createEdgeRouter<NextRequest, RequestContext>();

connectDb();

router.put(updateRoom);

export async function PUT(request: NextRequest, context: RequestContext) {
  return router.run(request, context)
}
