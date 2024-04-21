import "./Hero.scss";
import React, { useState } from "react";
import heroImageLeft from "../../assets/images/Hero-left-enlarged.png";
import heroImageMiddle from "../../assets/images/hero-middle.png";
import heroImageRight from "../../assets/images/hero-right-enlarged.png";

function Hero() {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleClick = (image) => {
    if (enlargedImage === image) {
      setEnlargedImage(null);
    } else {
      setEnlargedImage(image);
    }
  };
  return (
    <div className="hero">
      <p className="hero-text__left">
        Personalized fitness recommendations await!
      </p>
      <p className="hero-text__middle">
        Fitness companion that offers stress management{" "}
      </p>
      <p className="hero-text__right">
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
          className="hero-image__middle"
          src={heroImageMiddle}
          alt="Three girls running on a beach"
        ></img>
        <img
          className="hero-image__right"
          src={heroImageRight}
          alt="Three girls running on a beach"
        ></img>
      </div>
    </div>
  );
}

export default Hero;
