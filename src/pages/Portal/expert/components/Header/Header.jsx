import { Link } from "react-router-dom";
import "./Header.scss";

function Header({ headerData }) {
  return (
    <div className="expert-headeres">
      <div className="container expert-headeres-container">
        <h2>
          {headerData.title
            ? headerData.title
            : "“Vatandoshlar” Jamoat birlashmalari"}
        </h2>
        <p
          className="expert-headeres--text"
          dangerouslySetInnerHTML={{ __html: headerData?.subTitle }}
        />
        {headerData.expertAboutMoreLink && (
          <Link
            to="/portal-category/expert/council-about"
            className="expert-headeres__more--link"
          >
            {headerData.expertAboutMoreLink}
          </Link>
        )}
        <Link to={headerData.link}>{headerData.btnText}</Link>
      </div>
    </div>
  );
}
export default Header;
