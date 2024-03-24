import { IImage } from "@/backend/models/room";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  images: IImage[];
}

const RoomImageSlider = ({ images }: Props) => {
  return (
    <>
      <div className="carousel w-full">
        {/* Carousel Image */}
        {images?.length > 0 ? (
          images?.map((image, index) => (
            <div key={index} id={`item${index}`} className="carousel-item w-full">
              <img
                className="block m-auto"
                src={image?.url}
                alt={image?.url}
              />
            </div> 
          ))
        ) : (
          <div id={`item0`} className="carousel-item w-full">
            <img
              className="block m-auto"
              src={"/images/default_room_image.jpg"}
              alt={"/images/default_room_image.jpg"}
            />
          </div> 
        )}
      </div> 
      <div className="flex justify-center w-full py-2 gap-2">
        {images?.map((_, index) => (
          <Link href={`#item${index}`} className="btn btn-xs">{index + 1}</Link>
        ))}
      </div>
    </>
  )
}

export default RoomImageSlider