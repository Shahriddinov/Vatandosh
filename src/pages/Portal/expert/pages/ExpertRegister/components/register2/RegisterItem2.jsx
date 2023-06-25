import "./RegisterItem2.scss";
import "../customStyles.scss";
import pencil from "../../../../../../../assets/images/expert/input-pencil.svg";
import { BsPlusCircleFill } from "react-icons/bs";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AiOutlineDelete } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteExpertEducation,
  getExpertEducation,
  getExpertSpecialization,
  postExpertEducation,
  updateExpertEducation,
} from "../../../../../../../reduxToolkit/ExpertSlice/RegisterSlice/extraReducer";

export default function RegisterItem2({ activeBarItem, setActiveBarItem }) {
  const { education, specialization } = useSelector(
    (state) => state.expertRegisterSlice
  );

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [data1, setData1] = useState([
    { id: Date.now(), institution: "", faculty: "", specialization_id: 1 },
  ]);

  const [data2, setData2] = useState([
    { id: Date.now(), institution: "", faculty: "", specialization_id: 1 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const datas = [...data1, ...data2];
    const update = [];
    const create = [];
    datas.forEach((edu) => {
      if (typeof edu.id === "string") create.push(edu);
      else update.push(edu);
    });
    if (create.length)
      dispatch(
        postExpertEducation({
          expert: create.map(
            ({ institution, faculty, specialization_id, level, type }) => ({
              institution,
              faculty,
              specialization_id,
              level,
              type,
            })
          ),
        })
      );
    if (update.length)
      update.forEach(
        ({ id, institution, faculty, specialization_id, level, type }) => {
          dispatch(
            updateExpertEducation({
              id,
              institution,
              faculty,
              specialization_id,
              level,
              type,
            })
          );
          return;
        }
      );
    setActiveBarItem(2);
  };

  const handleChange = (obj) => {
    setData1((prev) =>
      prev.map((item) => {
        if (obj.id === item.id) {
          return obj;
        }
        return item;
      })
    );
  };
  const handleChangeX = (obj) => {
    setData2((prev) =>
      prev.map((item) => {
        if (obj.id === item.id) {
          return obj;
        }
        return item;
      })
    );
  };

  const deleteEducation = async (id) => {
    if (typeof id === "number") dispatch(deleteExpertEducation(id));
  };

  useEffect(() => {
    dispatch(getExpertEducation());
    dispatch(getExpertSpecialization());
  }, [dispatch]);

  useEffect(() => {
    if (education) {
      setData1([]);
      setData2([]);
      education.forEach(
        ({ id, institution, faculty, specialization, type }) => {
          if (type === 1) {
            setData1((prev) => [
              ...prev,
              {
                id,
                institution,
                level: "Oliy",
                faculty,
                specialization_id: specialization.id,
                type,
              },
            ]);
          } else {
            setData2((prev) => [
              ...prev,
              {
                id,
                institution,
                level: "Oliy",
                faculty,
                specialization_id: specialization.id,
                type,
              },
            ]);
          }
        }
      );
    }
  }, [education]);

  return (
    <form
      className={
        activeBarItem !== 1
          ? "registeritem2 registeritem-scaleHidden"
          : "registeritem2 registeritem-scaleActive"
      }
      onSubmit={handleSubmit}
    >
      <div className="registeritem2-wrapper registeritem-borderLeft">
        <h3 className="registeritem-title">{t("expert.reg2")}</h3>
        <div className="registeritem-form registeritem-gapNon">
          {/*<h3>{t("expert.uzbotm")}</h3>*/}
          {data1.length ? (
            <>
              <h5 className="registeritem2-addForm__title">
                {t("expert.expertRegister2Title1")}
              </h5>
              {data1.map((el, index) => (
                <div key={index} className="registeritem2-form-otm">
                  <label htmlFor="" className="registeritem-label">
                    <p className="registeritem-label-delete">
                      <span>
                        {t("expert.uzbotm")}
                        <i style={{ color: "red" }}> *</i>
                      </span>
                      <AiOutlineDelete
                        style={data1.length === 1 ? { display: "none" } : null}
                        onClick={() => {
                          deleteEducation(el.id);
                          setData1(
                            (prev) =>
                              (prev = prev.filter((item) => item.id !== el.id))
                          );
                        }}
                      />
                    </p>
                    <div>
                      <input
                        required
                        type="text"
                        value={el.institution}
                        minLength={3}
                        maxLength={500}
                        placeholder={t("expert.inputplaceholder")}
                        onChange={(e) =>
                          handleChange({
                            ...el,
                            institution: e.target.value,
                          })
                        }
                      />
                      <img src={pencil} alt="" />
                    </div>
                  </label>
                  <div className="registeritem-flexbox">
                    <label htmlFor="" className="registeritem-label">
                      <p>
                        {t("expert.faculty")}
                        <span> *</span>
                      </p>
                      <div>
                        <input
                          required
                          type="text"
                          minLength={3}
                          value={el.faculty}
                          maxLength={500}
                          placeholder={t("expert.inputplaceholder")}
                          onChange={(e) =>
                            handleChange({ ...el, faculty: e.target.value })
                          }
                        />
                        <img src={pencil} alt="" />
                      </div>
                    </label>
                    <label htmlFor="" className="registeritem-label">
                      <p>
                        {t("expert.profession")}
                        <span> *</span>
                      </p>
                      <FormControl style={{ padding: 0 }}>
                        <Select
                          className="registeritem-select"
                          value={el.specialization_id}
                          required
                          onChange={(e) =>
                            handleChange({
                              ...el,
                              specialization_id: e.target.value,
                            })
                          }
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          {specialization ? (
                            specialization?.map(({ id, title }) => (
                              <MenuItem key={id} value={id}>
                                {title}
                              </MenuItem>
                            ))
                          ) : (
                            <MenuItem value={1}>{t("yurist")}</MenuItem>
                          )}
                        </Select>
                      </FormControl>
                    </label>
                  </div>
                </div>
              ))}
            </>
          ) : (
            ""
          )}
          <button
            type="button"
            className="registeritem-addForm"
            style={{ marginBottom: "20px" }}
            onClick={() =>
              setData1((prev) => [
                ...prev,
                {
                  id: "" + Date.now(),
                  institution: "",
                  faculty: "",
                  level: "Oliy",
                  specialization_id: 1,
                  type: 1,
                },
              ])
            }
          >
            <BsPlusCircleFill />
          </button>
          {data2.length ? (
            <>
              <h5 className="registeritem2-addForm__title">
                {t("expert.expertRegister2Title2")}
              </h5>
              {data2.map((el, index) => (
                <div key={index} className="registeritem2-form-otm">
                  <label htmlFor="" className="registeritem-label">
                    <p className="registeritem-label-delete">
                      <span>
                        {t("expert.xorotm")}
                        <i style={{ color: "#f00" }}> *</i>
                      </span>
                      <AiOutlineDelete
                        style={data2.length === 1 ? { display: "none" } : null}
                        onClick={() => {
                          deleteEducation(el.id);
                          setData2(
                            (prev) =>
                              (prev = prev.filter((item) => item.id !== el.id))
                          );
                        }}
                      />
                    </p>
                    <div>
                      <input
                        required
                        type="text"
                        value={el.institution}
                        minLength={3}
                        maxLength={500}
                        placeholder={t("expert.inputplaceholder")}
                        onChange={(e) =>
                          handleChangeX({
                            ...el,
                            institution: e.target.value,
                          })
                        }
                      />
                      <img src={pencil} alt="" />
                    </div>
                  </label>
                  <div className="registeritem-flexbox">
                    <label htmlFor="" className="registeritem-label">
                      <p>
                        {t("expert.xorfaculty")}
                        <span> *</span>
                      </p>
                      <div>
                        <input
                          required
                          type="text"
                          minLength={3}
                          value={el.faculty}
                          maxLength={500}
                          placeholder={t("expert.inputplaceholder")}
                          onChange={(e) =>
                            handleChangeX({ ...el, faculty: e.target.value })
                          }
                        />
                        <img src={pencil} alt="" />
                      </div>
                    </label>
                    <label htmlFor="" className="registeritem-label">
                      <p>
                        {t("expert.xorprofession")}
                        <span> *</span>
                      </p>
                      <FormControl style={{ padding: 0 }}>
                        <Select
                          className="registeritem-select"
                          value={el.specialization_id}
                          required
                          onChange={(e) =>
                            handleChangeX({
                              ...el,
                              specialization_id: e.target.value,
                            })
                          }
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          {specialization ? (
                            specialization?.map(({ id, title }) => (
                              <MenuItem key={id} value={id}>
                                {title}
                              </MenuItem>
                            ))
                          ) : (
                            <MenuItem value={1}>{t("yurist")}</MenuItem>
                          )}
                        </Select>
                      </FormControl>
                    </label>
                  </div>
                </div>
              ))}
            </>
          ) : (
            ""
          )}
          <button
            type="button"
            className="registeritem-addForm"
            onClick={() =>
              setData2((prev) => [
                ...prev,
                {
                  id: "" + Date.now(),
                  institution: "",
                  faculty: "",
                  level: "Oliy",
                  specialization_id: 1,
                  type: 2,
                },
              ])
            }
          >
            <BsPlusCircleFill />
          </button>
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
