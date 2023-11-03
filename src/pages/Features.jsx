import React from "react";
import icon1 from ".././assets/car-wash.png";
import icon2 from ".././assets/best-price.png";
import icon3 from ".././assets/pricing.png";
import icon4 from ".././assets/customer-service (1).png";
import showImage from ".././assets/taxi-features.jpg";

import "../styles/features.css";

const Features = () => {
  return (
    <>
      <h1
        className="common-heading"
        style={{ textAlign: "center", marginTop: "20px", marginBottom: "3rem" }}
      >
        Our Features and Characterstics
      </h1>
      <div className="features-container">
        <div className="image">
          <img src={showImage} alt="" />
        </div>
        <div className="wrapper">
          <div className="content-text">
            <div className="icon-container">
              <img src={icon1} alt="" />
            </div>
            <div className="text">
              <h2>FULLY SANITIZED CARS</h2>
              <p>
                We Sanitize and Keep the Interior of the Car Germ-free and safe
                for travel .
              </p>
            </div>
          </div>
          <div className="content-text">
            <div className="icon-container">
              <img src={icon2} alt="" />
            </div>
            <div className="text">
              <h2>LOW FARE ASSURED</h2>
              <p>
                There is no additional charge apart from Toll, State Tax and
                Permit which are Government Mandated Taxes.
              </p>
            </div>
          </div>
          <div className="content-text">
            <div className="icon-container">
              <img src={icon3} alt="" />
            </div>
            <div className="text">
              <h2>TRANSPARENT PRICING</h2>
              <p>
                We will show taxes. You only pay what you see before booking, no
                other charges.
              </p>
            </div>
          </div>
          <div className="content-text">
            <div className="icon-container">
              <img src={icon4} alt="" />
            </div>
            <div className="text">
              <h2>Awesome Support</h2>
              <p>
                Available to help you at any moment:{" "}
                <strong> +91 9205918069 </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
