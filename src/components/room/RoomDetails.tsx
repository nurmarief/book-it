"use client";

import { IRoom } from "@/backend/models/room";
import React from "react";
import StarRatings from "react-star-ratings";
import RoomImageSlider from "./RoomImageSlider";
import RoomFeatures from "./RoomFeatures";
import NewReview from "../review/NewReview";
import ListReviews from "../review/ListReviews";
import BookingDatePicker from "./BookingDatePicker";

interface Props {
  data: {
    room: IRoom
  }
}

const RoomDetails = ( { data }: Props ) => {
  const { room } = data;

  return (
    <div className="w-full lg:w-8/12 mx-auto">
      <h2 className="mt-5 font-bold text-3xl">{room?.name}</h2>
      <p>{room?.address}</p>

      <div className="mt-8 mb-3">
        <StarRatings
          rating={room?.ratings}
          starRatedColor="#e61e4d"
          numberOfStars={5}
          starDimension="22px"
          starSpacing="1px"
          name="rating"
        />
        <span>&nbsp;({room?.numOfReviews} Reviews)</span>
      </div>
      <RoomImageSlider images={room?.images} />

      <div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Description</h3>
          <p>{room?.description}</p>
          <RoomFeatures room={room} />
        </div>

        <div>
          <BookingDatePicker room={room} />
          // Room Map - TODO
        </div>
        <div className="my-8">
          <NewReview />
        </div>
        <div className="my-8">
          <ListReviews />
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;