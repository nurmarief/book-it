"use client";

import Link from "next/link";
import React from "react";
import StarRatings from "react-star-ratings";

const RoomItem = () => {
  return (
    <div className="w-full md:w-4/12">
      {/* Card */}
      <div className="card w-96 shadow-xl">
        {/* Card img */}
        <figure>
          <img
            src="images/default_room_image.jpg"
            alt=""
          />
        </figure>
        {/* Card body */}
        <div className="card-body">
          <h2 className="card-title">Room name</h2>
          <p><span className="font-bold text-xl">$100 </span><span>/ night</span></p>
          <div className="flex gap-2">
            <StarRatings
              rating={5}
              starRatedColor="#e61e4d"
              numberOfStars={5}
              starDimension="18px"
              starSpacing="1px"
              name="rating"
            />
            <span className="no-of-reviews">(50 Reviews)</span>
          </div>
          <div className="card-actions justify-end">
            <Link href="/rooms/roomId" className="btn btn-primary btn-block">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomItem;