"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Search() {
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("1");
  const [category, setCategory] = useState("");

  const router = useRouter();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const queryString = [
      location && `location=${encodeURIComponent(location)}`,
      guests && `guestCapacity=${encodeURIComponent(guests)}`,
      category && `category=${encodeURIComponent(category)}`,
    ]
      .filter(Boolean)
      .join("&");

    router.push(`/?${queryString}`);
  };

  return (
    <div className="w-full mt-5">
      <div className="w-10/12 lg:w-5/12 mx-auto">
        <form className="shadow-lg rounded space-y-4" onSubmit={submitHandler}>
          <h2 className="my-4 p-2 font-bold text-2xl">Search Rooms</h2>
          {/* Location */}
          <label className="input flex items-center gap-2">
            Location
            <input
              type="text"
              id="location_field"
              className="grow"
              placeholder="new york"
              value={location}
              onChange={(e) => setLocation(e.target.value)} 
            />
          </label>
          {/* Number of guests */}
          <label className="pl-4 flex items-center gap-2">
            Guests
            <select 
              className="select w-full"
              id="guest_field"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </label>
          {/* Room type */}
          <label className="pl-4 flex items-center gap-2">
            Room Type
            <select 
              className="select grow"
              id="room_type_field"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {["", "King", "Single", "Twins"].map((value, index) => (
                <option key={value} value={value} selected={index === 0}>
                  {value}
                </option>
              ))}
            </select>
          </label>
          <button type="submit" className="btn btn-primary btn-block py-2">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}