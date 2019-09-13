import MemeGenerator from "./components/MemeGenerator.js";
import Header from "./components/Header.js";
import GalleryComponent from "./components/GalleryComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import html2canvas from "html2canvas";

import React, { Component } from "react";

class App extends Component {
  state = {
    allMemeImages: []
  };

  componentDidMount() {
    this.getMemes();
  }

  getMemes = () => {
    fetch("http://localhost:3000/user_images")
      .then(resp => resp.json())
      .then(allMemeImages => {
        this.setState({ allMemeImages });
      });
  };

  postImage = imgData => {
    fetch("http://localhost:3000/user_images", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "lovely image",
        image_id: 1,
        user_id: 1,
        src: imgData,
        thumbnail: imgData,
        thumbnail_width: 200,
        thumbmail_height: 200
      })
    })
      .then(resp => resp.json())
      .then(meme => {
        debugger;
        this.setState({ allMemeImages: [meme, ...this.state.allMemeImages] });
      });
  };

  takeScreenshot = event => {
    event.preventDefault();
    let meme1 = document.querySelector(".meme");

    html2canvas(meme1, { useCORS: true }).then(canvas => {
      let imgData = canvas.toDataURL("image/png");
      console.log(imgData);
      this.postImage(imgData);
    });
  };

  render() {
    return (
      <div>
        <div>
          <Header></Header>
          <Router>
            <NavBar />
            <Route
              exact
              path="/"
              render={routeProps => (
                <MemeGenerator
                  screenshot={this.takeScreenshot}
                  routeProps={routeProps}
                />
              )}
            />
            <Route
              exact
              path="/gallery"
              render={() => {
                return <GalleryComponent memes={this.state.allMemeImages} />;
              }}
            />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
