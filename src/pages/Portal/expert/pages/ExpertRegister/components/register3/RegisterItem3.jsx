import "../customStyles.scss";
import pencil from "../../../../../../../assets/images/expert/input-pencil.svg";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "../../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import {
  createExpertEmployment,
  deleteExpertEmployment,
  getExpertEmployment,
  updateExpertEmployment,
} from "../../../../../../../reduxToolkit/ExpertSlice/RegisterSlice/extraReducer";

export default function RegisterItem3({ activeBarItem, setActiveBarItem }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { locationGet } = useSelector((state) => state.community);
  const { employment } = useSelector((state) => state.expertRegisterSlice);
  const [data, setData] = useState([
    {
      id: "1",
      company: "",
      position: "",
      location_id: 3,
      status: false,
      city: "",
      start_date: "",
      finish_date: "",
      specialization: "",
    },
  ]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const update = [];
    const create = [];
    data.forEach((emp) => {
      if (typeof emp.id === "string") create.push(emp);
      else update.push(emp);
    });
    if (create.length)
      dispatch(
        createExpertEmployment({
          expert: create.map(
            ({
              company,
              position,
              location_id,
              status,
              city,
              start_date,
              finish_date,
            }) => ({
              company,
              position,
              location_id,
              status,
              city,
              start_date,
              finish_date,
              specialization: position,
            })
          ),
        })
      );
    if (update.length) {
      update.forEach(
        ({
          id,
          company,
          position,
          location_id,
          status,
          city,
          start_date,
          finish_date,
        }) =>
          dispatch(
            updateExpertEmployment({
              id,
              company,
              position,
              location_id,
              status,
              city,
              start_date,
              finish_date,
              specialization: position,
            })
          )
      );
    }
    setActiveBarItem(3);
  };

  const deleteEmployment = (id) => {
    if (typeof id === "number") dispatch(deleteExpertEmployment(id));
  };

  useEffect(() => {
    dispatch(getLocation());
    dispatch(getExpertEmployment());
  }, [dispatch]);

  useEffect(() => {
    if (employment.length) {
      setData(() => []);
      employment.forEach((el) => {
        setData((prev) => [...prev, el]);
      });
    }
  }, [employment]);

  return (
    <form
      className={
        activeBarItem !== 2
          ? "registeritem3 registeritem-scaleHidden"
          : "registeritem3 registeritem-scaleActive"
      }
      onSubmit={handleSubmit}
    >
      <div className="registeritem3-wrapper registeritem-borderLeft">
        <h3 className="registeritem-title">{t("expert.reg3")}</h3>
        <div className="registeritem3-list">
          {data.map((el) => (
            <div key={el.id} className="registeritem-form">
              <div className="registeritem-label-delete-single">
                <AiOutlineDelete
                  style={data.length === 1 ? { display: "none" } : null}
                  onClick={() => {
                    deleteEmployment(el.id);
                    setData(
                      (prev) =>
                        (prev = prev.filter((item) => item.id !== el.id))
                    );
                  }}
                />
              </div>
              <div className="registeritem-flexbox">
                <label htmlFor="" className="registeritem-label">
                  <p>{t("expert.workcountry")}</p>
                  <FormControl style={{ padding: 0 }}>
                    <Select
                      className="registeritem-select"
                      value={el.location_id}
                      onChange={(e) =>
                        handleChange({ ...el, location_id: e.target.value })
                      }
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      {locationGet.length ? (
                        locationGet.map((el, index) => (
                          <MenuItem key={index} value={el.id}>
                            {el.name}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem value={3}>Albania</MenuItem>
                      )}
                    </Select>
                  </FormControl>
                </label>
                <label htmlFor="" className="registeritem-label">
                  <p>{t("expert.workregionorcity")}</p>
                  <div>
                    <input
                      type="text"
                      minLength={3}
                      maxLength={200}
                      value={el.city}
                      placeholder={t("expert.inputplaceholder")}
                      onChange={(e) =>
                        handleChange({
                          ...el,
                          city: e.target.value,
                        })
                      }
                    />
                  </div>
                </label>
              </div>
              <label htmlFor="" className="registeritem-label">
                <p>{t("expert.position")}</p>
                <div>
                  <input
                    type="text"
                    minLength={3}
                    maxLength={50}
                    placeholder={t("expert.inputplaceholder")}
                    value={el.position}
                    onChange={(e) =>
                      handleChange({ ...el, position: e.target.value })
                    }
                  />
                  <img src={pencil} alt="" />
                </div>
              </label>
              <label htmlFor="" className="registeritem-label">
                <p>{t("expert.workspace")}</p>
                <div>
                  <input
                    type="text"
                    minLength={3}
                    maxLength={100}
                    value={el.company}
                    placeholder={t("expert.inputplaceholder")}
                    onChange={(e) =>
                      handleChange({ ...el, company: e.target.value })
                    }
                  />
                  <img src={pencil} alt="" />
                </div>
              </label>
              <div className="registeritem-checkbox">
                <Checkbox
                  checked={el.status || false}
                  inputProps={{ "aria-label": "controlled" }}
                  onChange={(e) => handleChange({ ...el, status: !el.status })}
                />
                <p>{t("expert.nowwork")}</p>
              </div>
              <div className="registeritem-flexbox">
                <label htmlFor="" className="registeritem-label">
                  <p>{t("expert.workstart")}</p>
                  <div>
                    <input
                      type="date"
                      minLength={3}
                      maxLength={100}
                      placeholder={t("expert.inputplaceholder")}
                      value={el.start_date}
                      onChange={(e) =>
                        handleChange({
                          ...el,
                          start_date: e.target.value,
                        })
                      }
                    />
                  </div>
                </label>
                <label htmlFor="" className="registeritem-label">
                  <p>{t("expert.workend")}</p>
                  <div>
                    <input
                      disabled={el?.status}
                      type="date"
                      minLength={3}
                      maxLength={30}
                      style={el?.status ? { opacity: 0.3 } : null}
                      placeholder={t("expert.inputplaceholder")}
                      value={el.finish_date}
                      onChange={(e) =>
                        handleChange({
                          ...el,
                          finish_date: e.target.value,
                        })
                      }
                    />
                  </div>
                </label>
              </div>
            </div>
          ))}
          <button
            type="button"
            className="registeritem-addForm"
            onClick={() =>
              setData((prev) => [
                ...prev,
                {
                  id: "" + Date.now(),
                  company: "",
                  position: "",
                  location_id: 3,
                  status: false,
                  city: "",
                  start_date: "",
                  finish_date: "",
                  specialization: "",
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
