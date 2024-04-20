import logo from "../../assets/logos/google-header-logo.svg";
import "../Header/Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="nav">
      <div className="logo">
        <Link
          to="https://play.google.com/store/apps/details?id=com.google.android.apps.fitness&hl=en_CA&gl=US"
          target="_blank"
        >
          <img src={logo} alt="Google Fit Logo"></img>
        </Link>
      </div>

      <div className="download-cta">
        <Link
          className="download-cta__link"
          to="https://play.google.com/store/apps/details?id=com.google.android.apps.fitness&hl=en_CA&gl=US"
          target="_blank"
        >
          Download app
        </Link>
      </div>
    </nav>
  );
}

export default Header;
