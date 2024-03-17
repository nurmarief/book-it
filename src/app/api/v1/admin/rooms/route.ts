import type { NextRequest } from "next/server";
import { createEdgeRouter } from "next-connect";
import { postNewRoom } from "@/backend/controllers/roomControllers";
import connectDb from "@/backend/config/connectDb";

interface RequestContext {};

const router = createEdgeRouter<NextRequest, RequestContext>();

connectDb();

router.post(postNewRoom);

export async function POST(request: NextRequest, context: RequestContext) {
  return router.run(request, context)
}
