import React, { useEffect, useRef, useState } from "react";
import "./Carousel.scss";

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const numItems = data.length;

  // Duplicate the images to create a circular carousel
  const carouselData = [...data, ...data];

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      const itemWidth = containerWidth / 3; // Assuming three images are visible at a time
      const maxScrollLeft = carouselRef.current.scrollWidth - containerWidth;
      const scrollLeft = Math.min(index * itemWidth, maxScrollLeft);
      carouselRef.current.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleNextSlide = () => {
    const nextIndex = (currentIndex + 1) % numItems; // Calculate next index based on the updated state
    setCurrentIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const handlePrevSlide = () => {
    const prevIndex = currentIndex === 0 ? numItems - 1 : currentIndex - 1; // Calculate previous index
    setCurrentIndex(prevIndex);
    scrollToIndex(prevIndex);
  };

  return (
    <div className="carousel" ref={carouselRef}>
      <ul className="carousel__slide">
        <button
          className="carousel__buttons"
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
          className={"carousel__buttons carousel__buttons--down"}
          onClick={handleNextSlide}
        ></button>
      </ul>
    </div>
  );
};

export default Carousel;
//
