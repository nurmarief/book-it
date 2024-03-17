import type { NextRequest } from "next/server";
import { createEdgeRouter } from "next-connect";
import { deleteRoom, updateRoom } from "@/backend/controllers/roomControllers";
import connectDb from "@/backend/config/connectDb";

interface RequestContext {
  params: {
    id: string;
  }
};

const router = createEdgeRouter<NextRequest, RequestContext>();

connectDb();

router.put(updateRoom);
router.delete(deleteRoom);

export async function PUT(request: NextRequest, context: RequestContext) {
  return router.run(request, context)
}

export async function DELETE(request: NextRequest, context: RequestContext) {
  return router.run(request, context)
}
