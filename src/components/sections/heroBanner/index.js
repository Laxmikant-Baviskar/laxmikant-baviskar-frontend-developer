// ================= New chnages in Bg =====================

import "./heroBanner.css";
import BackgroundImg from "../../../spac-x-bg-1.jpg";
export default function HeroBanner() {
  return (
    <div className="hero-container">
      <img src={BackgroundImg} />
      <p> Welcome To SpaceX </p>
    </div>
  );
}
