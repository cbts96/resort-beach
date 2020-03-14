import React from "react";
import { Hero } from "../component/Hero";
import Banner  from "../component/Banner";
import { Link } from "react-router-dom";
import Services from "../component/Services";
import FeatureRooms from "../component/FeatureRooms";

const Home = () => {
  return (
    <div>
      <Hero>
        <Banner title="luxurious rooms" subtitle="delux room statring at 299$">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeatureRooms/>
    </div>
  );
};
export default Home;
