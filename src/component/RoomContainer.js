import React from "react";
import RoomFilter from "../component/RoomFilter";
import RoomList from "../component/RoomList";
import { withRoomConsumer } from "../context";
import {Loading} from "../component/Loading";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
     
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
}
export default withRoomConsumer(RoomContainer);
