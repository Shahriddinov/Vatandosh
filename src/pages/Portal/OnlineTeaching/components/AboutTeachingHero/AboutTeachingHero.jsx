import React from 'react';
import "./aboutTeachingHero.scss"
import Arrow from "../../../../../assets/images/online-teaching/Pol.png"
import {Link} from "react-router-dom";

function AboutTeachingHero(props) {
    return (
        <div className="aboutTeachingHero">
            <div className="aboutTeachingHero_bodes ">
                <div className="aboutTeachingHero_bodes_items container">
                    <div className="aboutTeachingHero_bodes_items_wait">
                        <Link className="aboutTeachingHero_bodes_items_wait_links" to="/portal"> Asosiy sahifa</Link>
                        <img src={Arrow} alt="" className="aboutTeachingHero_bodes_items_wait_imgs"/>
                        <Link className="aboutTeachingHero_bodes_items_wait_links"
                              to="/portal-category/online-teaching"> Yangiliklar</Link>
                        <img src={Arrow} alt="" className="aboutTeachingHero_bodes_items_wait_imgs"/>
                        <Link className="aboutTeachingHero_bodes_items_wait_links" to="#"> Batafsil</Link>
                    </div>
                </div>
                <div className="aboutTeachingHero_bodes_middles container">
                    <div className="aboutTeachingHero_bodes_middles_titles">O’zbek tili darsi
                        boshlangich tushunchalar
                    </div>
                    <span className="aboutTeachingHero_bodes_middles_texts">4 402 492 уже зарегистрированы</span>
                    <span className="aboutTeachingHero_bodes_middles_texts">Последнее обновление </span>
                </div>
            </div>

        </div>
    );
}

export default AboutTeachingHero;
