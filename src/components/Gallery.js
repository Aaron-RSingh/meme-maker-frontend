import React from "react";

const Gallery = props => {
  return (
    <div className="row">
      <div className="column">
        {props.memes.map(meme => (
          <img src={meme.name} />
        ))}
      </div>
    </div>
  );
};
export default Gallery;
