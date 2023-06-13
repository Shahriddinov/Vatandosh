import { useState } from "react";
import "./offer.scss";
import addPic from "../../../../../../../assets/images/choose/addPic.svg";
import trashSvg from "../../../../../../../assets/images/choose/trash.svg";
import { useCabinetOfferFetching } from "./hooks/useCabinetOfferFetching";

const Offer = () => {
  const [offerData, setOfferData] = useState({
    pics: [],
    cooperationOffer: "",
    addInfo: "",
  });

  const { data, setData, loading, error } = useCabinetOfferFetching();

  const textAreaHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setOfferData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const inputHandler = (e) => {
    const value = e.target.files[0];
    setOfferData((prev) => {
      return { ...prev, pics: [...prev.pics, value] };
    });
  };

  const deleteImgHandler = (el) => {
    setOfferData((prev) => {
      return {
        ...prev,
        pics: [...prev.pics].filter(
          (file) => file.lastModified !== el.lastModified
        ),
      };
    });
  };

  return (
    <div className="offerCont">
      <p>Taklifingiz uchun rasm</p>
      <div className="offerCont-imgCont">
        {offerData.pics.map((el, index) => (
          <div className="offerCont-imgCont-pics" key={index}>
            <img src={URL.createObjectURL(el)} alt="picsOffer" />
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
          <input type="file" id="addPic" onChange={inputHandler} />
        </div>
      </div>

      <div className="offerCont-textAreaCont">
        <label htmlFor="cooperationOffer">
          O‘zbekiston bilan ta’lim va ilmiy sohada hamkorlik borasida
          takliflaringiz <span>*</span>
        </label>
        <textarea
          name="cooperationOffer"
          id="cooperationOffer"
          onChange={textAreaHandler}
        ></textarea>
      </div>

      <div className="offerCont-textAreaCont">
        <label htmlFor="addInfo">
          Qo‘shimcha ma’lumotlar <span>*</span>
        </label>
        <textarea
          name="addInfo"
          id="addInfo"
          onChange={textAreaHandler}
        ></textarea>
      </div>
    </div>
  );
};

export default Offer;
