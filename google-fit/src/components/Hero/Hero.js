import "./Hero.scss";
import React, { useState } from "react";
import heroImageLeft from "../../assets/images/Hero-left-enlarged.png";
import heroImageMiddle from "../../assets/images/hero-middle.png";
import heroImageRight from "../../assets/images/hero-right-enlarged.png";

function Hero() {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [expandedText, setExpandedText] = useState({
    left: false,
    middle: false,
    right: false,
  });

  const handleClick = (image) => {
    if (enlargedImage === image) {
      setEnlargedImage(null);
      setExpandedText((prevState) => ({ ...prevState, [image]: false }));
    } else {
      setExpandedText({
        left: image === "left",
        middle: image === "middle",
        right: image === "right",
      });
      setEnlargedImage(image);
      setExpandedText((prevState) => ({ ...prevState, [image]: true }));
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

      {/* Text that is only rendered when the respective image is clicked */}
      {expandedText.left && (
        <p className="hero-text__left--expanded">
          Get personalized fitness recommendations based on your activity,
          goals, and preferences with our new AI feature!
        </p>
      )}
      {expandedText.middle && (
        <p className="hero-text__middle--expanded">
          The fitness companion offers personalized stress management through
          data analysis
        </p>
      )}
      {expandedText.right && (
        <p className="hero-text__right--expanded">
          Tailored nutrition advice just for you!
        </p>
      )}

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
