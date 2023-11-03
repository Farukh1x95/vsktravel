import React from "react";
import styled from "styled-components";
import phoneImg from "../assets/phone.png";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to Contact us</h2>
      <div
        className="number"
        style={{
          height: "100px",
          background: "black",
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
          paddingTop: "10px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img src={phoneImg} alt="" />
          <h3 style={{ fontWeight: "600", color: "white" }}>+91 9871511196</h3>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src={phoneImg} alt="" />
          <h3 style={{ fontWeight: "600", color: "white" }}>+91 9811611939</h3>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src={phoneImg} alt="" />
          <h3 style={{ fontWeight: "600", color: "white" }}>+91 9205918069</h3>
        </div>
      </div>
      <div className="container">
        <div className="contact-form">
          <form
            // action="https://formspree.io/f/xgedgjkr"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
