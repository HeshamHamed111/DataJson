import React from "react";
import { Badge, Box, Image } from "@chakra-ui/react";
import "./card.css";
import Data from "../../data.json";
function Card() {
  {
    console.log(Data);
  }
  return (
    <div className="all-cards">
      {Data.map((cardDate) => {
        return (
          <div className="card" key={cardDate.id}>
            <div className="header-card">
              <div className="img-card">
                <img src={cardDate.img} alt="Name" />
              </div>
            </div>
            <div className="body-card">
              <div className="name-card">
                <h2>{cardDate.name}</h2>
              </div>
              <div className="bio-card">
                <p>{cardDate.bio}</p>
              </div>
              <div className="desc-card">
                <p>{cardDate.desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Card;
// https://media.istockphoto.com/photos/my-schedule-looks-a-bit-busy-today-picture-id1155877139?s=612x612
