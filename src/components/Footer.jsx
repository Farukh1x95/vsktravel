import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const handleScrollClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Wrapper>
      {/* footer section  */}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>VSK Tour and Travels</h3>
            <p>
              We, VSK Tour And Travels are one of the best multi taxi service
              provider in the city. We have highly skilled and trained driver,
              who are well qualified and have undergone extensive training.
            </p>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Mail to get important Info</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Click Here" />
            </form>
          </div>

          {/* 3rs column  */}
          <div className="footer-social">
            <h3>Useful Links</h3>
            <ul className="nav-list">
              <li>
                <NavLink to="/about" onClick={() => handleScrollClick()}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/features" onClick={() => handleScrollClick()}>
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink to="/service" onClick={() => handleScrollClick()}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={() => handleScrollClick()}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 9871511196</h3>
            <h3>+91 9811611939</h3>
            <h3>+91 9205918069</h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} @vskTour&Travels. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .nav-list li {
    margin-bottom: 10px; /* Adjust the spacing between each link */
  }

  .nav-list a {
    text-decoration: none;
    color: #333;
  }

  .nav-list a:hover {
    color: #007bff;
  }

  /* Optional: Add a background color or style to the active link */
  .nav-list a {
    font-size: 1.8rem;
    color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
  }

  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;
