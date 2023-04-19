import { useLocation } from "react-router-dom";
import "./ExpertProfileInfo.scss";

export default function ExpertProfileInfo({
  profileImg,
  name,
  address,
  position,
}) {
  const { pathname } = useLocation();

  return (
    <div className="expertprofile-info">
      <div className="expertprofile-info-main">
        <img src={profileImg} alt="error" />
        <div className="expertprofile-info-main-desc">
          <span>{address}</span>
          <h4>{name}</h4>
          <strong>{position}</strong>
        </div>
      </div>
      <div
        className="expertprofile-info-border"
        style={pathname.includes("online-webinar") ? null : { display: "none" }}
      />
    </div>
  );
}
