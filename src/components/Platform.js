import React from "react";
import styled from "styled-components";

const Top = styled.div``;

const TopWrap = styled.div`
  padding: 12px 56px 12px 40px;
`;

const TopLeft = styled.div``;

const Ask = styled.div``;

const AskInput = styled.input`
  background: #fafafc;
  border-radius: 10px;
  border: none;
  outline: none;
  width: 441px;
  height: 54px;
  padding: 12px 16px;

  &::placeholder {
    color: #a3a3c2;
  }
`;

const TopRight = styled.div``;

const Platform = () => {
  return (
    <Top>
      <TopWrap>
        <TopLeft>
          <Ask>
            <AskInput type="text" placeholder="Ask us any question" />
          </Ask>
        </TopLeft>
        <TopRight></TopRight>
      </TopWrap>
    </Top>
  );
};

export default Platform;
