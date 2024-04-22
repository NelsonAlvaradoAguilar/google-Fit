import "./CallToAction.scss";
import googleButton from "../../assets/images/google-play-badge.png";
function CallToAction() {
  return (
    <section className="cta">
      <p className="cta__text"> Start your challenge, and download the app</p>
      <div className="cta__app-container">
        <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.fitness&hl=en_CA&gl=US&pli=1&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
          <img
            className="cta__app-button"
            alt="Get it on Google Play"
            src={googleButton}
          />
        </a>
        <a href="https://apps.apple.com/us/app/google-fit-activity-tracker/id1433864494?itsct=apps_box_badge&itscg=30200">
          <img
            className="cta__app-button"
            src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1556150400"
            alt="Download on the App Store"
          />
        </a>
      </div>
    </section>
  );
}

export default CallToAction;
