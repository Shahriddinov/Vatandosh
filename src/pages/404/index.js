import React from "react";
import { Link } from "react-router-dom";


import znak from "../../assets/images/znak.png";
import znakLeft from "../../assets/images/znak-left.png";
import "./style.scss";

const NotFound = () => {
	

	return (
		<div className="container">
			<div className="not-found">
				<div className="img-box">
					<img className="back-image" src={require("../../assets/images/404-png.png")} alt="earth" />
					<img className="znak-left" src={znakLeft} alt="znak" />
					<img className="znak" src={znak} alt="znak2" />
				</div>
				<h2 className="title">Уппс Мы не можем найти эту страницу</h2>
				<Link to="/" className="go-home-btn">
					Домой
				</Link>
			</div>
		</div>
	);
};

export default NotFound;