import React from "react";

import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
const Room = ({ room }) => {
  const { name, slug, images, price } = room;
  return (
    <div>
      <article className="room">
        <div className="img-container">
          <img src={images[0] || defaultImg} alt="singleroom" />
          <div className="price-top">
            <h6>${price}</h6>
            <p>per night</p>
          </div>
        

        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          features
        </Link>
        <p className="room-info">{name}</p>
        </div>
      </article>
      
    </div>
  );
};
export default Room;
