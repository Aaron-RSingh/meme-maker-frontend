import React, { Component } from "react";

const urlForImages = "http://localhost:3000/images/1026";

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      requestFailed: false
    };
  }

  componentDidMount() {
    fetch(urlForImages)
      .then(resp => {
        if (!resp.ok) {
          throw Error("Network request failed");
        }
        return resp;
      })
      .then(resp => resp.json())
      .then(
        image => {
          this.setState({ image });
        },
        () => {
          this.setState({
            requestFailed: true
          });
        }
      );
  }

  render() {
    if (this.state.requestFailed) return <p>Failed to render image</p>;
    if (!this.state.image) return <p>Loading...</p>;
    return (
      <div>
        <img
          className="Image-size"
          src={this.state.image.download_url}
          alt={"get r3kt bro"}
          width={400}
          height={400}
        />
      </div>
    );
  }
}

export default Images;
