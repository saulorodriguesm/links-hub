import "./App.css";
import Links from "./components/Links";
import ProfileImage from "./assets/me.jpg";

function LinksHub() {
  return (
    <div className="linkshub">
      <div className="linkshub-container">
        <div className="linkshub-profile">
          <img src={ProfileImage} className="linkshub-profile--image" />
          <span> @nutri.isadoralabiapari </span>
        </div>
        <Links />
      </div>
    </div>
  );
}

export default LinksHub;
