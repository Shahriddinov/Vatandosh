import React from "react";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import "./VictorinaFinish.scss";
import { CalendarIcon, ExcludeIcon, ViewIcon } from "../../../../../assets/images/expert";
import { victorine } from "../victorina";

function VictorinaFinish() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="victorinafinish">
      <div className="container">
        <div className="victorinafinish-top">
          <h2>Viktorina yakunlanganlar</h2>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Age"
              onChange={handleChange}>
              <MenuItem value="2022-2023">2022-2023</MenuItem>
              <MenuItem value="2022-2024">2022-2024</MenuItem>
              <MenuItem value="2022-2025">2022-2025</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="victorina-page">
          {victorine.map((victorina) => (
            <div className="victorina-list">
              <img src={victorina.image} alt="" className="victorina-img" />
              <div className="victorina-items">
                <h4 className="victorina-subname">{victorina.title}</h4>
                <div className="victorina-lists">
                  <div className="victorina-item">
                    <img src={CalendarIcon} alt="" className="victorina-icon" />
                    <p>12.02.2023</p>
                  </div>
                  <div className="victorina-item">
                    <img src={ViewIcon} alt="" className="victorina-icon" />
                    <p>100 K</p>
                  </div>
                </div>
                <p className="victorina-text">{victorina.description}</p>
                <button className="victorina-button">
                  VIKTORINA YAKUNLANDI!
                </button>
                <a href="#" className="victorina-link">
                  Batafsil ma'lumot
                </a>
              </div>
            </div>
          ))}
        </div>
        <a href="#" className="victorinafinish-finish">
          <img src={ExcludeIcon} alt="" className="victorinafinish-cion" />
          Barcha Viktorina yakunlanganlar
        </a>
      </div>
    </div>
  );
}

export default VictorinaFinish;
