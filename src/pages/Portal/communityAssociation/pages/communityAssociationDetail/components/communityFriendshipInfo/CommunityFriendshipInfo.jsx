import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";
import { getDate, monthObj } from "../../../../../../../config/constants";
import { LazySpinner } from "../../../../../../../component";
import "../../../../../../compatriots/components/statesFriendshipInfo/statesFriendship.scss";
import { useSelector } from "react-redux";

const CommunityFriendshipInfo = (props) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const lan = useSelector((state) => state.language.language);

  const { t } = useTranslation();

  const year =
    lan === "uz" ? "yil" : lan === "ru" ? "год" : lan === "en" ? "year" : "йил";

  return (
    <section className="friendship-info">
      <div className="friendship-info__container container" ref={ref}>
        {inView ? (
          <div className="friendship-info__inner">
            <div className="friendship-info__box1">
              <div className="friendship-info__box1_img">
                <img
                  className="friendship-info__company_logo"
                  src={`${PORTAL_IMAGE_URL}/${props.logo}`}
                  alt={props.title}
                />
              </div>

              <h3 className="friendship-info__company_name">{props.name}</h3>
            </div>

            <div className="friendship-info__box2">
              <div className="friendship-info__user_img">
                <img
                  className="friendship-info__user"
                  src={`${PORTAL_IMAGE_URL}/${props.director_img}`}
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
                    {getDate(props.created_date).getFullYear() +
                      " " +
                      year +
                      " " +
                      monthObj[lan][getDate(props.created_date).getMonth()]}
                  </span>
                </li>

                <li className="friendship-info__item">
                  <span className="friendship-info__item--text1">
                    {t("election_leader")}
                  </span>
                  <span className="friendship-info__item--text2">
                    {getDate(props.director_date).getFullYear() +
                      " " +
                      year +
                      " " +
                      monthObj[lan][getDate(props.director_date).getMonth()]}
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

export default CommunityFriendshipInfo;
