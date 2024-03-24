import RoomDetails from "@/components/room/RoomDetails";
import React from "react";

interface Props {
  params: { id: string }
}

const getRoomDetails = async (id: string) => {
  const res = await fetch(`${process.env.API_URL}/rooms/${id}`);
  return res.json();
};

const RoomDetailsPage = async ({ params }: Props) => {
  const data = await getRoomDetails(params.id);
  
  return (
    <RoomDetails data={data} />
  )
};

export default RoomDetailsPage;

export async function generateMetadata({ params }: Props) {
  const data = await getRoomDetails(params.id);

  return {
    title: `${data?.room?.name} - BookIT`
  }
}