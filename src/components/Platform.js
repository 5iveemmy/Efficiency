import React from "react";
import styled from "styled-components";
import Index from "./Header";
import search from "../assets/search.svg";
import arrowDown from "../assets/arrowDown.svg";

const Plat = styled.div`
  width: 1178px;
`;

const PlatWrap = styled.div`
  padding: 35px 56px 35px 40px;
`;

const PlatTop = styled.div``;

const PlatTopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EffAnaly = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

const EffRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 671px;
`;

const EffSearch = styled.div`
  position: relative;
  width: 350px;
  height: 44px;
`;

const SearchInput = styled.input`
  background: none;
  border-radius: 8px;
  border: 1px solid #e1e1eb;
  outline: none;
  width: 100%;
  height: 100%;
  padding: 12px 16px;

  &::placeholder {
    color: #a3a3c2;
    padding-left: 20px;
  }
`;

const Search = styled.img`
  height: 14px;
  width: 14px;
  position: absolute;
  top: 35%;
  left: 3%;
`;

const Filt = styled.div`
  border: 1px solid #e1e1eb;
  box-sizing: border-box;
  border-radius: 8px;
  width: 160px;
  height: 44px;
  color: #060213;
`;

const FiltWrap = styled.div`
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
`;

const FilText = styled.p``;

const FilDown = styled.img`
  cursor: pointer;
`;

const Exp = styled.div`
  width: 105px;
  height: 44px;
  border-radius: 8px;
  background-color: #25bb87;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffff;
  cursor: pointer;

  &:hover {
    background-color: #3bd7a1;
    transition: 0.4s ease-in-out;
  }
`;

const ExpWrap = styled.div`
  padding: 10px 16px;
`;

const Platform = () => {
  return (
    <>
      <Plat>
        <Index />
        <PlatWrap>
          <PlatTop>
            <PlatTopWrap>
              <EffAnaly>Efficiency Analytics</EffAnaly>
              <EffRight>
                <EffSearch>
                  <SearchInput type="text" placeholder="Search" />
                  <Search src={search} alt="search" />
                </EffSearch>
                <Filt>
                  <FiltWrap>
                    <FilText>Filter Options</FilText>
                    <FilDown src={arrowDown} />
                  </FiltWrap>
                </Filt>
                <Exp>
                  <ExpWrap>Export</ExpWrap>
                </Exp>
              </EffRight>
            </PlatTopWrap>
          </PlatTop>
        </PlatWrap>
      </Plat>
    </>
  );
};

export default Platform;
