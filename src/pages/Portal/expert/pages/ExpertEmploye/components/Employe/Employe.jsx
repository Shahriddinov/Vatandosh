import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Employe.scss";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../../../../../../assets/images/expert";
import { data } from "../../../ExpertHome/data";

function Employe() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="employe">
      <div className="container">
        <div className="employe-list">
          <h3>Ekspertlar kengashi</h3>
          <div className="employe-item">
            <FormControl sx={{ m: 3, minWidth: 270 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Barcha mutaxassislar
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                label="Barcha mutaxassislar"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 3, minWidth: 270 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Barcha davlatlar
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                label="Barcha davlatlar"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="employe-page">
          {data.map((evt) => (
            <div>
              <img src={evt.images} />
              <p>{evt.country}</p>
              <h3>{evt.name}</h3>
              <h4>{evt.job}</h4>
              <h4>{evt.location}</h4>
              <Link
                className="employe-link"
                to="/portal-category/expert/profile/1"
              >
                <span>Batafsil</span>
                <img src={ArrowIcon} alt="Arrow Icon" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Employe;
