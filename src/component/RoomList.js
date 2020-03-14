import React from "react";
import Room from "./Room";
export default function RoomList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty search">
        <h3>Sorry, No room matched</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((value, key) => {
          return <Room key={key} room={value} />;
        })}
      </div>
    </section>
  );
}
