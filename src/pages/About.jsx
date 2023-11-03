import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/Button";
import heroBanner from "../assets/heroBanner.png";

const About = () => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <h1 className="hero-heading">About Us</h1>
          <p className="hero-para">
            "At Vsk Taxi Tour and Travels, we are dedicated to providing
            exceptional travel experiences that go beyond the ordinary. With a
            passion for adventure and a commitment to quality service, we've
            been your trusted travel partner for 15+ years. Our mission is to
            make your journeys unforgettable, whether you're embarking on a
            scenic tour, a business trip, or a leisurely vacation. We pride
            ourselves on our fleet of comfortable and well-maintained vehicles,
            driven by skilled and courteous professionals who ensure your safety
            and comfort at every turn.
          </p>

          <Button className="btn hireme-btn">
            <NavLink to="/contact"> Book Now </NavLink>
          </Button>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src={heroBanner} alt="hero image" className="hero-img" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .container {
    width: 100%;
  }
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 2rem;
    color: black;
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    font-size: 1.8rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    ${"" /* max-width: 80%; */}
    height: 400px;
    ${"" /* width: auto; */}
  }

  @media (max-width: 768px) {
    .container {
      ${"" /* align-items: center; */}
      display: grid;
      grid-template-columns: 1fr;
    }
    .hero-heading {
      font-size: 4rem;
    }
    .hero-img {
      max-width: 80%;
      height: auto ${"" /* height :400px; */} ${"" /* width: auto */};
    }
    .grid {
      gap: 7.2rem;
    }
    .btn {
      margin: auto;
    }
    .section-hero-data {
      text-align: center;
      margin: 10px;
    }
  }
`;

export default About;
