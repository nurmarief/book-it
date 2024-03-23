"use client";

import Link from "next/link";
import React from "react";
import StarRatings from "react-star-ratings";
import { IRoom } from "@/backend/models/room";
import Image from "next/image";

interface Props {
  room: IRoom;
}

const RoomItem = ({ room }: Props) => {
  return (
    <div className="w-full md:w-4/12">
      {/* Card */}
      <div className="card shadow-xl">
        {/* Card img */}
        <figure>
          <img
            src={
              room?.images?.length > 0
                ? room.images[0].url
                : "/images/default_room_image.jpg"
            }
            alt={room?.name}
          />
        </figure>
        {/* Card body */}
        <div className="card-body">
          <h2 className="card-title">
            <Link href={`/rooms/${room?._id}`}>{room?.name}</Link>
          </h2>
          <p><span className="font-bold text-xl">${room?.pricePerNight} </span><span>/ night</span></p>
          <div className="flex gap-2">
            <StarRatings
              rating={room?.ratings}
              starRatedColor="#e61e4d"
              numberOfStars={5}
              starDimension="18px"
              starSpacing="1px"
              name="rating"
            />
            <span className="no-of-reviews">({room?.numOfReviews} Reviews)</span>
          </div>
          <div className="card-actions justify-end">
            <Link href={`/rooms/${room?._id}`} className="btn btn-primary btn-block">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomItem;