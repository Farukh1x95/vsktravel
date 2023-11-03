import React, { useState } from "react";
import "../styles/services.css";
import carData from "../data";

const Services = () => {
  const [data, setData] = useState(carData);

  return (
    <div className="Services-contianer">
      <h1 className="common-heading" style={{ textAlign: "center" }}>
        Services provide By us
      </h1>
      <div className="cards-container">
        {data.map((car) => {
          return (
            <div className="single-card" key={car.id}>
              <img src={car.image} alt="" style={{ height: "210px" }} />
              <div className="text-container">
                <h2>{car.carName}</h2>
                <p>{car.priceText}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
