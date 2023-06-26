import "../customStyles.scss";
import scripka from "../../../../../../../assets/images/expert/scripka-icon.svg";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { postExpertScientific } from "../../../../../../../reduxToolkit/ExpertSlice/RegisterSlice/extraReducer";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

export default function RegisterItem4({ activeBarItem, setactiveBarItem }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const [data, setData] = useState({
    academic_degree: "",
    scientific_title: "",
    topic_of_scientific_article: "",
    article_published_journal_name: "",
    scientific_article_created_at: "",
    article_url: "",
    article_file: "",
    main_science_directions: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = dispatch(postExpertScientific(data));
    if (res.arg) setactiveBarItem(4);
  };

  return (
    <form
      className={
        activeBarItem !== 3
          ? "registeritem4 registeritem-scaleHidden"
          : "registeritem4 registeritem-scaleActive"
      }
      onSubmit={handleSubmit}
    >
      <div className="registeritem4-wrapper registeritem-borderLeft">
        <h3 className="registeritem-title">{t("expert.reg4")}</h3>
        <div className="registeritem-form">
          <div className="registeritem-flexbox">
            <label htmlFor="" className="registeritem-label">
              <p>
                {t("expert.degree")}
                {pathname.includes("expert") ? <span> *</span> : null}
              </p>
              <div>
                <input
                  required={pathname.includes("expert") ? true : false}
                  type="text"
                  value={data.academic_degree}
                  minLength={3}
                  maxLength={5000}
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      academic_degree: e.target.value,
                    }))
                  }
                   placeholder={t("expert.inputplaceholder")}
                />
              </div>
            </label>
            <label htmlFor="" className="registeritem-label">
              <p>
                {t("expert.activitypositon")}
                {pathname.includes("expert") ? <span> *</span> : null}
              </p>
              <div>
                <input
                  required={pathname.includes("expert") ? true : false}
                  type="text"
                  minLength={3}
                  maxLength={5000}
                  value={data.scientific_title}
                   placeholder={t("expert.inputplaceholder")}
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      scientific_title: e.target.value,
                    }))
                  }
                />
              </div>
            </label>
          </div>
          <label htmlFor="" className="registeritem-label">
            <p>
              {t("expert.articletitle")}
              {pathname.includes("expert") ? <span> *</span> : null}
            </p>
            <div>
              <input
                required={pathname.includes("expert") ? true : false}
                type="text"
                minLength={3}
                maxLength={5000}
                value={data.topic_of_scientific_article}
                 placeholder={t("expert.inputplaceholder")}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    topic_of_scientific_article: e.target.value,
                  }))
                }
              />
            </div>
          </label>
          <div className="registeritem-flexbox">
            <label htmlFor="" className="registeritem-label">
              <p>
                {t("expert.articlename")}
                {pathname.includes("expert") ? <span> *</span> : null}
              </p>
              <div>
                <input
                  required={pathname.includes("expert") ? true : false}
                  type="text"
                  minLength={3}
                  maxLength={5000}
                  value={data.article_published_journal_name}
                   placeholder={t("expert.inputplaceholder")}
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      article_published_journal_name: e.target.value,
                    }))
                  }
                />
              </div>
            </label>
            <label htmlFor="" className="registeritem-label">
              <p>
                {t("expert.articledate")}
                {pathname.includes("expert") ? <span> *</span> : null}
              </p>
              <div>
                <input
                  required={pathname.includes("expert") ? true : false}
                  type="date"
                   placeholder={t("expert.inputplaceholder")}
                  value={data.scientific_article_created_at}
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      scientific_article_created_at: e.target.value,
                    }))
                  }
                />
              </div>
            </label>
          </div>
          <div className="registeritem-flexbox">
            <label htmlFor="" className="registeritem-label">
              <p>
                {t("expert.articlelink")}
                {pathname.includes("expert") ? <span> *</span> : null}
              </p>
              <div>
                <input
                  required={pathname.includes("expert") ? true : false}
                  type="text"
                  minLength={3}
                  maxLength={5000}
                   placeholder={t("expert.inputplaceholder")}
                  value={data.article_url}
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      article_url: e.target.value,
                    }))
                  }
                />
              </div>
            </label>
            <label htmlFor="" className="registeritem-label">
              <p>{t("expert.articlefile")}</p>
              <label htmlFor="registeritem-label-fileinput-id">
                <input
                  id="registeritem-label-fileinput-id"
                  className="registeritem-label-fileinput"
                  type="file"
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      article_file: e.target.files[0],
                    }))
                  }
                />
                <p>
                  {data.article_file
                    ? data.article_file?.name
                    : t("expert.uploadfile")}
                </p>
                <img src={scripka} alt="" />
              </label>
            </label>
          </div>
          <label htmlFor="" className="registeritem-label">
            <p>
              {t("expert.articlehobby")}
              {pathname.includes("expert") ? <span> *</span> : null}
            </p>
            <div>
              <input
                required={pathname.includes("expert") ? true : false}
                type="text"
                minLength={3}
                maxLength={5000}
                 placeholder={t("expert.inputplaceholder")}
                onChange={(e) => {
                  const arr = e.target.value.split(",");
                  setData((prev) => ({
                    ...prev,
                    main_science_directions: arr,
                  }));
                }}
              />
            </div>
            {data.main_science_directions.length > 0 ? (
              <ul className="registeritem-interest-list">
                {data.main_science_directions.map((el, index) => {
                  if (el.trim().length) return <li key={index}>{el}</li>;
                  else return null;
                })}
              </ul>
            ) : null}
          </label>
        </div>
      </div>
      <div className="registeritem-btnWrapper">
        <button type="submit" className="registeritem-submitBtn">
          {t("expert.nextbtn")}
        </button>
      </div>
    </form>
  );
}
