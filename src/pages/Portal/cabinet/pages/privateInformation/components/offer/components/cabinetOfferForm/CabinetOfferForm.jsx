import React from "react";
import { PORTAL_IMAGE_URL } from "../../../../../../../../../services/api/utils";
import {
  cabinetOfferDeleteImageHandler,
  cabinetOfferInputHandler,
  cabinetOfferSubmit,
} from "../../extra";

import addPic from "../../../../../../../../../assets/images/choose/addPic.svg";
import trashSvg from "../../../../../../../../../assets/images/choose/trash.svg";
import { useDispatch } from "react-redux";

import "./cabinetOfferForm.scss";

const CabinetOfferForm = ({ data, setData, expertSuggestionsData }) => {
  const dispatch = useDispatch();

  const textAreaHandler = (e) => cabinetOfferInputHandler({ e, setData });

  const deleteImgHandler = (el) =>
    cabinetOfferDeleteImageHandler({ el, setData });

  return (
    <form
      className="offerCont"
      onSubmit={(e) => {
        e.preventDefault();
        cabinetOfferSubmit({ dispatch, data, expertSuggestionsData });
      }}
      id="cabinetOfferSubmit"
    >
      <p>Taklifingiz uchun rasm</p>
      <div className="offerCont-imgCont">
        {(data.images ? data.images : []).map((el, index) => (
          <div className="offerCont-imgCont-pics" key={index}>
            <img
              src={`${
                typeof el === "string"
                  ? PORTAL_IMAGE_URL + el
                  : URL.createObjectURL(el)
              }`}
              alt="picsOffer"
            />
            <div
              className="offerCont-imgCont-pics-deleteBtn"
              onClick={() => deleteImgHandler(el)}
            >
              <img src={trashSvg} alt="Удалить" />
              <p>Удалить</p>
            </div>
          </div>
        ))}

        <div className="offerCont-imgCont-plusBtn">
          <label htmlFor="addPic">
            <img src={addPic} alt="" />
          </label>
          <input
            type="file"
            id="addPic"
            name="images"
            onChange={textAreaHandler}
          />
        </div>
      </div>

      <div className="offerCont-textAreaCont">
        <label htmlFor="cooperationOffer">
          O‘zbekiston bilan ta’lim va ilmiy sohada hamkorlik borasida
          takliflaringiz <span>*</span>
        </label>
        <textarea
          id="cooperationOffer"
          value={data.suggestions}
          name="suggestions"
          onChange={textAreaHandler}
        ></textarea>
      </div>

      <div className="offerCont-textAreaCont">
        <label htmlFor="addInfo">
          Qo‘shimcha ma’lumotlar <span>*</span>
        </label>
        <textarea
          id="addInfo"
          name="additional_information"
          value={data.additional_information}
          onChange={textAreaHandler}
        ></textarea>
      </div>
    </form>
  );
};

export default CabinetOfferForm;
