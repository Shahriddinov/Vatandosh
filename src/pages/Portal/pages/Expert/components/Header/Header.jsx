import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="headeres">
      <div className="container">
        <h2>“Vatandoshlar” ekspertlar kengashi</h2>
        <p className="headeres--text">Vatandosh ekspertlar kengashining elektron platformasi</p>
        <Link to="/portal/expert/expert-register">Ro‘yxatdan o‘tish</Link>
      </div>
    </div>
  );
}
export default Header;
