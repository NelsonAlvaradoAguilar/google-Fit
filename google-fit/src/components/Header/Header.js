import googleFitLogo from "../../assets/logos/google-fit-icon.svg";
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
          <img
            className="logo__pic"
            src={googleFitLogo}
            alt="Google Fit Logo"
          ></img>
        </Link>
        <p className="logo__label">
          <span className="logo__label--google">Google</span>
          <span className="logo__label--fit">Fit</span>
        </p>
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
