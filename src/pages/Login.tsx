import React from "react";
import styled from "styled-components";
import logo from "/assets/logo.svg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Parent>
      <img src={logo} alt="" />
      <Form>
        <h1>Login</h1>
        <input type="text" placeholder="Email address" />
        <input type="text" placeholder="Password" />
        <button>Login to your account</button>
        <p>
          Don’t have an account?{" "}
          <Link to={"/signUp"}>
            <span>Sign Up</span>
          </Link>
        </p>
      </Form>
    </Parent>
  );
}
const Form = styled.div`
  padding: 2.4rem 2.4rem 3.2rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: var(--Semi-Dark-Blue, #161d2f);
  & h1 {
    color: var(--Pure-White, #fff);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Outfit;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.5px;
    margin-bottom: 4rem;
  }
  & input {
    color: var(--Pure-White, #fff);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Outfit;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 0 0 1.8rem 1.6rem;
    border: none;
    border-bottom: 1px solid grey;
    background: var(--Semi-Dark-Blue, #161d2f);
    margin-bottom: 2.4rem;
  }
  ::placeholder {
    color: var(--Pure-White, #fff);
    font-feature-settings: "clig" off, "liga" off;
    opacity: 0.5;
    font-family: Outfit;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & button {
    border: none;
    margin-top: 1.6rem;
    margin-bottom: 2.4rem;
    padding: 1.2rem 0;
    border-radius: 6px;
    background: var(--Red, #fc4747);
    color: var(--Pure-White, #fff);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Outfit;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & p {
    display: inline;

    color: var(--Pure-White, #fff);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Outfit;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & span {
    margin-left: 0.8rem;
    color: var(--Red, #fc4747);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Outfit;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const Parent = styled.div`
  padding: 4.8rem 2.4rem 0 2.4rem;
  width: 100%;
  background: var(--Dark-Blue, #10141e);
  min-height: 100vh;
  & img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5.8rem;
  }
`;