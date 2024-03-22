import React from "react";
import RoomItem from "./room/RoomItem";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="w-full lg:w-10/12 lg:mx-auto">
      <section id="rooms">
        <h1 className="mb-3 ml-2 font-extrabold text-2xl">All Rooms</h1>
        <Link href="/search" className="ml-2 text-primary font-bold">
          <FaArrowLeft className="inline" /> Back to Search
        </Link>
        <div className="flex flex-wrap mt-4">
          <RoomItem />
        </div>
      </section>
    </div>
  );
};

export default Home;