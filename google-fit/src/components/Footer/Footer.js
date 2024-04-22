import logo from "../../assets/logos/google-footer-logo.svg";
import "../Footer/Footer.scss";
import { Link } from "react-router-dom";
import fb from "../../assets/icons/soc-med/fb.svg";
import tw from "../../assets/icons/soc-med/tw.svg";
import ln from "../../assets/icons/soc-med/ln.svg";
import be from "../../assets/icons/soc-med/be.svg";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-section__card">
        <Link
          to="https://play.google.com/store/apps/details?id=com.google.android.apps.fitness&hl=en_CA&gl=US"
          target="_blank"
        >
          <img src={logo} alt="Google Fit Logo"></img>
        </Link>
      </div>
      <div className="footer-section__card">
        <p>About</p>
        <p>Features</p>
        <p>Team</p>
      </div>
      <div className="footer-section__card">
        <p>Contact us</p>
      </div>
      <div className="footer-section__card">
        <p className="footer-section__card--soc-med--label">Let's do it!</p>
        <div>
          <Link to="https://www.facebook.com/" target="_blank">
            <img src={fb} alt="facebook"></img>
          </Link>
          <Link to="https://www.twitter.com/" target="_blank">
            <img src={tw} alt="twitter"></img>
          </Link>
          <Link to="https://www.linkedin.com/" target="_blank">
            <img src={ln} alt="linkedin"></img>
          </Link>
          <Link to="https://www.be.com/" target="_blank">
            <img src={be} alt="be"></img>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
