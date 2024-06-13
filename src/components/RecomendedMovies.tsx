import React from "react";
import styled from "styled-components";
import data from "../data.json";
import movieIcon from "/assets/icon-nav-movies.svg";
import tvSeriesIcon from "/assets/icon-nav-tv-series.svg";

export default function RecomendedMovies() {
  return (
    <RecomendedMoviesCon>
      {data.map((item) => (
        <div>
          <MovieImage src={item.thumbnail.regular.small} alt="" />
          <Uul>
            <li>{item.year}</li>
            <li>
              {item.category === "Movie" ? (
                <MovieIcon src={movieIcon} alt="" />
              ) : (
                <TvSeriesIcon src={tvSeriesIcon} alt="" />
              )}{" "}
              {item.category}
            </li>
            <li>{item.rating}</li>
          </Uul>
        </div>
      ))}
    </RecomendedMoviesCon>
  );
}

const MovieImage = styled.img`
  border-radius: 8px;
  width: 16.4rem;
  height: 11rem;
`;
const TvSeriesIcon = styled.img`
  width: 12px;
  height: 12px;
  filter: invert(99%) sepia(0%) saturate(2%) hue-rotate(334deg) brightness(103%)
    contrast(100%);
`;
const MovieIcon = styled.img`
  width: 12px;
  height: 12px;
  filter: invert(99%) sepia(0%) saturate(2%) hue-rotate(334deg) brightness(103%)
    contrast(100%);
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
  gap: 4%;
  padding: 0 1.6rem 2rem 1.6rem;
`;
