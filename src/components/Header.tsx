import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import logo from "/assets/logo.svg";
import homeNavigation from "/assets/icon-nav-home.svg";
import moviesNavigation from "/assets/icon-nav-movies.svg";
import tvSeriesNavigation from "/assets/icon-nav-tv-series.svg";
import bookmarkNavigation from "/assets/icon-nav-bookmark.svg";
import personImg from "/assets/image-avatar.png";
import { Link } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <Container>
      <Logo src={logo} alt="" />
      <ImagesCon>
        <Link to={"/home"}>
          <HomeIcon src={homeNavigation} alt="" location={location.pathname} />
        </Link>
        <Link to={"/movies"}>
          <MoviesIcon
            src={moviesNavigation}
            alt=""
            location={location.pathname}
          />
        </Link>
        <Link to={"/tvSeries"}>
          <TvSeriesIcon
            src={tvSeriesNavigation}
            alt=""
            location={location.pathname}
          />
        </Link>
        <Link to={"/bookmarked"}>
          <BookmarkedIcon
            src={bookmarkNavigation}
            alt=""
            location={location.pathname}
          />
        </Link>
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

const Logo = styled.img`
  width: 32px;
  height: 25px;
`;
const Image = styled.img`
  width: 24px;
  height: 24px;
  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
  @media (min-width: 1440px) {
    width: 4rem;
    height: 4rem;
    margin-top: auto;
  }
`;
const ImagesCon = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media (min-width: 768px) {
    gap: 2.5rem;
  }
  @media (min-width: 1440px) {
    flex-direction: column;
    gap: 4rem;
  }
`;
const Container = styled.div`
  border-radius: 10px;
  background: var(--Semi-Dark-Blue, #161d2f);
  padding: 2rem 1.6rem;
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    padding: 2.4rem;
    width: 95%;
    margin: 0 auto;
    margin-top: 2.3rem;
  }
  @media (min-width: 1440px) {
    height: 96rem;
    width: 9.6rem;
    border-radius: 20px;
    flex-direction: column;
    gap: 13.6rem;
    padding: 3.5rem 2.8rem;
    margin-top: 3.2rem;
    margin-left: 3.2rem;
  }
`;
