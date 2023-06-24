import "./formCard.scss";
import { PORTAL_IMAGE_URL } from "../../../../../../../../services/api/utils";
import trashIcon from "../../../../../../../../assets/images/choose/trashIcon.svg";
import arrowIcon from "../../../../../../../../assets/images/choose/arrowIcon.svg";
import penSvg from "../../../../../../../../assets/images/portal/privateInformation/pen.svg";
import plusIcon from "../../../../../../../../assets/images/choose/addPic.svg";
import trashIconSmall from "../../../../../../../../assets/images/choose/trash.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const FormCard = ({ el, data, setData, deleteCompHandler, index }) => {
  const { t } = useTranslation();
  const [openCard, setOpenCard] = useState(true);

  const inputHandler = (e, id) => {
    const name = e.target.name;
    const changeData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          [name]:
            name === "imagesBrowser"
              ? [...item.imagesBrowser, e.target.files[0]]
              : e.target.value,
        };
      }
      return item;
    });
    setData(changeData);
  };

  const deleteImgHandler = (id, each, from) => {
    setData((prev) => {
      const newData = prev.map((el) => {
        if (el.id === id) {
          if (from === "client") {
            return {
              ...el,
              imagesBrowser: [...el.imagesBrowser].filter(
                (img) => img !== each
              ),
            };
          } else if (from === "server") {
            return {
              ...el,
              images: [...el.images].filter((img) => img !== each),
            };
          }
        }
        return el;
      });
      return newData;
    });
  };

  return (
    <motion.div
      className="formCard"
      animate={{ height: !openCard ? "45px" : "" }}
    >
      <div className="formCard-part1">
        <h1>
          {index + 1}. {el.title}
        </h1>
        <div>
          <motion.img
            animate={{ rotate: openCard ? 180 : 0 }}
            onClick={() => setOpenCard((prev) => !prev)}
            src={arrowIcon}
            alt="arrow"
          />
          <motion.img
            whileTap={{ scale: 0.9 }}
            src={trashIcon}
            alt="trashIcon"
            onClick={() => deleteCompHandler(el.id)}
          />
        </div>
      </div>

      <div className="formCard-form-part2">
        <label htmlFor={`${el.id}a`}>
          {t("private-information.articleTopic")}
          <span>*</span>
        </label>
        <div>
          <input
            type="text"
            id={`${el.id}a`}
            name="title"
            value={el.title}
            onChange={(e) => inputHandler(e, el.id)}
          />
          <img src={penSvg} alt="penSvg" />
        </div>
      </div>

      <div className="formCard-form-part3">
        {el?.images?.map((each, index) => (
          <div key={index}>
            <img src={`${PORTAL_IMAGE_URL}/${each}`} alt="imgloaded" />
            <div
              className="formCard-form-part3-deleteIcon"
              onClick={() => deleteImgHandler(el.id, each, el.from)}
            >
              <img src={trashIconSmall} alt="trashicon" />
              <p>Удалить</p>
            </div>
          </div>
        ))}
        {el?.imagesBrowser?.map((each, index) => (
          <div key={index}>
            <img src={URL.createObjectURL(each)} alt="imgloaded" />
            <div
              className="formCard-form-part3-deleteIcon"
              onClick={() => deleteImgHandler(el.id, each, el.from)}
            >
              <img src={trashIconSmall} alt="trashicon" />
              <p> {t("private-information.deleteImage")}</p>
            </div>
          </div>
        ))}
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="formCard-form-part3-addImg"
        >
          <label htmlFor={el.id}>
            <img src={plusIcon} alt="plusIcon" />
          </label>
          <input
            type="file"
            id={el.id}
            name="imagesBrowser"
            onChange={(e) => inputHandler(e, el.id)}
          />
        </motion.div>
      </div>

      <div className="formCard-form-part4">
        <label htmlFor={el.id}>
          {t("private-information.yourComment")} <span>*</span>
        </label>
        <textarea
          name="description"
          id={el.id}
          value={el.description}
          onChange={(e) => inputHandler(e, el.id)}
        ></textarea>
      </div>
      <div className="formCard-hl"></div>
    </motion.div>
  );
};

export default FormCard;
