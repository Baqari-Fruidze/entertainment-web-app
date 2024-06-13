import React from "react";
import styled from "styled-components";
import searcIcon from "/assets/icon-search.svg";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <Parent>
      <Inputt
        type="text"
        name=""
        id=""
        placeholder="Search for movies or TV series"
      />
      <Slider />
    </Parent>
  );
}

const Inputt = styled.input`
  border: none;
  width: 100%;
  background: var(--Dark-Blue, #10141e);
  background-image: url(${searcIcon});
  background-repeat: no-repeat;
  padding: 1rem 0 1rem 4.5rem;
  color: var(--Pure-White, #fff);
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &::placeholder {
    color: var(--Pure-White, #fff);
    font-family: Outfit;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.4979;
  }
`;
const Parent = styled.div`
  background: var(--Dark-Blue, #10141e);
  padding: 2.6rem 0 3rem 1.6rem;
`;
