import React from 'react';
import AboutTeachingHero from "../../components/AboutTeachingHero/AboutTeachingHero";
import "./aboutTeaching.scss"
import Done from "../../../../../assets/images/online-teaching/done.svg"
function AboutTeaching(props) {
    return (
        <>
            <AboutTeachingHero/>
            <div className="aboutTeaching container">
               <div className="aboutTeaching_done">Чему вы научитесь</div>
                <div className="aboutTeaching_cards">
                    <div className="aboutTeaching_cards_steps">
                        <div className="aboutTeaching_cards_steps_borders">
                            <img className="aboutTeaching_cards_steps_borders_imgs" src={Done} alt=""/>
                        </div>
                        <div className="aboutTeaching_cards_steps_discrib">
                           <div className="aboutTeaching_cards_steps_discrib_title">100% онлайн</div>

                        </div>
                    </div>
                    <div className="aboutTeaching_cards_steps">Mutrod</div>
                </div>
            </div>
        </>
    );
}

export default AboutTeaching;