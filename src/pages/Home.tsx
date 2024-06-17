import React from "react";
import styled from "styled-components";
import Slider from "../components/Slider";
import RecomendedMovies from "../components/RecomendedMovies";
import Input from "../components/Input";

export default function Home() {
  return (
    <Parent>
      <Input />
      <Slider />
      <Hone>Recommended for you</Hone>
      <RecomendedMovies />
    </Parent>
  );
}

const Hone = styled.h1`
  margin-left: 1.6rem;
  margin-bottom: 2.4rem;
  color: var(--Pure-White, #fff);
  font-family: Outfit;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.312px;
`;
const Parent = styled.div`
  background: var(--Dark-Blue, #10141e);
  padding: 2.6rem 0 3rem 0;
`;
