import React, { Component } from "react";
import Gallery from "react-grid-gallery";

class GalleryComponent extends Component {
  render() {
    return (
      <div>
        <Gallery images={this.props.memes} />
      </div>
    );
  }
}

export default GalleryComponent;
