import { useState } from "react";
import "./formCard.scss";

import penSvg from "../../../../../../../../assets/images/portal/privateInformation/pen.svg";
import calendarSvg from "../../../../../../../../assets/images/portal/privateInformation/calendar.svg";
import skrepkaSvg from "../../../../../../../../assets/images/portal/privateInformation/skrepka.svg";
import trashIcon from "../../../../../../../../assets/images/choose/trashIcon.svg";
import xBtn from "../../../../../../../../assets/images/choose/xBtn.svg";
// libarary
import { motion } from "framer-motion";
import {
  cabinetScientificDelete,
  cabinetScientificDeleteArticleLinkHandler,
  cabinetScientificDeleteHobbyHandler,
  cabinetScientificHobbyHandler,
  cabinetScientificInputHandler,
  cabinetScientificSubmit,
} from "../extra";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const FormCard = ({ scientificData, data, setData }) => {
  const { t } = useTranslation();
  const [hobby, setHobby] = useState("");
  const dispatch = useDispatch();

  const inputHandler = (e) =>
    cabinetScientificInputHandler({ e, setData, setHobby });

  const hobbiesHandler = (e) =>
    cabinetScientificHobbyHandler({
      e,
      data,
      setHobby,
      setData,
    });

  const deleteHobbyHandler = (el) =>
    cabinetScientificDeleteHobbyHandler({ el, setData });

  const deleteArticleLinkHandler = () =>
    cabinetScientificDeleteArticleLinkHandler({
      data,
      setData,
    });

  const deleteHandler = (id) => cabinetScientificDelete({ id, dispatch });

  return (
    <div className="formCard-cont">
      <button className="formCard-cont-trash-btn">
        {" "}
        <motion.img
          onClick={() => deleteHandler(scientificData[0]?.id)}
          whileTap={{ scale: 0.9 }}
          src={trashIcon}
          alt="trashIcon"
        />
      </button>
      <form
        className="formCard-cont-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(cabinetScientificSubmit({ dispatch, data }));
        }}
      >
        <div className="formCard-cont-form-row1">
          <div>
            <label htmlFor="degree">
              {t("private-information.degree")}
              <span>*</span>
            </label>
            <div>
              <input
                type="text"
                id="degree"
                name="academic_degree"
                value={data?.academic_degree}
                onChange={inputHandler}
                required
              />
              <img src={penSvg} alt="degree" />
            </div>
          </div>

          <div>
            <label htmlFor="title">
              {t("private-information.title")}
              <span>*</span>
            </label>
            <div>
              <input
                type="text"
                id="title"
                name="scientific_title"
                value={data?.scientific_title}
                onChange={inputHandler}
                required
              />
              <img src={penSvg} alt="title" />
            </div>
          </div>
        </div>

        <div className="formCard-cont-form-row2">
          <label htmlFor="article">
            {t("private-information.articleTopic")}
            <span>*</span>
          </label>
          <div>
            <input
              type="text"
              id="article"
              name="topic_of_scientific_article"
              value={data?.topic_of_scientific_article}
              onChange={inputHandler}
              required
            />
            <img src={penSvg} alt="article" />
          </div>
        </div>

        <div className="formCard-cont-form-row3">
          <div>
            <label htmlFor="journal">
              {t("private-information.publishedJournal")}
              <span>*</span>
            </label>
            <div>
              <input
                type="text"
                id="journal"
                name="article_published_journal_name"
                value={data?.article_published_journal_name}
                onChange={inputHandler}
                required
              />
              <img src={penSvg} alt="journal" />
            </div>
          </div>

          <div className="formCard-cont-form-row3-inner2">
            <label htmlFor="release">
              {t("private-information.publishedDate")}
              <span>*</span>
            </label>
            <div>
              <input
                type="date"
                id="release"
                name="scientific_article_created_at"
                value={data?.scientific_article_created_at}
                onChange={inputHandler}
                required
              />
              <img src={calendarSvg} alt="release" />
            </div>
          </div>

          <div>
            <label htmlFor="articleLink">
              {t("private-information.articleLink")}
              <span>*</span>
            </label>
            <div>
              <input
                type="text"
                id="articleLink"
                name="article_url"
                value={data?.article_url}
                onChange={inputHandler}
                required
              />
              <img
                onClick={deleteArticleLinkHandler}
                className="articleLink"
                src={xBtn}
                alt="articleLink"
              />
            </div>
          </div>

          <div className="formCard-cont-form-row3-inner3">
            <label htmlFor="articleFile">
              {t("private-information.articleFile")}
              <span>*</span>
            </label>
            <div>
              <label htmlFor="articleFile">
                {typeof data?.article_file === "object"
                  ? data?.article_file?.name
                  : ""}
              </label>
              <input
                type="file"
                id="articleFile"
                name="article_file"
                value={""}
                onChange={inputHandler}
              />
              <img src={skrepkaSvg} alt="articleFile" />
            </div>
          </div>
        </div>

        <div className="formCard-cont-form-row4">
          <label htmlFor="hobby">
            {t("private-information.areasInterest")}
            <span>*</span>
          </label>
          <div>
            <input
              type="text"
              id="hobby"
              name="hobby"
              value={hobby}
              onKeyDown={hobbiesHandler}
              onChange={inputHandler}
              required
            />
            <img src={penSvg} alt="hobby" />
          </div>
          <div className="formCard-cont-form-row5">
            {data?.main_science_directions?.map((el, index) => (
              <div key={index}>
                <p>{el}</p>
                <img
                  onClick={() => deleteHobbyHandler(el)}
                  src={xBtn}
                  alt="xBtn"
                />
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormCard;
