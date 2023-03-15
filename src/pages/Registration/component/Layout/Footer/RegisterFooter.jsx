import "./RegisterFooter.scss";
import napa from "../../../../../assets/images/icons/napa.png";
import background from "../../../../../assets/images/register/footer-background-image.svg";

export default function RegisterFooter() {
  return (
    <footer className="auth-footer">
      <img className="auth-footer-backgroundImage" src={background} alt="" />
      <div className="container">
        <img src={napa} alt="" />
        <span>Copyright © 2023 Vatandoshlar jamoat fondi</span>
      </div>
    </footer>
  )
}
