import React from "react";
import styled from "styled-components";

const Side = styled.div`
  height: 100%;
  width: 300px;
  background-color: red;
`;
const SideWrap = styled.div``;

const SideBar = () => {
  return (
    <Side>
      <SideWrap></SideWrap>
    </Side>
  );
};

export default SideBar;
