import { Link } from "react-router-dom";
import "./Header.scss";
import { useTranslation } from "react-i18next";

function Header({ headerData }) {
  const { t } = useTranslation();
  return (
    <div className="headeres">
      <div className="container">
        <h2>{headerData.title}</h2>
        <p className="headeres--text">{headerData.subTitle}</p>
        <Link to="/portal-category/volunteer/register">{t("voluntery.Signup")}</Link>
      </div>
    </div>
  );
}
export default Header;
