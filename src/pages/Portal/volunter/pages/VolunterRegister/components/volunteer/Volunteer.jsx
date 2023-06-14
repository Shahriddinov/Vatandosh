import Checkbox from "@mui/material/Checkbox";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineDelete } from "react-icons/ai";
import { BsImage, BsPlusCircleFill } from "react-icons/bs";
import { HiOutlineTrash } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteVolunteerActivity,
  getVolunteerActivity,
  updateVolunteerActivity,
  volunteerCreate,
} from "../../../../../../../reduxToolkit/volunteer/extraReducer";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";
import { useNavigate } from "react-router-dom";

export default function Volunteer({ activeBarItem }) {
  const { t } = useTranslation();
  const history = useNavigate();
  const { volunteerActivity } = useSelector((state) => state.volunteerSlice);
  const [volunteerProfile, setVolunteerProfile] = useState([
    {
      id: "123",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const update = [];
    const create = [];
    const oldActivityId = volunteerActivity.map((el) => el.id);
    volunteerProfile.forEach((vol) => {
      if (oldActivityId.includes(vol.id)) update.push(vol);
      else create.push(vol);
    });
    console.log(create, update);

    if (update.length) {
      update.forEach(({ id, title, description, images }) => {
        dispatch(
          updateVolunteerActivity({
            id,
            title,
            description,
            images,
          })
        );
      });
    }

    if (create.length) {
      create.forEach(({ title, description, images }) => {
        dispatch(
          volunteerCreate({
            title,
            description,
            images: images.length ? images : null,
          })
        );
      });
    }
    history("/portal-category/volunteer");
  };

  useEffect(() => {
    if (volunteerActivity.length) {
      setVolunteerProfile([]);
      volunteerActivity?.forEach(({ id, title, description, images }) => {
        setVolunteerProfile((prev) => [
          ...prev,
          {
            id,
            title,
            description,
            images: [],
            volunteerImg: images,
          },
        ]);
      });
    }
  }, [volunteerActivity]);

  useEffect(() => {
    dispatch(getVolunteerActivity());
  }, [dispatch]);

  const deleteVolunteer = (id) => {
    dispatch(deleteVolunteerActivity(id));
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
          <h3 className="registeritem-title">V. Volonyorlik faoliyati</h3>
          {volunteerProfile?.length
            ? volunteerProfile?.map((el, index) => (
                <div key={index} className="registeritem-form">
                  <p className="registeritem-label-delete">
                    <strong>{`${index + 1}. ${el.title}`}</strong>
                    <AiOutlineDelete
                      style={
                        volunteerProfile?.length === 1
                          ? { display: "none" }
                          : null
                      }
                      onClick={() => {
                        deleteVolunteer(el.id);
                        setVolunteerProfile(
                          (prev) =>
                            (prev = prev.filter((item) => item.id !== el.id))
                        );
                      }}
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
                            title: e.target.value,
                          })
                        }
                      />
                    </div>
                  </label>
                  {!el.images?.length && !el.volunteerImg?.length ? (
                    <label htmlFor={el.id} className="registeritem-imgInput">
                      <input
                        className="registeritem-label-fileinput"
                        id={el.id}
                        type="file"
                        accept="image/png, image/gif, image/jpeg, image/jpg"
                        onChange={(e) => {
                          handleChange({
                            ...el,
                            images: [...el.images, e.target.files[0]],
                          });
                        }}
                      />
                      <BsImage />
                      <p>Taklifingiz uchun rasm</p>
                    </label>
                  ) : (
                    <ul className="registeritem-imageList">
                      {el.images?.length
                        ? el.images.map((item, index) => (
                            <li
                              key={index}
                              className="registeritem-imageList-item"
                            >
                              {el.images.length > 1 ? (
                                <div
                                  className="registeritem-imageList-item-remove"
                                  onClick={() => {
                                    el.images.splice(index, 1);
                                    handleChange({ ...el, images: el.images });
                                  }}
                                >
                                  <HiOutlineTrash />
                                  <span>Удалить</span>
                                </div>
                              ) : null}
                              <img src={URL.createObjectURL(item)} alt="" />
                            </li>
                          ))
                        : el.volunteerImg.map((item, index) => (
                            <li
                              key={index}
                              className="registeritem-imageList-item"
                            >
                              <img src={PORTAL_IMAGE_URL + item} alt="" />
                            </li>
                          ))}
                      <label
                        htmlFor={el.id}
                        className="registeritem-imageList-inputFile"
                      >
                        <input
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
                            description: e.target.value,
                          })
                        }
                      />
                    </div>
                  </label>
                </div>
              ))
            : null}
          <button
            type="button"
            className="registeritem-addForm"
            onClick={() =>
              setVolunteerProfile((prev) => [
                ...prev,
                {
                  id: "" + Date.now(),
                  title: "",
                  images: [],
                  description: "",
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
              onChange={() => setChecked((e) => !e)}
            />
            <p>{t("expert.register5")}</p>
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
          {t("expert.save")}
        </button>
      </div>
    </form>
  );
}
