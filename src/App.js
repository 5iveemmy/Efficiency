import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Platform from "./components/Platform";
import SideBar from "./components/SideBar/SideBar";
import { GlobalStyle } from "./globalStyles";

const ForApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

function App() {
  return (
    <ForApp>
      <BrowserRouter>
        <GlobalStyle />
        <SideBar />
        <Platform />
      </BrowserRouter>
    </ForApp>
  );
}

export default App;
