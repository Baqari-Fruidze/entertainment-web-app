import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../App";
import Input from "../components/Input";
import BookmarkedMovies from "../components/BookmarkedMovies";
import BookmarkedTvSeries from "../components/BookmarkedTvSeries";

export default function Bookmarked() {
  const { data } = useContext(Context);
  return (
    <Parent>
      <Input />
      <BookmarkedMovies />
      <BookmarkedTvSeries />
    </Parent>
  );
}

const Parent = styled.div`
  padding: 2.6rem 1.6rem 2rem 1.6rem;
`;
