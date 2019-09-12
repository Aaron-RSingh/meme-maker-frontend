import React from "react";
import MemeGenerator from "./components/MemeGenerator";
import Header from "./components/Header";
import "./App.css";

import Gallery from "./components/Gallery";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <NavBar />
        <Route exact path="/" component={MemeGenerator} />
        <Route exact path="/gallery" component={Gallery} />
      </Router>
    </div>
  );
}

export default App;
