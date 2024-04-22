import TestimonialSection from "../../components/Testimonials/Testimonials";
import AiRoll from "../../components/AiRoll/AiRoll";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Benefits from "../../components/Benefits/Benefits";
import StartTheJourney from "../../components/StartTheJourney/StartTheJourney";
import Jorney from "../../components/Jorney/Jorney";
import CallToAction from "../../components/CallToAction/CallToAction";
import "./Main.scss";
function Main() {
  return (
    <section className="main">
      <Header />
      <Hero />
      <TestimonialSection />
      <Benefits />
      <AiRoll />
      <StartTheJourney />
      <CallToAction />
      <Footer />
    </section>
  );
}

export default Main;
