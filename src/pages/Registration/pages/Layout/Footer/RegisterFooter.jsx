import "./RegisterFooter.scss";
import napa from "../../../../../assets/images/icons/napa.png";

export default function RegisterFooter() {
  return (
    <footer className="auth-footer">
      <div className="container">
        <div className="auth-footer-wrapper">
          <img src={napa} alt="" />
          <span>Copyright © 2023 Vatandoshlar jamoat fondi</span>
        </div>
      </div>
    </footer>
  )
}
