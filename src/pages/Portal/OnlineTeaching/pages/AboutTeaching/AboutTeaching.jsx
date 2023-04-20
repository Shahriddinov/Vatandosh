import React from "react";
import AboutTeachingHero from "../../components/AboutTeachingHero/AboutTeachingHero";
import "./aboutTeaching.scss";
import Done from "../../../../../assets/images/online-teaching/done.svg";

function AboutTeaching(props) {
  return (
    <>
      <AboutTeachingHero />
      <div className="aboutTeaching container">
        <div className="aboutTeaching_done">Чему вы научитесь</div>
        <div className="aboutTeaching_cards">
          <div className="aboutTeaching_cards_steps">
            <div className="aboutTeaching_cards_steps_borders">
              <img
                className="aboutTeaching_cards_steps_borders_imgs"
                src={Done}
                alt=""
              />
            </div>
            <div className="aboutTeaching_cards_steps_discrib">
              <div className="aboutTeaching_cards_steps_discrib_title">
                100% онлайн
              </div>
              <div className="aboutTeaching_cards_steps_discrib_text">
                Начните сейчас и учитесь по собственному графику.
              </div>
            </div>
          </div>
          <div className="aboutTeaching_cards_steps">
            <div className="aboutTeaching_cards_steps_borders">
              <img
                className="aboutTeaching_cards_steps_borders_imgs"
                src={Done}
                alt=""
              />
            </div>
            <div className="aboutTeaching_cards_steps_discrib">
              <div className="aboutTeaching_cards_steps_discrib_title">
                Сертификат, ссылками на который можно делиться с другими людьми
              </div>
            </div>
          </div>
        </div>
        <div className="aboutTeaching_cards">
          <div className="aboutTeaching_cards_steps">
            <div className="aboutTeaching_cards_steps_borders">
              <img
                className="aboutTeaching_cards_steps_borders_imgs"
                src={Done}
                alt=""
              />
            </div>
            <div className="aboutTeaching_cards_steps_discrib">
              <div className="aboutTeaching_cards_steps_discrib_title">
                Гибкие сроки
              </div>
              <div className="aboutTeaching_cards_steps_discrib_text">
                Назначьте сроки сдачи в соответствии со своим графиком.
              </div>
            </div>
          </div>
          <div className="aboutTeaching_cards_steps">
            <div className="aboutTeaching_cards_steps_borders">
              <img
                className="aboutTeaching_cards_steps_borders_imgs"
                src={Done}
                alt=""
              />
            </div>
            <div className="aboutTeaching_cards_steps_discrib">
              <div className="aboutTeaching_cards_steps_discrib_title">
                Гибкие сроки
              </div>
              <div className="aboutTeaching_cards_steps_discrib_text">
                Назначьте сроки сдачи в соответствии со своим графиком.
              </div>
            </div>
          </div>
        </div>
        <div className="aboutTeaching_done bot">Об этом курсе</div>
        <div className="aboutTeaching_information">
          В этом курсе вы примете участие в серии задач, призванных повысить
          ваше собственное счастье и выработать более продуктивные привычки. В
          качестве подготовки к этим заданиям профессор Лори Сантос раскрывает
          неправильные представления о счастье, раздражающие особенности ума,
          которые заставляют нас думать так, как мы думаем, и исследования,
          которые могут помочь нам измениться. В конечном итоге вы будете готовы
          к тому, чтобы успешно включить в свою жизнь определенную
          оздоровительную деятельность.
        </div>
      </div>
    </>
  );
}

export default AboutTeaching;
