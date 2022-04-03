import React from "react";
import styled from "styled-components";
import search from "../../assets/search.svg";
import bell from "../../assets/bell.svg";
import arrowDown from "../../assets/arrowDown.svg";

const TopNav = styled.div`
  height: 78px;
  border-bottom: 1px solid #ecebf5;
`;

const TopWrap = styled.div`
  padding: 12px 56px 12px 40px;
  display: flex;
  justify-content: space-between;
`;

const TopLeft = styled.div``;

const Ask = styled.div`
  position: relative;
  width: 441px;
  height: 54px;
`;

const AskInput = styled.input`
  background: #fafafc;
  border-radius: 10px;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  padding: 12px 16px;

  &::placeholder {
    color: #a3a3c2;
  }
`;

const AskSearch = styled.img`
  height: 14px;
  width: 14px;
  position: absolute;
  top: 35%;
  right: 3%;
`;

const TopRight = styled.div`
  border: 1px solid #ecebf5;
  box-sizing: border-box;
  border-radius: 8px;
  height: 54px;
  width: 175px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopRightWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 11px 16px;
`;

const Notification = styled.div`
  display: flex;
  justify-content: space-between;
  width: 38px;
`;

const ForCircle = styled.div`
  display: flex;
`;

const Circle = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid #6837ef;
  border-radius: 50%;
`;

const CircleArrow = styled.img`
  padding-left: 12px;
`;

const Line = styled.hr`
  height: 24px;
  border: 1px solid #ecebf5;
`;

const Bell = styled.img`
  width: 13.5px;
  height: 15.75px;
`;

const BellNumDiv = styled.div`
  background: #f25a68;
  border-radius: 4px;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BellNum = styled.span`
  font-size: 12px;
  color: #fff;
`;

const Top = () => {
  return (
    <TopNav>
      <TopWrap>
        <TopLeft>
          <Ask>
            <AskInput type="text" placeholder="Ask us any question" />
            <AskSearch src={search} />
          </Ask>
        </TopLeft>
        <TopRight>
          <TopRightWrap>
            <Notification>
              <Bell src={bell} />{" "}
              <BellNumDiv>
                <BellNum>3</BellNum>
              </BellNumDiv>
            </Notification>
            <Line />
            <ForCircle>
              <Circle></Circle>
              <CircleArrow src={arrowDown} />
            </ForCircle>
          </TopRightWrap>
        </TopRight>
      </TopWrap>
    </TopNav>
  );
};

export default Top;
