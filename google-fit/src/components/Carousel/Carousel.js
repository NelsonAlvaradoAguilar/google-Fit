import React, { useEffect, useRef, useState } from "react";
import "./Carousel.scss";

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const numItems = data.length;

  const carouselData = [...data, ...data];

  const scrollToIndex = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: "left",
        behavior: "smooth",
      });
    }
  };

  const handleNextSlide = () => {
    const nextIndex = (currentIndex + 1) % numItems;
    setCurrentIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const handlePrevSlide = () => {
    const prevIndex = currentIndex === 0 ? numItems - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    scrollToIndex(prevIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="carousel" ref={carouselRef}>
      <ul className="carousel__slide">
        <button
          className="carousel__buttons carousel__buttons--prev"
          onClick={handlePrevSlide}
        ></button>
        {carouselData.map((image, index) => (
          <li
            key={index}
            className={`carousel__card ${
              index >= currentIndex && index < currentIndex + 3 ? "visible" : ""
            }`}
          >
            <img
              className="carousel__card--img"
              src={image.image}
              alt={image.alt}
              text={image.text}
            />
          </li>
        ))}
        <button
          className="carousel__buttons carousel__buttons--next"
          onClick={handleNextSlide}
        ></button>
      </ul>
    </div>
  );
};

export default Carousel;
