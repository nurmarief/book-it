"use client";

import React, { PropsWithRef } from "react";
import RoomItem from "./room/RoomItem";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { IRoom } from "@/backend/models/room";
import CustomPagination from "./layout/CustomPagination";
import { useSearchParams } from "next/navigation";

interface Props {
  data: {
    success: boolean;
    resPerPage: number;
    filteredRoomsCount: number;
    rooms: IRoom[];
  };
}

const Home = ({ data }: Props) => {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const { rooms, resPerPage, filteredRoomsCount } = data;
  
  return (
    <div className="w-full lg:w-10/12 lg:mx-auto">
      <section id="rooms">
        <h1 className="mb-3 ml-2 font-extrabold text-2xl">
          {location
            ? `${filteredRoomsCount} ${filteredRoomsCount <= 1 ? "room" : "rooms"} found in ${location}`
            : "All Rooms"}
        </h1>
        <Link href="/search" className="ml-2 text-primary font-bold">
          <FaArrowLeft className="inline" /> Back to Search
        </Link>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms?.length === 0 ? (
            <div className="text-primary mt-5 col-span-full">
              <p className="text-2xl">No Rooms.</p>
            </div>
          ) : (
            rooms?.map((room) => <RoomItem key={room._id} room={room} />)
          )}
        </div>
      </section>
      <CustomPagination 
        resPerPage={resPerPage}
        filteredRoomsCount={filteredRoomsCount}
      />
    </div>
  );
};

export default Home;