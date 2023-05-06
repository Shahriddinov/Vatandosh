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

export default function RegisterItem2({ activeBarItem }) {
  const { t } = useTranslation();
  const [data1, setData1] = useState([
    { id: 1, institution: "", faculty: "", job: "", type: 1 },
  ]);
  const [data2, setData2] = useState([
    { id: 1, institution: "", faculty: "", job: "Yurist", type: 2 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const expert = [...data1, data2].map((el) => {
      return {
        institution: el.institution,
      };
    });
    console.log({
      expert,
    });
    console.log(data1, data2);
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
        <div className="registeritem-form">
          {data1.map((el) => (
            <div key={el.id} className="registeritem2-form-otm">
              <label htmlFor="" className="registeritem-label">
                <p className="registeritem-label-delete">
                  <span>{t("expert.uzbotm")}</span>
                  <AiOutlineDelete
                    style={data1.length === 1 ? { display: "none" } : null}
                    onClick={() =>
                      setData1(
                        (prev) =>
                          (prev = prev.filter((item) => item.id !== el.id))
                      )
                    }
                  />
                </p>
                <div>
                  <input
                    required
                    type="text"
                    value={el.institution}
                    minLength={3}
                    maxLength={30}
                    placeholder={t("expert.inputplaceholder")}
                    onChange={(e) =>
                      handleChange({
                        ...el,
                        institution: e.target.value.trim(),
                      })
                    }
                  />
                  <img src={pencil} alt="" />
                </div>
              </label>
              <div className="registeritem-flexbox">
                <label htmlFor="" className="registeritem-label">
                  <p>{t("expert.faculty")}</p>
                  <div>
                    <input
                      required
                      type="text"
                      minLength={3}
                      value={el.faculty}
                      maxLength={30}
                      placeholder={t("expert.inputplaceholder")}
                      onChange={(e) =>
                        handleChange({ ...el, faculty: e.target.value.trim() })
                      }
                    />
                    <img src={pencil} alt="" />
                  </div>
                </label>
                <label htmlFor="" className="registeritem-label">
                  <p>{t("expert.profession")}</p>
                  <div>
                    <input
                      required
                      type="text"
                      minLength={3}
                      value={el.job}
                      maxLength={30}
                      placeholder={t("expert.inputplaceholder")}
                      onChange={(e) =>
                        handleChange({ ...el, job: e.target.value.trim() })
                      }
                    />
                    <img src={pencil} alt="" />
                  </div>
                </label>
              </div>
            </div>
          ))}
          <button
            className="registeritem-addForm"
            onClick={() =>
              setData1((prev) => [
                ...prev,
                { id: Date.now(), institution: "", faculty: "", job: "" },
              ])
            }
          >
            <BsPlusCircleFill />
          </button>
          {data2.map((el) => (
            <div key={el.id} className="registeritem2-form-otm">
              <label htmlFor="" className="registeritem-label">
                <p className="registeritem-label-delete">
                  <span>{t("expert.xorotm")}</span>
                  <AiOutlineDelete
                    style={data2.length === 1 ? { display: "none" } : null}
                    onClick={() =>
                      setData2(
                        (prev) =>
                          (prev = prev.filter((item) => item.id !== el.id))
                      )
                    }
                  />
                </p>
                <div>
                  <input
                    required
                    type="text"
                    value={el.institution}
                    minLength={3}
                    maxLength={30}
                    placeholder={t("expert.inputplaceholder")}
                    onChange={(e) =>
                      handleChangeX({
                        ...el,
                        institution: e.target.value.trim(),
                      })
                    }
                  />
                  <img src={pencil} alt="" />
                </div>
              </label>
              <div className="registeritem-flexbox">
                <label htmlFor="" className="registeritem-label">
                  <p>{t("expert.xorfaculty")}</p>
                  <div>
                    <input
                      required
                      type="text"
                      minLength={3}
                      value={el.faculty}
                      maxLength={30}
                      placeholder={t("expert.inputplaceholder")}
                      onChange={(e) =>
                        handleChangeX({ ...el, faculty: e.target.value.trim() })
                      }
                    />
                    <img src={pencil} alt="" />
                  </div>
                </label>
                <label htmlFor="" className="registeritem-label">
                  <p>{t("expert.xorprofession")}</p>
                  <FormControl style={{ padding: 0 }}>
                    <Select
                      className="registeritem-select"
                      value={el.job}
                      required
                      onChange={(e) =>
                        handleChangeX({ ...el, job: e.target.value })
                      }
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value={"Yurist"}>Yurist</MenuItem>
                      <MenuItem value={"Dasturchi"}>Dasturchi</MenuItem>
                      <MenuItem value={"Logist"}>Logist</MenuItem>
                    </Select>
                  </FormControl>
                </label>
              </div>
            </div>
          ))}
          <button
            className="registeritem-addForm"
            onClick={() =>
              setData2((prev) => [
                ...prev,
                { id: Date.now(), institution: "", faculty: "", job: "" },
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
