import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsImage, BsPlusCircleFill } from "react-icons/bs";
import { HiOutlineTrash } from "react-icons/hi";

export default function Volunteer({ activeBarItem }) {
  const [data, setData] = useState([
    {
      id: 1,
      articleTitle: "",
      articeImg: [],
      articeDesc: "",
    },
  ]);
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (obj) => {
    setData((prev) =>
      prev.map((item) => {
        if (obj.id === item.id) {
          return obj;
        }
        return item;
      })
    );
  };

  return (
    <form
      className={
        activeBarItem !== 5
          ? "registeritem5 registeritem-scaleHidden"
          : "registeritem5 registeritem-scaleActive"
      }
      onSubmit={handleSubmit}
    >
      <div className="registeritem5-wrapper registeritem-borderLeft">
        <div className="registeritem3-list">
          <h3 className="registeritem-title">VI. Volonyorlik faoliyati</h3>
          {data?.map((el, index) => (
            <div key={el.id} className="registeritem-form">
              <p className="registeritem-label-delete">
                <strong>{`${
                  index + 1
                }. “O‘zbekiston zamini” ilmiy-amaliy va innovatsion  maqola`}</strong>
                <AiOutlineDelete
                  style={data.length === 1 ? { display: "none" } : null}
                  onClick={() =>
                    setData(
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
                    value={el.articleTitle}
                    placeholder={"Kiriting"}
                    onChange={(e) =>
                      handleChange({
                        ...el,
                        articleTitle: e.target.value.trim(),
                      })
                    }
                  />
                </div>
              </label>
              {!el.articeImg.length ? (
                <label
                  htmlFor="volentoryinputfile"
                  className="registeritem-imgInput"
                >
                  <input
                    required
                    className="registeritem-label-fileinput"
                    id="volentoryinputfile"
                    type="file"
                    accept="image/png, image/gif, image/jpeg, image/jpg"
                    onChange={(e) =>
                      handleChange({
                        ...el,
                        articeImg: [...el.articeImg, e.target.files[0]],
                      })
                    }
                  />
                  <BsImage />
                  <p>Taklifingiz uchun rasm</p>
                </label>
              ) : (
                <ul className="registeritem-imageList">
                  {el.articeImg.map((item, index) => (
                    <li key={index} className="registeritem-imageList-item">
                      {el.articeImg.length ? (
                        <div
                          className="registeritem-imageList-item-remove"
                          onClick={() => {
                            el.articeImg.splice(index, 1);
                            handleChange({ ...el, articeImg: el.articeImg });
                          }}
                        >
                          <HiOutlineTrash />
                          <span>Удалить</span>
                        </div>
                      ) : null}
                      <img src={URL.createObjectURL(item)} alt="" />
                    </li>
                  ))}
                  <label
                    htmlFor={el.id}
                    className="registeritem-imageList-inputFile"
                  >
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
                          articeImg: [...el.articeImg, e.target.files[0]],
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
                    value={el.articeDesc}
                    minLength={3}
                    maxLength={500}
                    placeholder={"Izoh"}
                    onChange={(e) =>
                      handleChange({ ...el, articeDesc: e.target.value.trim() })
                    }
                  />
                </div>
              </label>
            </div>
          ))}
          <button
            className="registeritem-addForm"
            onClick={() =>
              setData((prev) => [
                ...prev,
                {
                  id: Date.now(),
                  articleTitle: "",
                  articeImg: [],
                  articeDesc: "",
                },
              ])
            }
          >
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
          disabled={!checked}
          type="submit"
          className="registeritem-submitBtn"
          style={checked ? null : { opacity: 0.5, cursor: "auto" }}
        >
          Keyingisi
        </button>
      </div>
    </form>
  );
}
