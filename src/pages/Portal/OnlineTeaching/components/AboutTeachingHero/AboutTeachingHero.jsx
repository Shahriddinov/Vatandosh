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
                          <Link className="aboutTeachingHero_bodes_items_wait_links" to="/"> Asosiy</Link>
                           <img src={Arrow} alt="" className="aboutTeachingHero_bodes_items_wait_imgs"/>
                       </div>
                </div>
            </div>

        </div>
    );
}

export default AboutTeachingHero;
