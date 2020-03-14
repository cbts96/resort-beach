import React, { Component } from "react";
import  Title  from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktail",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisi magna, sit amet fermentum lacus fermentum sit"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisi magna, sit amet fermentum lacus fermentum sit"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shullte",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisi magna, sit amet fermentum lacus fermentum sit"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisi magna, sit amet fermentum lacus fermentum sit"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((value, key) => {
            return (
              <article key={key} className="service">
                <span>{value.icon}</span>
                <h6>{value.title}</h6>
                <p>{value.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
