import "./ExpertProfileInfo.scss";

export default function ExpertProfileInfo({
  profileImg,
  name,
  address,
  position,
}) {
  return (
    <div className="expertprofile-info">
      <img src={profileImg} alt="error" />
      <div className="expertprofile-info-desc">
        <span>{address}</span>
        <h4>{name}</h4>
        <strong>{position}</strong>
      </div>
    </div>
  );
}
