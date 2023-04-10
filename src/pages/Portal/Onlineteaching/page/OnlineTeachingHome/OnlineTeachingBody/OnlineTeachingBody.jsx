import React from 'react';
import "./OnlineTeaching.scss"
import Logos from "../../../../../../assets/images/OnlineTeaching/image.svg"
import Logos2 from "../../../../../../assets/images/OnlineTeaching/image2.svg"
import Teacher from "../../../../../../assets/images/OnlineTeaching/Teacher.svg"

function OnlineTeachingBody(props) {
    return (
        <div className="onlineTeachingBody container">
            <div className="onlineTeachingBody_logotip">
                <div className="onlineTeachingBody_logotip_text">
                    Эта платформа работает в сотрудничестве с Министерством высшего и среднего специального образования
                </div>
                <div className="onlineTeachingBody_logotip_pho">
                    <img src={Logos} alt=""/>
                    <img src={Logos2} alt=""/>
                </div>
            </div>

            <div className="onlineTeachingBody_info">
                <div className="onlineTeachingBody_info_head">Вы какого уровня ?</div>
                <div className="onlineTeachingBody_info_test">
                    В этом курсе вы примете участие в серии задач, призванных повысить ваше собственное счастье и
                    выработать более продуктивные привычки. В качестве подготовки к этим заданиям профессор Лори Сантос
                    раскрывает неправильные представления о счастье,
                </div>
                <div className="onlineTeachingBody_info_buttons">Пройти тест</div>
            </div>

            <div className="onlineTeachingBody_level">
                <div className="onlineTeachingBody_level_start">
                    <div className="onlineTeachingBody_level_start_cardInfo">
                        <div className="onlineTeachingBody_level_start_cardInfo_titles">Beginner</div>
                        <div className="onlineTeachingBody_level_start_cardInfo_describtions">В этом курсе вы примете
                            участие в серии задач, призванных повысить ваше собственное счастье и выработать более
                        </div>
                        <div className="onlineTeachingBody_level_start_cardInfo_sends">Начать урок</div>
                    </div>
                    <div className="onlineTeachingBody_level_start_cardInfo">
                        <img className="onlineTeachingBody_level_start_cardInfo_teacher" src={Teacher} alt=""/>
                    </div>
                </div>
                <div className="onlineTeachingBody_level_start">
                    <div className="onlineTeachingBody_level_start_cardInfo">
                        <div className="onlineTeachingBody_level_start_cardInfo_titles">Beginner</div>
                        <div className="onlineTeachingBody_level_start_cardInfo_describtions">В этом курсе вы примете
                            участие в серии задач, призванных повысить ваше собственное счастье и выработать более
                        </div>
                        <div className="onlineTeachingBody_level_start_cardInfo_sends">Начать урок</div>
                    </div>
                    <div className="onlineTeachingBody_level_start_cardInfo">
                        <img className="onlineTeachingBody_level_start_cardInfo_teacher" src={Teacher} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OnlineTeachingBody;