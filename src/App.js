import React from "react";
import { BrowserRouter } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <SideBar />
    </BrowserRouter>
  );
}

export default App;
