import React from "react";
import styled from "styled-components";
import Eff from "./Header/Eff";
import Top from "./Header/Top";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 1178px;
  height: 136px;
  border-bottom: 1px solid #ecebf5;
`;

const Platform = () => {
  return (
    <Header>
      <Top />
      <Eff />
    </Header>
  );
};

export default Platform;
