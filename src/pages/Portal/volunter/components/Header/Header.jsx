import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="headeres">
      <div className="container">
        <h2>“Vatandoshlar” Volontyorlar</h2>
        <p className="headeres--text">
          Vatandosh volontyorlar elektron platformasi
        </p>
        <Link to="/expert/register">Ariza berish</Link>
      </div>
    </div>
  );
}
export default Header;
