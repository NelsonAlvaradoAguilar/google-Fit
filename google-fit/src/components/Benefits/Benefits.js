import "../Benefits/Benefits.scss";
import React from "react";
import decor from "../../assets/images/benefits/yellow-blue-circles-decor.svg";
import BenefitsSlide from "../BenefitsSlide/BenefitsSlide";
import benefitsDesc from "../../assets/images/benefits/benefits-description.svg";
import { benefitsData } from "../../data/api";

const Benefits = () => {
  return (
    <main className="main-container">
      <div className="benefits">
        <BenefitsSlide benefitsData={benefitsData} />
        <img
          className="benefits__description"
          src={benefitsDesc}
          alt="benefits"
        ></img>
      </div>
      <img className="benefits__decor" src={decor} alt="dots decor"></img>
    </main>
  );
};

export default Benefits;
