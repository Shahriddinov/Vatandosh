import Checkbox from "@mui/material/Checkbox";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineDelete } from "react-icons/ai";
import { BsImage, BsPlusCircleFill } from "react-icons/bs";
import { HiOutlineTrash } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";
import { useNavigate } from "react-router-dom";
import {
  deleteExpertActivity,
  getExpertActivity,
  postExpertActivity,
  updateExpertActivity,
} from "../../../../../../../reduxToolkit/ExpertSlice/ExpertActivity/extraReducer";
import { ToastContainer, toast } from "react-toastify";
const options = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

export default function Register6({ activeBarItem }) {
  const { t } = useTranslation();
  const history = useNavigate();
  const { data, postExportActivitySuccess } = useSelector(
    (state) => state.expertActivitySlice
  );
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

  const handleSumbit = (e) => {
    e.preventDefault();
    const update = [];
    const create = [];
    volunteerProfile.forEach((vol) => {
      if (typeof vol.id === "string") create.push(vol);
      else update.push(vol);
    });
    if (update.length) {
      update.forEach(({ id, title, description, images }) => {
        dispatch(
          updateExpertActivity({
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
          postExpertActivity({
            title,
            description,
            images: images.length ? images : null,
          })
        );
      });
    }
  };

  useEffect(() => {
    if (data.length) {
      setVolunteerProfile([]);
      data?.forEach(({ id, title, description, images }) => {
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
  }, [data]);

  useEffect(() => {
    dispatch(getExpertActivity());
  }, [dispatch]);

  useEffect(() => {
    if (postExportActivitySuccess === "create_success") {
      toast.success("success sending !", options);
      setTimeout(() => {
        history("/portal-category/expert");
      }, 2000);
    } else if (postExportActivitySuccess === "update_success") {
      history("/portal-category/expert");
    }
  }, [postExportActivitySuccess]);

  return (
    <>
      {" "}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form
        className={
          activeBarItem !== 5
            ? "registeritem5 registeritem-scaleHidden"
            : "registeritem5 registeritem-scaleActive"
        }
        onSubmit={handleSumbit}
      >
        <div className="registeritem5-wrapper registeritem-borderLeft">
          <div className="registeritem3-list">
            <h3 className="registeritem-title">
              V. {t("expert.expert_activities")}
            </h3>
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
                          dispatch(deleteExpertActivity(el.id));
                          setVolunteerProfile(
                            (prev) =>
                              (prev = prev.filter((item) => item.id !== el.id))
                          );
                        }}
                      />
                    </p>
                    <label htmlFor="" className="registeritem-label">
                      <p>
                        {t("maqola")}
                        <span>*</span>
                      </p>
                      <div>
                        <input
                          required
                          type="text"
                          minLength={3}
                          value={el.title}
                          placeholder={t("expert.inputplaceholder")}
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
                        <p>{t("expert.offerforimg")}</p>
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
                                      handleChange({
                                        ...el,
                                        images: el.images,
                                      });
                                    }}
                                  >
                                    <HiOutlineTrash />
                                    <span>
                                      {t("projects_page.form_image_delete")}
                                    </span>
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
                        {t("comment")}
                        <span>*</span>
                      </p>
                      <div className="registeritem-label-textarea">
                        <textarea
                          required
                          type="text"
                          value={el.description}
                          minLength={3}
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
    </>
  );
}
