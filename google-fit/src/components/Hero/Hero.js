import "./Hero.scss";
import heroImageLeft from "../../assets/images/Hero-left-enlarged.png";
import heroImageMiddle from "../../assets/images/hero-middle-enlarged.png";
import heroImageRight from "../../assets/images/hero-right-enlarged.png";

function Hero() {
  return (
    <div className="hero">
      <img
        className="hero-image__left"
        src={heroImageLeft}
        alt="Three girls running on a beach"
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
  );
}

export default Hero;
