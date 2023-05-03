import "./statesFriendship.scss";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { LazySpinner } from "../../../../component";
import { PORTAL_IMAGE_URL } from "../../../../services/api/utils";
import { MONTH, getDate } from "../../../../config/constants";

const StatesFriendshipInfo = (props) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const lng = useSelector((state) => state.language.language);

  const { t } = useTranslation();

  return (
    <section className="friendship-info">
      <div className="friendship-info__container container" ref={ref}>
        {inView ? (
          <div className="friendship-info__inner">
            <div className="friendship-info__box1">
              <div className="friendship-info__box1_img">
                <img
                  className="friendship-info__company_logo"
                  src={`${PORTAL_IMAGE_URL}${props.logo}`}
                  alt={props[`title_${lng}`]}
                />
              </div>

              <h3 className="friendship-info__company_name">{props.name}</h3>
            </div>

            <div className="friendship-info__box2">
              <div className="friendship-info__user_img">
                <img
                  className="friendship-info__user"
                  src={`${PORTAL_IMAGE_URL}${props.director_img}`}
                  alt={props.director}
                />
              </div>

              <ul className="friendship-info__list">
                <li className="friendship-info__item">
                  <span className="friendship-info__item--text1">
                    {t("leader")}
                  </span>
                  <span className="friendship-info__item--text2">
                    {props.director}
                  </span>
                </li>

                <li className="friendship-info__item">
                  <span className="friendship-info__item--text1">
                    {t("founding_date")}
                  </span>
                  <span className="friendship-info__item--text2">
                    {getDate(props.created_date).getFullYear()} yil{" "}
                    {MONTH[
                      getDate(props.created_date).getMonth()
                    ].toLowerCase()}
                  </span>
                </li>

                <li className="friendship-info__item">
                  <span className="friendship-info__item--text1">
                    {t("election_leader")}
                  </span>
                  <span className="friendship-info__item--text2">
                    {getDate(props.created_at).getFullYear()} yil{" "}
                    {MONTH[getDate(props.created_at).getMonth()].toLowerCase()}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <LazySpinner />
        )}
      </div>
    </section>
  );
};

export default StatesFriendshipInfo;
