import React from "react";
import styled from "styled-components";

const EffNav = styled.div``;

const EffNavWrap = styled.div`
  padding: 16px 56px 16px 40px;
`;

const EffNavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 446px;
  height: 42px;
  cursor: pointer;
`;

const EffList = styled.li`
  color: ${({ deep }) => (deep ? "#060213" : "#696D8C")};
  border-bottom: ${({ border }) => (border ? "1px solid #6837EF" : "none")};

  &:hover {
    border-bottom: 1px solid #6837ef;
  }
`;

const Eff = () => {
  return (
    <EffNav>
      <EffNavWrap>
        <EffNavList>
          <EffList deep border>
            Efficiency
          </EffList>
          <EffList>Volume</EffList>
          <EffList>Customer Satisfication</EffList>
          <EffList>Backlog</EffList>
        </EffNavList>
      </EffNavWrap>
    </EffNav>
  );
};

export default Eff;
