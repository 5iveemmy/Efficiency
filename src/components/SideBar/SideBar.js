import React from "react";
import styled from "styled-components";

const Side = styled.div`
  height: 100%;
  width: 262px;
  /* background-color: red; */
`;
const SideWrap = styled.div``;

const Meta = styled.div``;

const MetaWrap = styled.div``;

const MetaHead = styled.h2``;

const MetaSmall = styled.p``;

const SideBar = () => {
  return (
    <Side>
      <SideWrap>
        <Meta>
          <MetaWrap>
            <MetaHead>Metacare</MetaHead>
            <MetaSmall>adeyinka@metacare.app</MetaSmall>
          </MetaWrap>
        </Meta>
      </SideWrap>
    </Side>
  );
};

export default SideBar;
