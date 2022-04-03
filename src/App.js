import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./components/SideBar/SideBar";
import { GlobalStyle } from "./globalStyles";

const ForApp = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <ForApp>
      <BrowserRouter>
        <GlobalStyle />
        <SideBar />
      </BrowserRouter>
    </ForApp>
  );
}

export default App;
