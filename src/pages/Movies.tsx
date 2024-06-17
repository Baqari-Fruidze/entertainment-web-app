import React from "react";
import styled from "styled-components";
import Input from "../components/Input";

export default function Movies() {
  return (
    <Parent>
      <Input />
    </Parent>
  );
}

const Parent = styled.div`
  padding: 2.6rem 1.6rem 2rem 1.6rem;
`;
