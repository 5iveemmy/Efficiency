import React from "react";
import styled from "styled-components";
import Eff from "./Eff";
import Top from "./Top";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 136px;
  border-bottom: 1px solid #ecebf5;
`;

const Index = () => {
  return (
    <Header>
      <Top />
      <Eff />
    </Header>
  );
};

export default Index;
