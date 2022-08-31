import React from "react";
import image1 from "../Images/slider-1.jpg";
import image2 from "../Images/slider-2.jpg";
import image3 from "../Images/slider-3.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
function Slider() {
  const slides = [image1, image3, image2];
  const [x, setX] = useState(-100);
  const goLeft = () => {
    x !== 0 && setX(x + 100);
  };
  const goRight = () => {
    x !== -100 * (slides.length - 1) && setX(x - 100);
  };
  return (
    <>
      <div className="slider">
        {slides.map((image, index) => {
          return (
            <div
              className="slide"
              key={index}
              style={{ transform: `translateX(${x}%)` }}
            >
              <img src={image} alt="imag" />
            </div>
          );
        })}
        <button
          className="go-left"
          onClick={() => {
            goLeft();
          }}
        >
          <FaChevronLeft className="icon" />
        </button>
        <button
          className="go-right"
          onClick={() => {
            goRight();
          }}
        >
          <FaChevronRight className="icon" />
        </button>
      </div>
    </>
  );
}
export default Slider;
