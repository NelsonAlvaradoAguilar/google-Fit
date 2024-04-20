import React, { useRef, useState, useEffect } from "react";
import "./Carousel.scss";

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const numItems = data.length;

  // Duplicate the images to create a circular carousel
  const carouselData = [...data, ...data, ...data];

  const scrollToIndex = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: "left",
        behavior: "smooth",
      });
    }
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numItems);
    scrollToIndex(currentIndex + 1);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? numItems - 1 : prevIndex - 1
    );
    scrollToIndex(currentIndex === 0 ? numItems - 1 : currentIndex - 1);
  };

  return (
    <div className="carousel" ref={carouselRef}>
      <button onClick={handlePrevSlide}>Prev</button>
      <ul className="carousel__slide">
        {carouselData.map((image, index) => (
          <li key={index} className="carousel__list">
            <div className="carousel__card">
              <img
                className="carousel__img"
                src={image.image}
                alt={image.alt}
                style={{
                  display:
                    index >= currentIndex && index < currentIndex + 3
                      ? "block"
                      : "none",
                }}
              />
              <p className="carousel__text">{image.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={handleNextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
