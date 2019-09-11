import React from "react";
import MemeGenerator from "./components/MemeGenerator.js";
import Header from "./components/Header.js";
import logo from "./logo.svg";
import image from "./test.png";
import "./App.css";

function App() {
  return (
    <div>
      <Header></Header>
      <MemeGenerator></MemeGenerator>
    </div>
  );
}

export default App;
