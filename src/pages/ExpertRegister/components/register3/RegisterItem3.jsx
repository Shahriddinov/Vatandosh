import "../customStyles.scss";
import pencil from "../../../../assets/images/expert/input-pencil.svg";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { BsPlusCircleFill } from "react-icons/bs";

export default function RegisterItem3({ activeBarItem }) {
  const [data, setData] = useState([
    {
      id: 1,
      workCountry: "",
      workRegion: "",
      position: "",
      workSpace: "",
      checkBox: false,
      startAtWork: "",
      endAtWork: "",
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
  };

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
        <h3 className="registeritem-title">III. Mehnat faoliyatigiz</h3>
        <div className="registeritem3-list">
          {data.map((el) => (
            <div key={el.id} className="registeritem-form">
              <div className="registeritem-flexbox">
                <label htmlFor="" className="registeritem-label">
                  <p>
                    Ish joyi joylashgan davlat<span>*</span>
                  </p>
                  <FormControl style={{ padding: 0 }}>
                    <Select
                      className="registeritem-select"
                      value={el.workCountry}
                      required
                      onChange={(e) =>
                        handleChange({ ...el, workCountry: e.target.value })
                      }
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value={10}>AQSH</MenuItem>
                      <MenuItem value={20}>GERMANIYA</MenuItem>
                      <MenuItem value={30}>ITALIYA</MenuItem>
                    </Select>
                  </FormControl>
                </label>
                <label htmlFor="" className="registeritem-label">
                  <p>
                    Ish joyi joylashgan davlatni mintaqasi yoki shahar
                    <span>*</span>
                  </p>
                  <div>
                    <input
                      required
                      type="text"
                      minLength={3}
                      maxLength={200}
                      value={el.workRegion}
                      placeholder={"Kiriting"}
                      onChange={(e) =>
                        handleChange({
                          ...el,
                          workRegion: e.target.value.trim(),
                        })
                      }
                    />
                  </div>
                </label>
              </div>
              <label htmlFor="" className="registeritem-label">
                <p>Lavozimi</p>
                <div>
                  <input
                    required
                    type="text"
                    minLength={3}
                    maxLength={50}
                    placeholder={"Kiriting"}
                    value={el.position}
                    onChange={(e) =>
                      handleChange({ ...el, position: e.target.value.trim() })
                    }
                  />
                  <img src={pencil} alt="" />
                </div>
              </label>
              <label htmlFor="" className="registeritem-label">
                <p>
                  Ish joyi<span>*</span>
                </p>
                <div>
                  <input
                    required
                    type="text"
                    minLength={3}
                    maxLength={100}
                    value={el.workSpace}
                    placeholder={"Kiriting"}
                    onChange={(e) =>
                      handleChange({ ...el, workSpace: e.target.value.trim() })
                    }
                  />
                  <img src={pencil} alt="" />
                </div>
              </label>
              <div className="registeritem-checkbox">
                <Checkbox
                  checked={el.checkBox}
                  inputProps={{ "aria-label": "controlled" }}
                  onChange={(e) =>
                    handleChange({ ...el, checkBox: !el.checkBox })
                  }
                />
                <p>Hozirda shu sohada ishlayapti</p>
              </div>
              <div className="registeritem-flexbox">
                <label htmlFor="" className="registeritem-label">
                  <p>
                    Ish boshlagan yili<span>*</span>
                  </p>
                  <div>
                    <input
                      required
                      type="date"
                      minLength={3}
                      maxLength={100}
                      placeholder={"Kiriting"}
                      value={el.startAtWork}
                      onChange={(e) =>
                        handleChange({
                          ...el,
                          startAtWork: e.target.value.trim(),
                        })
                      }
                    />
                  </div>
                </label>
                <label htmlFor="" className="registeritem-label">
                  <p>
                    Tamomlagan yil<span>*</span>
                  </p>
                  <div>
                    <input
                      required
                      type="date"
                      minLength={3}
                      maxLength={30}
                      placeholder={"Kiriting"}
                      value={el.endAtWork}
                      onChange={(e) =>
                        handleChange({
                          ...el,
                          endAtWork: e.target.value.trim(),
                        })
                      }
                    />
                  </div>
                </label>
              </div>
            </div>
          ))}
          <button
            className="registeritem-addForm"
            onClick={() =>
              setData((prev) => [
                ...prev,
                {
                  id: Date.now(),
                  workCountry: "",
                  workRegion: "",
                  position: "",
                  workSpace: "",
                  checkBox: false,
                  startAtWork: "",
                  endAtWork: "",
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
          Keyingisi
        </button>
      </div>
    </form>
  );
}
