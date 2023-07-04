import { useDispatch, useSelector } from "react-redux";
import ShareFriends from "../../../../../component/ShareFriends/ShareFriends";
import "./VictorinaAbout.scss";
import { getQuizPage } from "../../../../../reduxToolkit/victorinapage/victorina-page";
import { useEffect } from "react";
import { imageUrl } from "../../../../../services/api/utils";
import VictorinaStatics from "../VictorinaHome/components/VictorinaStatics/VictorinaStatics";
import { useTranslation } from "react-i18next";

function VictorinaAbout() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const pageData = useSelector((state) => state.pageSlice.pageData);

  const lan = useSelector((state) => state.language.language);

  useEffect(() => {
    dispatch(getQuizPage());
  }, [dispatch, lan]);

  return (
    <div className="about">
      <div className="container">
        <div className="about-top">
          <h3>{t("victorinaAbout")}</h3>
          <span>
            <a href="/portal-category/victorina">{t("expert.main")}</a>
            <p>{t("expert.detail")}</p>
          </span>
        </div>
        <div className="about-page">
          <div className="about-left">
            <img
              className="victorina-images"
              src={`${imageUrl}/${pageData?.image}`}
              alt="error"
            />
            <h3 className="about-title">{pageData?.title}</h3>
            <p className="about-text">{pageData.excerpt}</p>
            <p
              className="about-text"
              dangerouslySetInnerHTML={{ __html: pageData.body }}
            />
            <ShareFriends />
          </div>
          <VictorinaStatics pageData={pageData} />
        </div>
      </div>
    </div>
  );
}
export default VictorinaAbout;
