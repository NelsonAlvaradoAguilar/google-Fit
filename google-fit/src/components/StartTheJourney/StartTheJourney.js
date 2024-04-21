import "./StartTheJourney.scss";
import bubbles2 from "../../assets/bubbles/Group 6.svg";
const StartTheJourney = () => {
  return (
    <section className="hero-journey">
      <h1 className="hero-journey__title">Start the journey </h1>
      <img className="hero-journey__bubbles" src={bubbles2}></img>
    </section>
  );
};
export default StartTheJourney;
