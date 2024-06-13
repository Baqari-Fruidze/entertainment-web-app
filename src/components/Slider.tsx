import React from "react";
import styled from "styled-components";
import data from "../data.json";
import bookmarkIcon from "/assets/icon-bookmark-empty.svg";
import movieIcon from "/assets/icon-nav-movies.svg";
import { Tdata } from "../types/Data";
import { Ttrending } from "../types/TrendingType";

export default function Slider() {
  const filtered = data.filter((item) => item.isTrending === true);
  console.log(filtered);
  return (
    <Parent>
      <Hone>Trending</Hone>
      <MoviesCon>
        {filtered.map((item) => (
          <SingleMovieCon backGroundTrending={item.thumbnail.trending}>
            <Uul>
              <li>{item.year}</li>
              <li>
                <Img src={movieIcon} alt="" /> {item.category}
              </li>
              <li>{item.rating}</li>
            </Uul>
            <span>{item.title}</span>
          </SingleMovieCon>
        ))}
      </MoviesCon>
    </Parent>
  );
}
const Img = styled.img`
  width: 12px;
  height: 12px;
`;
const Hone = styled.h1`
  color: var(--Pure-White, #fff);
  font-family: Outfit;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.312px;
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
const SingleMovieCon = styled.div<{
  backGroundTrending: Ttrending | undefined;
}>`
  background-image: url(${(props) => props?.backGroundTrending?.small});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  padding: 8.8rem 0 1.6rem 1.6rem;
  min-width: 24rem;
  & > span {
    color: var(--Pure-White, #fff);
    font-family: Outfit;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const MoviesCon = styled.div`
  overflow: scroll;
  display: flex;
  gap: 1.6rem;
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  background: var(--Dark-Blue, #10141e);
  padding: 2.4rem 0 3.5rem 1.6rem;
`;
