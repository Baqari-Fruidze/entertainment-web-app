import React from "react";
import styled from "styled-components";
import searchIcon from "/assets/icon-search.svg";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../App";

export default function Input() {
  const { inputValue, setInputValue } = useContext(Context);
  const location = useLocation();
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <Inputt
      onChange={(event) => inputHandler(event)}
      value={inputValue}
      type="text"
      placeholder={
        location.pathname === "/home"
          ? "Search for movies or TV series"
          : location.pathname === "/movies"
          ? "Search for movies"
          : location.pathname === "/tvSeries"
          ? "Search for TV series"
          : "Search for bookmarked shows"
      }
    />
  );
}

const Inputt = styled.input`
  outline: none;
  border: none;
  width: 100%;
  background: var(--Dark-Blue, #10141e);
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: left center;
  padding: 1rem 0 1rem 4.5rem;
  color: var(--Pure-White, #fff);
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 768px) {
    color: var(--Pure-White, #fff);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Outfit;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-left: 5.5rem;
  }

  &::placeholder {
    color: var(--Pure-White, #fff);
    font-family: Outfit;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.4979;
    @media (min-width: 768px) {
      color: var(--Pure-White, #fff);
      font-feature-settings: "clig" off, "liga" off;
      font-family: Outfit;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
