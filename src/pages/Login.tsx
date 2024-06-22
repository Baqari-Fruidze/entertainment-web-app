import React, { useContext } from "react";
import styled from "styled-components";
import logo from "/assets/logo.svg";
import { Link } from "react-router-dom";
import { Context } from "../App";
import { useState } from "react";
import { TloginEror } from "../types/LoginEror";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [empt, setEmpt] = useState<TloginEror>({
    password: false,
    emailAdress: false,
  });
  const { userInfo, setUserInfo } = useContext(Context);
  const handleClickEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, emailAdress: event.target.value });
  };
  const handleClickPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, password: event.target.value });
  };
  const userInfoChecker = () => {
    const savedUserInfo:
      | string
      | { password: string; emailAdress: string }
      | null = localStorage.getItem("user");

    if (savedUserInfo) {
      try {
        const parsedUserInfo = JSON.parse(savedUserInfo);
        if (
          typeof parsedUserInfo === "object" &&
          parsedUserInfo !== null &&
          "password" in parsedUserInfo &&
          "emailAdress" in parsedUserInfo
        ) {
          if (userInfo.password !== parsedUserInfo.password) {
            setEmpt((prevEmpt) => ({ ...prevEmpt, password: true }));
            return;
          }
          if (userInfo.emailAdress !== parsedUserInfo.emailAdress) {
            setEmpt((prevEmpt) => ({ ...prevEmpt, emailAdress: true }));
            return;
          }
          navigate("/home");
        }
      } catch (error) {
        alert("error occured");
      }
    }
  };

  return (
    <Parent>
      <img src={logo} alt="" />
      <Form>
        <h1>Login</h1>
        <div>
          <input
            type="text"
            placeholder="Email address"
            value={userInfo.emailAdress}
            onChange={handleClickEmail}
          />
          {empt.emailAdress ? (
            <EmailAddressErorSpan>incorrect Email address</EmailAddressErorSpan>
          ) : null}
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            value={userInfo.password}
            onChange={handleClickPassword}
          />
          {empt.password ? (
            <PaswordErorSpan>incorrect Password</PaswordErorSpan>
          ) : null}
        </div>

        <button onClick={userInfoChecker}>Login to your account</button>
        <p>
          Don’t have an account?
          <Link to={"/signUp"}>
            <span className="signUpSpan">Sign Up</span>
          </Link>
        </p>
      </Form>
    </Parent>
  );
}
const EmailAddressErorSpan = styled.span`
  right: 0;
  position: absolute;
  color: var(--Red, #fc4747);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Outfit;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const PaswordErorSpan = styled.span`
  right: 0;
  position: absolute;
  color: var(--Red, #fc4747);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Outfit;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Form = styled.div`
  padding: 2.4rem 2.4rem 3.2rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: var(--Semi-Dark-Blue, #161d2f);
  width: 32.7rem;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 40rem;
    padding: 3.2rem;
  }
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
    width: 100%;
    color: var(--Pure-White, #fff);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Outfit;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 1.3rem 0 1.3rem 1.6rem;
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
    text-align: center;
    color: var(--Pure-White, #fff);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Outfit;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & .signUpSpan {
    margin-left: 0.8rem;
    color: var(--Red, #fc4747);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Outfit;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & div {
    position: relative;
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
    @media (min-width: 768px) {
      margin-bottom: 7.2rem;
    }
  }
`;
