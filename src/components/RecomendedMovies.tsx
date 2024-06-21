import React, { useContext } from "react";
import styled from "styled-components";
import movieIcon from "/assets/icon-nav-movies.svg";
import tvSeriesIcon from "/assets/icon-nav-tv-series.svg";
import { Context } from "../App";
import bookmarkIconEmpty from "/assets/icon-bookmark-empty.svg";
import bookmarkIconFull from "/assets/icon-bookmark-full.svg";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function RecomendedMovies() {
  const tablet = useMediaQuery(
    "only screen and (min-width : 768px) and (max-width:1440px) "
  );
  const mobile = useMediaQuery("only screen and (max-width : 768px)");
  const { data, statusChanger, inputValue } = useContext(Context);
  const filteredData =
    inputValue.length !== 0
      ? data.filter((item) => item.title.includes(inputValue))
      : data;
  return (
    <RecomendedMoviesCon>
      {filteredData.map((item, index) => (
        <div key={index} className="singleCon">
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
              {item.category === "Movie" ? (
                <MovieIcon src={movieIcon} alt="" />
              ) : (
                <TvSeriesIcon src={tvSeriesIcon} alt="" />
              )}
              {item.category}
            </li>
            <li>{item.rating}</li>
          </Uul>
          <Hone>{item.title}</Hone>
          <Circle onClick={() => statusChanger(item.title)}>
            {item.isBookmarked ? (
              <img src={bookmarkIconFull} alt="" />
            ) : (
              <img src={bookmarkIconEmpty} alt="" />
            )}
          </Circle>
        </div>
      ))}
    </RecomendedMoviesCon>
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
    right: 16px;
  }
`;
const Hone = styled.h1`
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
const MovieImage = styled.img`
  border-radius: 8px;
  width: 16.4rem;
  height: 11rem;
  @media (min-width: 768px) {
    width: 22rem;
    height: 14rem;
  }
`;
const TvSeriesIcon = styled.img`
  width: 12px;
  height: 12px;
  filter: invert(99%) sepia(0%) saturate(2%) hue-rotate(334deg) brightness(103%)
    contrast(100%);
`;
const MovieIcon = styled.img`
  width: 10px;
  height: 10px;
  filter: invert(99%) sepia(0%) saturate(2%) hue-rotate(334deg) brightness(103%)
    contrast(100%);
  margin-right: 6px;
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
const RecomendedMoviesCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 0 0 2rem 0;
  .singleCon {
    position: relative;
  }
  @media (min-width: 768px) {
    gap: 2.9rem;
  }
`;
