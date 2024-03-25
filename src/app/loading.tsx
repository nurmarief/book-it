import Loader from "@/components/layout/Loader";
import React from "react";

export default function Loading() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Loader />
    </div>
  )
}
