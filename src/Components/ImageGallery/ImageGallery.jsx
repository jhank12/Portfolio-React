import React, { useState, useEffect } from "react";

// import styles from './ImageGallery.module.css';
import "./ImageGallery.css";

const ImageGallery = ({ images }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === images.length) {
      setCount(0);
    } else if (count < 0) {
      setCount(images.length - 1);
    }
  }, [count]);

  return (
    <div className="projectImageGallery">
      <div className="imgContainer">
        <button onClick={() => setCount((count) => count - 1)}>
        </button>

        {images?.map((img, idx) => {
          if (idx === count) {
            return <img key={img} src={img} />;
          }
        })}


        <button onClick={() => setCount((count) => count + 1)}>
        </button>
      </div>

      {/* <div className="smallImagesContainer">
        {images?.map((img, idx) => {
          return <img key={img} src={img} onClick={() => setCount(idx)} />;
        })}
      </div> */}
    </div>
  );
};

export default ImageGallery;