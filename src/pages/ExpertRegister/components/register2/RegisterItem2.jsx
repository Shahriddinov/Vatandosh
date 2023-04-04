import "./RegisterItem2.scss";
import "../customStyles.scss";
import pencil from "../../../../assets/images/expert/input-pencil.svg";
import { BsPlusCircleFill } from "react-icons/bs";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AiOutlineDelete } from "react-icons/ai";

export default function RegisterItem2({ activeBarItem }) {
  const [data1, setData1] = useState([
    { id: 1, otm: "", faculti: "", job: "" },
  ]);
  const [data2, setData2] = useState([
    { id: 1, otm: "", faculti: "", job: "Yurist" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <h3 className="registeritem-title">II. Oliy ma’lumotingiz</h3>
        <div className="registeritem-form">
          {data1.map((el) => (
            <div key={el.id} className="registeritem2-form-otm">
              <label htmlFor="" className="registeritem-label">
                <p className="registeritem-label-delete">
                  <span>O‘zbekistonda tahsil olgan OTM</span>
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
                    value={el.otm}
                    minLength={3}
                    maxLength={30}
                    placeholder={"Kiriting"}
                    onChange={(e) =>
                      handleChange({ ...el, otm: e.target.value.trim() })
                    }
                  />
                  <img src={pencil} alt="" />
                </div>
              </label>
              <div className="registeritem-flexbox">
                <label htmlFor="" className="registeritem-label">
                  <p>Fakulteti</p>
                  <div>
                    <input
                      required
                      type="text"
                      minLength={3}
                      value={el.faculti}
                      maxLength={30}
                      placeholder={"Kiriting"}
                      onChange={(e) =>
                        handleChange({ ...el, faculti: e.target.value.trim() })
                      }
                    />
                    <img src={pencil} alt="" />
                  </div>
                </label>
                <label htmlFor="" className="registeritem-label">
                  <p>Mutaxassisligi</p>
                  <div>
                    <input
                      required
                      type="text"
                      minLength={3}
                      value={el.job}
                      maxLength={30}
                      placeholder={"Kiriting"}
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
                { id: Date.now(), otm: "", faculti: "", job: "" },
              ])
            }
          >
            <BsPlusCircleFill />
          </button>
          {data2.map((el) => (
            <div key={el.id} className="registeritem2-form-otm">
              <label htmlFor="" className="registeritem-label">
                <p className="registeritem-label-delete">
                  <span>Xorijda tahsil olgan OTM</span>
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
                    value={el.otm}
                    minLength={3}
                    maxLength={30}
                    placeholder={"Kiriting"}
                    onChange={(e) =>
                      handleChangeX({ ...el, otm: e.target.value.trim() })
                    }
                  />
                  <img src={pencil} alt="" />
                </div>
              </label>
              <div className="registeritem-flexbox">
                <label htmlFor="" className="registeritem-label">
                  <p>Xorijda fakulteti</p>
                  <div>
                    <input
                      required
                      type="text"
                      minLength={3}
                      value={el.faculti}
                      maxLength={30}
                      placeholder={"Kiriting"}
                      onChange={(e) =>
                        handleChangeX({ ...el, faculti: e.target.value.trim() })
                      }
                    />
                    <img src={pencil} alt="" />
                  </div>
                </label>
                <label htmlFor="" className="registeritem-label">
                  <p>Xorijdagi mutaxassisligi</p>
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
                { id: Date.now(), otm: "", faculti: "", job: "" },
              ])
            }
          >
            <BsPlusCircleFill />
          </button>
        </div>
      </div>
      <div className="registeritem-btnWrapper">
        <button type="submit" className="registeritem-submitBtn">
          Keyingisi
        </button>
      </div>
    </form>
  );
}
