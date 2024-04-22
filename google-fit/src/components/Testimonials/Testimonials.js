import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import { imageData } from "../../data/api";

import "./Testimonials.scss";
const TestimonialSection = () => {
  console.log(imageData);

  return (
    <section className="testimonies">
      <div className="testimonies__text-container">
        <h1 className="testimonies__title">Fitness Enthusiasts Speak Out</h1>
        <p className="testimonies__content">
          See what fellow fitness enthusiasts have to say about their
          experiences with Google Fit's AI features. From achieving goals to
          overcoming obstacles, their stories inspire and motivate. Join the
          conversation and share your own journey!
        </p>
      </div>
      <Carousel data={imageData}></Carousel>
    </section>
  );
};

export default TestimonialSection;
