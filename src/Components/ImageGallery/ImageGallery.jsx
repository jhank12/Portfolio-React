import React from "react";

import "./ImageGallery.css";

const ImageGallery = ({ name, image }) => {
  return (
    <div className="projectImageGallery">
      <div className="imgContainer">
        <img key={image} src={image} alt={`${name.toLowerCase()}-project`} />
      </div>
    </div>
  );
};

export default ImageGallery;
