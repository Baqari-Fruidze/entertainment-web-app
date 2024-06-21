import React, { useContext } from "react";
import styled from "styled-components";
import bookmarkIconEmpty from "/assets/icon-bookmark-empty.svg";
import bookmarkIconFull from "/assets/icon-bookmark-full.svg";
import movieIcon from "/assets/icon-nav-movies.svg";
import tvSeriesIcon from "/assets/icon-nav-tv-series.svg";
import { Ttrending } from "../types/TrendingType";
import { Context } from "../App";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { LOOP } from "@splidejs/splide";
import { Autoplay, Pagination } from "swiper/modules";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function Slider() {
  const tablet = useMediaQuery(
    "only screen and (min-width : 768px) and (max-width:1440px) "
  );
  const mobile = useMediaQuery("only screen and (max-width : 768px)");
  const { data, statusChanger } = useContext(Context);
  const filtered = data.filter((item) => item.isTrending === true);
  return (
    <Parent>
      <Hone>Trending</Hone>

      <MoviesCon>
        <Splide
          options={{
            type: "loop",
            autoplay: true,
            rewind: true,
            pagination: false,
            arrows: false,
            gap: "1rem",
            intervall: 1000,
          }}
        >
          {filtered.map((item, index) => (
            <SplideSlide key={index}>
              <SingleMovieCon
                backGroundTrending={item.thumbnail.trending}
                key={index}
              >
                <Uul>
                  <li>{item.year}</li>
                  <li>
                    {item.category === "Movie" ? (
                      <MovieIcon src={movieIcon} alt="" />
                    ) : (
                      <TvSeriesIcon src={tvSeriesIcon} alt="" />
                    )}
                    {item.category}
                  </li>
                  <li>{item.rating}</li>
                </Uul>
                <span>{item.title}</span>
                <Circle onClick={() => statusChanger(item.title)}>
                  {item.isBookmarked ? (
                    <img src={bookmarkIconFull} alt="" />
                  ) : (
                    <img src={bookmarkIconEmpty} alt="" />
                  )}
                </Circle>
              </SingleMovieCon>
            </SplideSlide>
          ))}
        </Splide>
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
    top: 16px;
    right: 24px;
  }
`;
const TvSeriesIcon = styled.img`
  width: 12px;
  height: 12px;
  filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(342deg)
    brightness(108%) contrast(100%);
  margin-right: 6px;
`;
const MovieIcon = styled.img`
  width: 12px;
  height: 12px;
  filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(342deg)
    brightness(108%) contrast(100%);
  margin-right: 6px;
`;
const Hone = styled.h1`
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
      font-size: 15px;
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
const SingleMovieCon = styled.div<{
  backGroundTrending: Ttrending | undefined;
}>`
  position: relative;
  background-image: url(${(props) => props?.backGroundTrending?.small});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  padding: 8.8rem 0 1.6rem 1.6rem;
  min-width: 24rem;
  @media (min-width: 768px) {
    background-image: url(${(props) => props.backGroundTrending?.large});
    padding: 15.4rem 0 2.4rem 2.4rem;
    min-width: 47rem;
  }

  & > span {
    color: var(--Pure-White, #fff);
    font-family: Outfit;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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
const MoviesCon = styled.div`
  overflow: scroll;
  display: flex;
  gap: 1.6rem;
  position: relative;
  height: 14rem;
  & .splide__list {
    display: flex;
    @media (min-width: 768px) {
      /* gap: 4rem; */
    }
  }
  @media (min-width: 768px) {
    height: 23rem;
  }
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  background: var(--Dark-Blue, #10141e);
  padding: 2.4rem 0 3.5rem 0;
  @media (min-width: 768px) {
    gap: 2.5rem;
  }
`;
