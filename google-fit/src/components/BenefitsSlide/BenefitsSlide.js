import React, { useState, useEffect } from "react";
import "../BenefitsSlide/BenefitsSlide.scss";

const BenefitsSlide = ({ benefitsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increase currentIndex by 1, and loop back to 0 if it exceeds the length of images array
      setCurrentIndex((prevIndex) => (prevIndex + 1) % benefitsData.length);
    }, 2000); // Change the interval time according to your requirement

    // Clean up function to clear the interval when component unmounts
    return () => clearInterval(interval);
  }, [benefitsData.length]); // useEffect will re-run whenever images.length changes

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
