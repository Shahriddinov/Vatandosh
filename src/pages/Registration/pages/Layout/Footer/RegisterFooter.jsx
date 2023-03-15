import "./RegisterFooter.scss";
import napa from "../../../../../assets/images/icons/napa.png";
import background from "../../../../../assets/images/register/footer-background-image.svg";

export default function RegisterFooter() {
  return (
    <footer className="auth-footer">
      <div className="container">
        <img src={napa} alt="" />
        <span>Copyright © 2023 Vatandoshlar jamoat fondi</span>
      </div>
    </footer>
  )
}
