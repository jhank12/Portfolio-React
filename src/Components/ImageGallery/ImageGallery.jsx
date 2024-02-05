import React, { useState, useEffect, useRef } from "react";

import "./ImageGallery.css";



const ImageGallery = ({ name, images }) => {
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
        <div
          className="imgCounter"
          onClick={() => setCount((count) => count - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </div>

        {images?.map((img, idx) => {
          if (idx === count) {
            return (
              <>
                <img
                  key={img}
                  src={img}
                  alt={`${name.toLowerCase()}-project`}
                />
              </>
            );
          }
        })}

        <div
          className="imgCounter"
          onClick={() => setCount((count) => count + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
