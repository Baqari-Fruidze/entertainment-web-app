import { useContext } from "react";
import styled from "styled-components";
import Input from "../components/Input";
import movieIcon from "/assets/icon-nav-movies.svg";
import bookmarkIconEmpty from "/assets/icon-bookmark-empty.svg";
import bookmarkIconFull from "/assets/icon-bookmark-full.svg";
import { Context } from "../App";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function Movies() {
  const tablet = useMediaQuery(
    "only screen and (min-width : 768px) and (max-width:1440px) "
  );
  const mobile = useMediaQuery("only screen and (max-width : 768px)");
  const { data, statusChanger, inputValue } = useContext(Context);
  const filterData = data.filter((item) => item.category === "Movie");
  const dataToMap =
    inputValue.length !== 0
      ? filterData.filter((item) => item.title.includes(inputValue))
      : filterData;
  return (
    <Parent>
      <Input />
      <h1>Movies</h1>
      <MoviesCon>
        {dataToMap.map((item, index) => (
          <div className="singleCon" key={index}>
            <MovieImage
              src={
                mobile
                  ? item.thumbnail.regular.small
                  : tablet
                  ? item.thumbnail.regular.medium
                  : item.thumbnail.regular.large
              }
              alt=""
            />
            <Uul>
              <li>{item.year}</li>
              <li>
                <MovieIcon src={movieIcon} alt="" />

                {item.category}
              </li>
              <li>{item.rating}</li>
            </Uul>
            <HTwo>{item.title}</HTwo>
            <Circle onClick={() => statusChanger(item.title)}>
              {item.isBookmarked ? (
                <img src={bookmarkIconFull} alt="" />
              ) : (
                <img src={bookmarkIconEmpty} alt="" />
              )}
            </Circle>
          </div>
        ))}
      </MoviesCon>
    </Parent>
  );
}

const Circle = styled.div`
  opacity: 0.6;
  top: 8px;
  right: 8px;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(90, 105, 143, 1);
  @media (min-width: 768px) {
    top: 1.6rem;
    right: 1.6rem;
  }
`;
const HTwo = styled.h2`
  color: var(--Pure-White, #fff);
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 768px) {
    color: var(--Pure-White, #fff);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Outfit;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const Uul = styled.ul`
  list-style: none;
  padding: 0.5rem 0;
  margin: 0;
  & li {
    justify-content: center;
    display: inline;
    color: var(--Pure-White, #fff);
    font-family: Outfit;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (min-width: 768px) {
      color: var(--Pure-White, #fff);
      font-feature-settings: "clig" off, "liga" off;
      font-family: Outfit;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  & li:not(:last-child)::after {
    content: " • ";
    margin-left: 8px;
    margin-right: 8px;
  }
`;
const MovieIcon = styled.img`
  width: 10px;
  height: 10px;
  filter: invert(99%) sepia(0%) saturate(2%) hue-rotate(334deg) brightness(103%)
    contrast(100%);
  margin-right: 6px;
`;
const MovieImage = styled.img`
  border-radius: 8px;
  width: 16.4rem;
  height: 11rem;
  @media (min-width: 768px) {
    width: 22rem;
    height: 14rem;
  }
  @media (min-width: 1440px) {
    width: 28rem;
    height: 17.4rem;
  }
`;
const MoviesCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  @media (min-width: 768px) {
    gap: 2.4rem;
  }
  @media (min-width: 1440px) {
    gap: 3.2rem;
  }
  & .singleCon {
    position: relative;
  }
`;
const Parent = styled.div`
  padding: 2.6rem 1.6rem 2rem 1.6rem;
  @media (min-width: 768px) {
    padding: 2.6rem;
  }
  @media (min-width: 1440px) {
    padding-top: 6.2rem;
  }
  & h1 {
    margin-bottom: 2.4rem;
    margin-top: 2.4rem;
    color: var(--Pure-White, #fff);
    font-family: Outfit;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.312px;
    @media (min-width: 768px) {
      margin-top: 3.4rem;
      color: var(--Pure-White, #fff);
      font-feature-settings: "clig" off, "liga" off;
      font-family: Outfit;
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.5px;
    }
  }
`;
