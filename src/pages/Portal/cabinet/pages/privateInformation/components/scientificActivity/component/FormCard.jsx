import "./formCard.scss";

import penSvg from "../../../../../../../../assets/images/portal/privateInformation/pen.svg";
import calendarSvg from "../../../../../../../../assets/images/portal/privateInformation/calendar.svg";
import skrepkaSvg from "../../../../../../../../assets/images/portal/privateInformation/skrepka.svg";
import xBtn from "../../../../../../../../assets/images/choose/xBtn.svg";
import { useState } from "react";

const FormCard = () => {
  const [data, setData] = useState({
    degree: "",
    title: "",
    article: "",
    journal: "",
    release: "",
    articleLink: "",
    articleFile: "",
    hobby: "",
    hobbies: ["matematika"],
  });
  const inputHandler = (e) => {
    const name = e.target.name;
    const value = name === "articleFile" ? e.target.files[0] : e.target.value;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const hobbiesHandler = (e) => {
    if (e.key === "Enter" && data.hobby !== "") {
      setData((prev) => {
        return {
          ...prev,
          hobby: "",
          hobbies: [...prev.hobbies, e.target.value],
        };
      });
    }
    return;
  };

  const deleteHobbyHandler = (el) => {
    setData((prev) => {
      return {
        ...prev,
        hobbies: [...prev.hobbies].filter((each) => each !== el),
      };
    });
  };

  const deleteArticleLinkHandler = () => {
    if (data.articleLink !== "") {
      setData((prev) => {
        return { ...prev, articleLink: "" };
      });
      return;
    }
    return;
  };

  return (
    <div className="formCard-cont">
      <form className="formCard-cont-form">
        <div className="formCard-cont-form-row1">
          <div>
            <label htmlFor="degree">
              Ilmiy darajasi <span>*</span>
            </label>
            <div>
              <input
                type="text"
                id="degree"
                name="degree"
                onChange={inputHandler}
              />
              <img src={penSvg} alt="degree" />
            </div>
          </div>

          <div>
            <label htmlFor="title">
              Ilmiy unvoni <span>*</span>
            </label>
            <div>
              <input
                type="text"
                id="title"
                name="title"
                onChange={inputHandler}
              />
              <img src={penSvg} alt="title" />
            </div>
          </div>
        </div>

        <div className="formCard-cont-form-row2">
          <label htmlFor="article">
            Ilmiy maqola mavzusi <span>*</span>
          </label>
          <div>
            <input
              type="text"
              id="article"
              name="article"
              onChange={inputHandler}
            />
            <img src={penSvg} alt="article" />
          </div>
        </div>

        <div className="formCard-cont-form-row3">
          <div>
            <label htmlFor="journal">
              Chop etilgan jurnal nomi <span>*</span>
            </label>
            <div>
              <input
                type="text"
                id="journal"
                name="journal"
                onChange={inputHandler}
              />
              <img src={penSvg} alt="journal" />
            </div>
          </div>

          <div className="formCard-cont-form-row3-inner2">
            <label htmlFor="release">
              Chop etilgan sana <span>*</span>
            </label>
            <div>
              <input
                type="date"
                id="release"
                name="release"
                onChange={inputHandler}
              />
              <img src={calendarSvg} alt="release" />
            </div>
          </div>

          <div>
            <label htmlFor="articleLink">
              Maqola havolasi <span>*</span>
            </label>
            <div>
              <input
                type="text"
                id="articleLink"
                name="articleLink"
                onChange={inputHandler}
                value={data.articleLink}
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
              Maqola fayli <span>*</span>
            </label>
            <div>
              <label htmlFor="articleFile">maqola.doc</label>
              <input
                type="file"
                id="articleFile"
                name="articleFile"
                onChange={inputHandler}
              />
              <img src={skrepkaSvg} alt="articleFile" />
            </div>
          </div>
        </div>

        <div className="formCard-cont-form-row4">
          <label htmlFor="hobby">
            Asosiy ilmiy qiziqish yo‘nalishlari <span>*</span>
          </label>
          <div>
            <input
              type="text"
              id="hobby"
              name="hobby"
              value={data.hobby}
              onKeyDown={hobbiesHandler}
              onChange={inputHandler}
            />
            <img src={penSvg} alt="hobby" />
          </div>
          <div className="formCard-cont-form-row5">
            {data.hobbies.map((el, index) => (
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
