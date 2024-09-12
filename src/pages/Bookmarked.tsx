import styled from "styled-components";
import Input from "../components/Input";
import BookmarkedMovies from "../components/BookmarkedMovies";
import BookmarkedTvSeries from "../components/BookmarkedTvSeries";

export default function Bookmarked() {
  return (
    <Parent>
      <Input />
      <BookmarkedMovies />
      <BookmarkedTvSeries />
    </Parent>
  );
}

const Parent = styled.div`
  padding: 6.2rem 1.6rem 2rem 1.6rem;
`;
