import React, { Component } from "react";
import { Hero } from "../component/Hero";
import Banner from "../component/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import DefaultBcg from "../images/room-1.jpeg";
import StyledHero from "../component/StyledHero";

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      DefaultBcg
    };
  }
  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found</h3>
          <Link to="/rooms" className="btn-primary">
            back to romms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <StyledHero img={images[0] || this.state.DefaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {images.map((value, key) => {
              return <img key={key} src={value} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>detail</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price:${price}</h6>
              <h6>size:{size}SQFT</h6>
              <h6>
                  max capacity:{" "}{capacity>1?`${capacity} people`:`${capacity} person`}
              </h6>
        <h6>{pets?"allowed pets":"no pet allowed"}</h6>
        <h6>{breakfast&&"free breakfast include"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
            <h6>extras</h6>
            <ul className="extras">
                {extras.map((value,key)=>{
                    return <li key={key}>-{value}</li>
                })}
            </ul>
        </section>
      </>
    );
  }
}

export default SingleRoom;
