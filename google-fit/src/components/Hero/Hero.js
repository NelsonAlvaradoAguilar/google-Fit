import "./Hero.scss";
import React, { useState } from "react";
import heroImageLeft from "../../assets/images/Hero-left-enlarged.png";
import heroImageMiddle from "../../assets/images/hero-middle.png";
import heroImageRight from "../../assets/images/hero-right-enlarged.png";

function Hero() {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [expandedText, setExpandedText] = useState({
    left: "Left Text",
    middle: "middle Text",
    right: "right Text",
  });
  const handleClick = (image) => {
    if (enlargedImage === image) {
      setEnlargedImage(null);
    } else {
      setEnlargedImage(image);
    }
  };
  return (
    <div className="hero">
      <p className={`hero-text__left${enlargedImage ? "--hide" : ""}`}>
        Personalized fitness recommendations await!
      </p>
      <p className={`hero-text__middle${enlargedImage ? "--hide" : ""}`}>
        Fitness companion that offers stress management{" "}
      </p>
      <p className={`hero-text__right${enlargedImage ? "--hide" : ""}`}>
        Get personalized nutrition tips instantly
      </p>
      <div className="hero-img-container">
        <img
          className={`hero-image__left${
            enlargedImage === "left" ? "--expanded" : ""
          } `}
          src={heroImageLeft}
          alt="Three girls running on a beach"
          onClick={() => handleClick("left")}
        ></img>
        <img
          className={`hero-image__middle${
            enlargedImage === "middle" ? "--expanded" : ""
          }`}
          src={heroImageMiddle}
          alt="Three girls running on a beach"
          onClick={() => handleClick("middle")}
        ></img>
        <img
          className={`hero-image__right${
            enlargedImage === "right" ? "--expanded" : ""
          }`}
          src={heroImageRight}
          alt="Three girls running on a beach"
          onClick={() => handleClick("right")}
        ></img>
      </div>
    </div>
  );
}

export default Hero;
