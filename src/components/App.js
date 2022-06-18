import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import "../styles/app.css";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
};

export default App;
