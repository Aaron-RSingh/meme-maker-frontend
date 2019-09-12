import React from "react";
import Gallery from "react-grid-gallery";

const GalleryComponent = props => {
  return (
    <div>
      <div>
        <Gallery images={props.memes} />
      </div>
    </div>
  );
};
export default GalleryComponent;
