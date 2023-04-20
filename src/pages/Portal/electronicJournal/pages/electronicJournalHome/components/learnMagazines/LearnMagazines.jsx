import React from "react";
import { LearnMagazinesImg } from "../../../../../../../assets/images/electronic-journal";

import "./learnMagazines.scss";

const LearnMagazines = () => {
  return (
    <section className="learn-magazines">
      <div className="learn-magazines__container container">
        <div className="learn-magazines__inner">
          <div className="learn-magazines__inner_img">
            <img className="img" src={LearnMagazinesImg} alt="img" />
          </div>
          <div className="learn-magazines__inner_content">
            <h3 className="learn-magazines__inner_title">
              Чему вы научитесь на наших журналах?
            </h3>
            <p className="learn-magazines__inner_desc">
              В этом курсе вы примете участие в серии задач, призванных повысить
              ваше собственное счастье и выработать более продуктивные привычки.
              В качестве подготовки к этим заданиям профессор Лори Сантос
              раскрывает неправильные представления о счастье, раздражающие
              особенности ума, которые заставляют нас думать так, как мы думаем,
              и исследования, которые могут помочь нам измениться. В конечном
              итоге вы будете готовы к тому, чтобы успешно включить в свою жизнь
              определенную оздоровительную деятельность.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMagazines;
