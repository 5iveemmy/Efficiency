import React from "react";
import styled from "styled-components";

const Side = styled.div`
  height: 100%;
  width: 262px;
  border-right: 1px solid #ecebf5;
`;
const SideWrap = styled.div`
  padding: 22px;
`;

const Meta = styled.div`
  border: 1px solid #ecebf5;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
`;

const MetaWrap = styled.div``;

const MetaHead = styled.h2`
  font-size: 14px;
`;

const MetaSmall = styled.span`
  font-size: 12px;
  color: #696d8c;
`;

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
