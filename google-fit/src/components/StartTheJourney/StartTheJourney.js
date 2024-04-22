import "./StartTheJourney.scss";
import bubbles2 from "../../assets/bubbles/Group 6.svg";
import phoneImg from "../../assets/startTheJourney/iPhone 15 Pro Portrait Mockup.svg";
import { Link } from "react-router-dom";

const StartTheJourney = () => {
  return (
    <section className="journey">
      <img className="journey__bubbles" src={bubbles2}></img>
      <div className="journey__phone-container">
        <h1 className="journey__title">Start the journey </h1>
        <Link
          to="https://play.google.com/store/apps/details?id=com.google.android.apps.fitness&hl=en_CA&gl=US"
          target="_blank"
        >
          <img className="journey__phone" src={phoneImg}></img>
        </Link>
      </div>
    </section>
  );
};
export default StartTheJourney;
//
