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
  @media (min-width: 768px) {
    color: var(--Pure-White, #fff);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Outfit;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.5px;
  }
`;
const Parent = styled.div`
  background: var(--Dark-Blue, #10141e);
  padding: 2.6rem 1.6rem 3rem 1.6rem;
  @media (min-width: 768px) {
    padding: 2.4rem 2.5rem;
  }
  @media (min-width: 1440px) {
    padding: 6.2rem 3.6rem 1rem;
  }
`;
