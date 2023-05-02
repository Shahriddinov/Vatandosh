import Checkbox from "@mui/material/Checkbox";
import React, { useRef, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsImage, BsPlusCircleFill } from "react-icons/bs";
import { HiOutlineTrash } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { volunterProfile } from "../../../../../../../reduxToolkit/volunteer/profileCreate";

export default function Volunteer({ activeBarItem }) {
  const [volunteerProfile, setVolunteerProfile] = useState([
    {
      id: 1,
      title: "",
      description: "",
      images: [],
    },
  ]);
  const [checked, setChecked] = useState(false);

  const handleChange = (obj) => {
    setVolunteerProfile((prev) =>
      prev.map((item) => {
        if (obj.id === item.id) {
          return obj;
        }
        return item;
      })
    );
  };

  const dispatch = useDispatch();

  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(volunterProfile(volunteerProfile));
  };

  return (
    <form
      className={
        activeBarItem !== 5
          ? "registeritem5 registeritem-scaleHidden"
          : "registeritem5 registeritem-scaleActive"
      }
      onSubmit={handleSumbit}>
      <div className="registeritem5-wrapper registeritem-borderLeft">
        <div className="registeritem3-list">
          <h3 className="registeritem-title">VI. Volonyorlik faoliyati</h3>
          {volunteerProfile.map((el, index) => (
            <div key={el.id} className="registeritem-form">
              <p className="registeritem-label-delete">
                <strong>{`${
                  index + 1
                }. “O‘zbekiston zamini” ilmiy-amaliy va innovatsion  maqola`}</strong>
                <AiOutlineDelete
                  style={
                    volunteerProfile?.length === 1 ? { display: "none" } : null
                  }
                  onClick={() =>
                    setVolunteerProfile(
                      (prev) =>
                        (prev = prev.filter((item) => item.id !== el.id))
                    )
                  }
                />
              </p>
              <label htmlFor="" className="registeritem-label">
                <p>
                  Maqola mavzusi
                  <span>*</span>
                </p>
                <div>
                  <input
                    required
                    type="text"
                    minLength={3}
                    maxLength={200}
                    value={el.title}
                    placeholder={"Kiriting"}
                    onChange={(e) =>
                      handleChange({
                        ...el,
                        title: e.target.value.trim(),
                      })
                    }
                  />
                </div>
              </label>
              {!el.images.length ? (
                <label
                  htmlFor="volentoryinputfile"
                  className="registeritem-imgInput">
                  <input
                    required
                    className="registeritem-label-fileinput"
                    id="volentoryinputfile"
                    type="file"
                    accept="image/png, image/gif, image/jpeg, image/jpg"
                    onChange={(e) =>
                      handleChange({
                        ...el,
                        images: [...el.images, e.target.files[0]],
                      })
                    }
                  />
                  <BsImage />
                  <p>Taklifingiz uchun rasm</p>
                </label>
              ) : (
                <ul className="registeritem-imageList">
                  {el.images.map((item, index) => (
                    <li key={index} className="registeritem-imageList-item">
                      {el.images.length ? (
                        <div
                          className="registeritem-imageList-item-remove"
                          onClick={() => {
                            el.images.splice(index, 1);
                            handleChange({ ...el, images: el.images });
                          }}>
                          <HiOutlineTrash />
                          <span>Удалить</span>
                        </div>
                      ) : null}
                      <img src={URL.createObjectURL(item)} alt="" />
                    </li>
                  ))}
                  <label
                    htmlFor={el.id}
                    className="registeritem-imageList-inputFile">
                    <input
                      required
                      className="registeritem-label-fileinput"
                      id={el.id}
                      type="file"
                      accept="image/png, image/gif, image/jpeg, image/jpg"
                      onChange={(e) =>
                        e.target.files[0] &&
                        handleChange({
                          ...el,
                          images: [...el.images, e.target.files[0]],
                        })
                      }
                    />
                    <BsPlusCircleFill />
                  </label>
                </ul>
              )}
              <label htmlFor="" className="registeritem-label">
                <p>
                  Izohingiz yozing<span>*</span>
                </p>
                <div className="registeritem-label-textarea">
                  <textarea
                    required
                    type="text"
                    value={el.description}
                    minLength={3}
                    maxLength={500}
                    placeholder={"Izoh"}
                    onChange={(e) =>
                      handleChange({
                        ...el,
                        description: e.target.value.trim(),
                      })
                    }
                  />
                </div>
              </label>
            </div>
          ))}
          <button
            className="registeritem-addForm"
            onClick={() =>
              setVolunteerProfile((prev) => [
                ...prev,
                {
                  id: Date.now(),
                  title: "",
                  images: [],
                  description: "",
                },
              ])
            }>
            <BsPlusCircleFill />
          </button>
          <div className="registeritem-checkbox">
            <Checkbox
              checked={checked}
              inputProps={{ "aria-label": "controlled" }}
              onChange={(e) => setChecked((e) => !e)}
            />
            <p>Barcha ma’lumotlarni to‘liq va to‘g‘ri kiritdim.</p>
          </div>
        </div>
      </div>
      <div className="registeritem-btnWrapper">
        <button
          // disabled={!checked}
          type="submit"
          className="registeritem-submitBtn"
          // style={checked ? null : { opacity: 0.5, cursor: "auto" }}
        >
          Keyingisi
        </button>
      </div>
    </form>
  );
}
