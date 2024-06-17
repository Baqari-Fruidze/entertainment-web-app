import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import logo from "/assets/logo.svg";
import homeNavigation from "/assets/icon-nav-home.svg";
import moviesNavigation from "/assets/icon-nav-movies.svg";
import tvSeriesNavigation from "/assets/icon-nav-tv-series.svg";
import bookmarkNavigation from "/assets/icon-nav-bookmark.svg";
import personImg from "/assets/image-avatar.png";

export default function Header() {
  const location = useLocation();
  return (
    <Container>
      <img src={logo} alt="" />
      <ImagesCon>
        <HomeIcon src={homeNavigation} alt="" location={location.pathname} />
        <MoviesIcon
          src={moviesNavigation}
          alt=""
          location={location.pathname}
        />
        <TvSeriesIcon
          src={tvSeriesNavigation}
          alt=""
          location={location.pathname}
        />
        <BookmarkedIcon
          src={bookmarkNavigation}
          alt=""
          location={location.pathname}
        />
      </ImagesCon>
      <Image src={personImg} alt="" />
    </Container>
  );
}

const BookmarkedIcon = styled.img<{ location: string }>`
  filter: ${(props) =>
    props.location === "/bookmarked"
      ? "brightness(0) saturate(100%) invert(100%) sepia(3%) saturate(12%) hue-rotate(103deg) brightness(105%) contrast(105%)"
      : null};
`;
const TvSeriesIcon = styled.img<{ location: string }>`
  filter: ${(props) =>
    props.location === "/tvSeries"
      ? "brightness(0) saturate(100%) invert(100%) sepia(3%) saturate(12%) hue-rotate(103deg) brightness(105%) contrast(105%)"
      : null};
`;
const MoviesIcon = styled.img<{ location: string }>`
  filter: ${(props) =>
    props.location === "/movies"
      ? "brightness(0) saturate(100%) invert(100%) sepia(3%) saturate(12%) hue-rotate(103deg) brightness(105%) contrast(105%)"
      : null};
`;
const HomeIcon = styled.img<{ location: string }>`
  filter: ${(props) =>
    props.location === "/home"
      ? "brightness(0) saturate(100%) invert(100%) sepia(3%) saturate(12%) hue-rotate(103deg) brightness(105%) contrast(105%)"
      : null};
`;
const Image = styled.img`
  width: 24px;
  height: 24px;
`;
const ImagesCon = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
const Container = styled.div`
  background: var(--Semi-Dark-Blue, #161d2f);
  padding: 2rem 1.6rem;
  display: flex;
  justify-content: space-between;
`;
