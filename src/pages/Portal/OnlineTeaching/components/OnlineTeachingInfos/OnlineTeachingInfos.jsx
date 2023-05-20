import React from 'react';
import "./onlineTeachingInfos.scss";
import Team from "../../../../../assets/images/online-teaching/tesm.svg"
import Groups from "../../../../../assets/images/online-teaching/Group1.svg"

function OnlineTeachingInfos(props) {
    return (
        <div className="OnlineTeachingInfos">
            <div className="OnlineTeachingInfos_count container">
                <div className="OnlineTeachingInfos_count_categors">
                    <img className="border" src={Team} alt=""/>
                    <img className="OnlineTeachingInfos_count_categors_pattern" src={Groups} alt=""/>
                </div>
                <div className="OnlineTeachingInfos_count_writ">
                    <div className="OnlineTeachingInfos_count_writ_course">
                        Чему вы научитесь на наших курсах?
                    </div>
                    <p className="OnlineTeachingInfos_count_writ_courseText">
                        В этом курсе вы примете участие в серии задач, призванных повысить ваше собственное счастье и
                        выработать более продуктивные привычки. В качестве подготовки к этим заданиям профессор Лори
                        Сантос раскрывает неправильные представления о счастье, раздражающие особенности ума, которые
                        заставляют нас думать так, как мы думаем, и исследования, которые могут помочь нам измениться. В
                        конечном итоге вы будете готовы к тому, чтобы успешно включить в свою жизнь определенную
                        оздоровительную деятельность.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default OnlineTeachingInfos;