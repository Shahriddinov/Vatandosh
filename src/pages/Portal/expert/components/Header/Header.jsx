import { Link } from "react-router-dom";
import "./Header.scss";

function Header({ headerData }) {
  return (
    <div className="headeres">
      <div className="container">
        <h2>
          {headerData.title
            ? headerData.title
            : "“Vatandoshlar” Jamoat birlashmalari"}
        </h2>
        <p className="headeres--text">
          {headerData.subTitle
            ? headerData.subTitle
            : "Vatandosh jamoat birlashmalaring elektron platformasining"}
        </p>
        <Link to={headerData.link}>{headerData.btnText}</Link>
      </div>
    </div>
  );
}
export default Header;
