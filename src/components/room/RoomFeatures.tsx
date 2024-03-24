import { IRoom } from "@/backend/models/room";
import React from "react";
import { FaBuildingUser } from "react-icons/fa6";
import { IoIosBed } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface Props {
  room: IRoom;
};

const RoomFeatures = ({ room }: Props) => {
  return (
    <div className="mt-5">
      <h3 className="text-2xl font-bold mb-4">Features:</h3>
      <div>
        <p><FaBuildingUser className="inline" /> {room?.guestCapacity} Guests</p>
      </div>
      <div>
        <p><IoIosBed className="inline" /> {room?.numOfBeds} Beds</p>
      </div>
      <div>
        <p>
          {
            room?.isBreakfast
              ? <FaCheck className="inline" />
              : <IoClose className="inline" />
          }
          &nbsp;Breakfast
        </p>
      </div>
      <div>
        <p>
          {
            room?.isInternet
            ? <FaCheck className="inline" />
            : <IoClose className="inline" />
          }
          &nbsp;Internet
        </p>
      </div>
      <div>
        <p>
          {
            room?.isAirConditioned
            ? <FaCheck className="inline" />
            : <IoClose className="inline" />
          }
          &nbsp;Air Conditioned
        </p>
      </div>
      <div>
        <p>
          {
            room?.isPetsAllowed
            ? <FaCheck className="inline" />
            : <IoClose className="inline" />
          }
          &nbsp;Pets Allowed
        </p>
      </div>
      <div>
        <p>
          {
            room?.isRoomCleaning
            ? <FaCheck className="inline" />
            : <IoClose className="inline" />
          }
          &nbsp;Room Cleaning
        </p>
      </div>
    </div>
  );
};

export default RoomFeatures;