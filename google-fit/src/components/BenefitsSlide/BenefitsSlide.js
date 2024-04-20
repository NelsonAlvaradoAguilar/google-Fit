import React, { useState, useEffect } from "react";
import "../BenefitsSlide/BenefitsSlide.scss";

const BenefitsSlide = ({ benefitsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % benefitsData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [benefitsData.length]);

  return (
    <div>
      <img
        className="slide"
        src={benefitsData[currentIndex]}
        alt={`img${currentIndex}`}
      />
    </div>
  );
};

export default BenefitsSlide;
