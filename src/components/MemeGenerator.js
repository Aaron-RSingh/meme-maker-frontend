import React, { Component } from "react";
import html2canvas from "html2canvas";
const urlForImages = "http://localhost:3000/images";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "",
      allMemeImages: []
    };
    this.handleChangeForm = this.handleChangeForm.bind(this);
  }

  componentDidMount() {
    this.fetchImages();
  }

  randomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  getImages = () => {
    fetch(`${urlForImages}/${this.randomNumber(1, 80)}`)
      .then(resp => resp.json())
      .then(
        randomImage => {
          this.setState({
            randomImage: randomImage,
            bottomText: "Bottom Text",
            topText: "Top Text"
          });
        },
        () => {
          this.setState({
            requestFailed: true
          });
        }
      );
  };

  postImage = imgData => {
    return fetch("http://localhost:3000/user_images", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { name: JSON.stringify(imgData), image_id: 1, user_id: 1 }
    }).then(resp => console.log(resp));
  };

  handleChangeForm = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmitForm = event => {
    event.preventDefault();
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
        <form onSubmit={this.takeScreenshot}>
          <label>
            Top Text
            <input
              name="topText"
              type="text"
              value={this.state.topText}
              onChange={this.handleChangeForm}
            />
          </label>
          <label>
            Bottom Text
            <input
              name="bottomText"
              type="text"
              value={this.state.bottomText}
              onChange={this.handleChangeForm}
            />
          </label>
          <input type="submit" value="Take a screenshot!"></input>
        </form>
        <div className="meme">
          <button onClick={this.fetchImages}>Generate New Image</button>
          <img src={this.state.randomImage.download_url} alt="random" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
