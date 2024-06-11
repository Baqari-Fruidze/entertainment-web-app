import React from "react";
import styled from "styled-components";
import logo from "/assets/logo.svg";
import homeNavigation from "/assets/icon-nav-home.svg";
import moviesNavigation from "/assets/icon-nav-movies.svg";
import tvSeriesNavigation from "/assets/icon-nav-tv-series.svg";
import bookmarkNavigation from "/assets/icon-nav-bookmark.svg";
import personImg from "/assets/image-avatar.png";

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="" />
      <ImagesCon>
        <img src={homeNavigation} alt="" />
        <img src={moviesNavigation} alt="" />
        <img src={tvSeriesNavigation} alt="" />
        <img src={bookmarkNavigation} alt="" />
      </ImagesCon>
      <Image src={personImg} alt="" />
    </Container>
  );
}
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
