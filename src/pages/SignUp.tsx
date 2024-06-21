import React, { useContext } from "react";
import styled from "styled-components";
import logo from "/assets/logo.svg";
import { Link } from "react-router-dom";
import { Context } from "../App";
import { Navigate } from "react-router-dom";

export default function Login() {
  const { userInfo, setUserInfo, eror, setEror } = useContext(Context);
  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, emailAdress: event.target.value });
  };
  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, password: event.target.value });
  };
  const RpasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, Rpassword: event.target.value });
  };
  function registerUser() {
    const newErrors = {
      ...eror,
      empty: {
        email: userInfo.emailAdress.length === 0,
        password: userInfo.password.length === 0,
        Rpassword: userInfo.Rpassword.length === 0,
      },
      same: userInfo.password !== userInfo.Rpassword,
    };

    setEror(newErrors);
    if (
      !newErrors.empty.email &&
      !newErrors.empty.password &&
      !newErrors.empty.Rpassword &&
      !newErrors.same
    ) {
      localStorage.setItem("user", JSON.stringify(userInfo));
      <Navigate to={"login"} />;
    }
  }

  return (
    <Parent>
      <img src={logo} alt="" />
      <Form>
        <h1>Sign up</h1>
        <div className="emailContainer">
          <input
            type="text"
            placeholder="Email address"
            value={userInfo.emailAdress}
            onChange={emailHandler}
          />
          {eror.empty.email ? <EmptyEror>Can’t be empty</EmptyEror> : null}
        </div>
        <div className="passwordContainer">
          <input
            type="text"
            placeholder="Password"
            value={userInfo.password}
            onChange={passwordHandler}
          />
          {eror.empty.password ? <EmptyEror>Can’t be empty</EmptyEror> : null}
        </div>
        <div className="repeatedPassContainer">
          <input
            type="text"
            placeholder="Repeat Password"
            value={userInfo.Rpassword}
            onChange={RpasswordHandler}
          />
          {eror.same ? <ErorSame>PASSWORD MUST BE SAME</ErorSame> : null}
          {eror.empty.Rpassword ? <EmptyEror>Can’t be empty</EmptyEror> : null}
        </div>

        <button onClick={() => registerUser()}>Create an account</button>
        <p>
          Alread have an account?
          <Link to={"/login"}>
            <span className="login">Login</span>
          </Link>
        </p>
      </Form>
    </Parent>
  );
}

const EmptyEror = styled.span`
  top: 20%;
  right: 0;
  color: var(--Red, #fc4747);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Outfit;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
`;
const ErorSame = styled.span`
  color: red;
  font-size: 9px;
  position: absolute;
  right: 0;
  bottom: 50%;
`;
const Form = styled.div`
  padding: 2.4rem 2.4rem 3.2rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: var(--Semi-Dark-Blue, #161d2f);
  .repeatedPassContainer {
    position: relative;
  }
  .passwordContainer {
    position: relative;
  }
  .emailContainer {
    position: relative;
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
    padding: 1rem 0 1rem 1.6rem;
    border: none;
    border-bottom: 1px solid grey;
    background: var(--Semi-Dark-Blue, #161d2f);
    /* margin-bottom: 2.4rem; */
  }
  & ::placeholder {
    color: #fff;
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
  & .login {
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
  max-width: 32.7rem;
  margin: 0 auto;
  & img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5.8rem;
  }
`;
