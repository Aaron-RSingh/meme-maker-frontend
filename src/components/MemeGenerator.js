import React, { Component } from "react";
import html2canvas from "html2canvas";
import GalleryComponent from "./GalleryComponent";
const urlForImages = "http://localhost:3000/images";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: ""
    };
    this.handleChangeForm = this.handleChangeForm.bind(this);
  }

  componentDidMount() {
    this.getImages();
  }

  randomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  getImages = () => {
    fetch(`${urlForImages}/${this.randomNumber(1, 80)}`)
      .then(resp => resp.json())
      .then(randomImage => {
        this.setState({
          randomImage: randomImage,
          bottomText: "Bottom Text",
          topText: "Top Text"
        });
      });
  };

  handleChangeForm = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmitForm = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <center>
          <form>
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
          </form>
        </center>
        <br></br>
        <center>
          <button className="example_a" onClick={this.getImages}>
            Generate New Image
          </button>
          <button className="example_a" onClick={this.props.screenshot}>
            Save to Gallery
          </button>
        </center>
        <br></br>
        <div className="meme">
          <img src={this.state.randomImage.download_url} alt="random" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
