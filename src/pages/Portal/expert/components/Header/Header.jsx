import { Link } from "react-router-dom";
import "./Header.scss";

function Header({ headerData }) {
  return (
    <div className="headeres">
      <div className="container">
        <h2>{headerData.title}</h2>
        <p className="headeres--text">{headerData.subTitle}</p>
        <Link to={headerData.link}>Ariza berish</Link>
      </div>
    </div>
  );
}
export default Header;
