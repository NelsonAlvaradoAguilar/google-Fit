import TestimonialSection from "../../components/Testimonials/Testimonials";
import AiRoll from "../../components/AiRoll/AiRoll";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Benefits from "../../components/Benefits/Benefits";

import "./Main.scss";
function Main() {
  return (
    <section className="main">
      <Header />
      <TestimonialSection />
      <AiRoll />
      <Benefits />
      <Footer />
    </section>
  );
}

export default Main;
