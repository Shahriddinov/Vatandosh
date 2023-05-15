import React from "react";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import "./VictorinaFinish.scss";
import {
  CalendarIcon,
  ExcludeIcon,
  ViewIcon,
} from "../../../../../assets/images/expert";
import { victorine } from "../victorina";
import { useDispatch, useSelector } from "react-redux";
import { getQuizz } from "../../../../../reduxToolkit/victorinaQuiz/getquiz";
import { useEffect } from "react";
import { imageUrl } from "../../../../../services/api/utils";

function VictorinaFinish() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.quizSlice.quizData.quizzes);

  useEffect(() => {
    dispatch(getQuizz());
  }, []);
  return (
    <div className="victorinafinish">
      <div className="container">
        <div className="victorinafinish-top">
          <h2>Viktorina yakunlanganlar</h2>
          {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
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
          </FormControl> */}
        </div>
        <div className="victorina-page">
          {quizData?.map((victorina) => (
            <div className="victorina-list">
              <img
                src={`${imageUrl}/${victorina?.image}`}
                alt=""
                className="victorina-img"
              />
              <div className="victorina-items">
                <h4 className="victorina-subname">{victorina.title}</h4>
                <p
                  dangerouslySetInnerHTML={{ __html: victorina.description }}
                />
                <button className="victorina-button">
                  VIKTORINA YAKUNLANDI!
                </button>
                <div className="victorina-lists">
                  <div className="victorina-item">
                    <img src={CalendarIcon} alt="" className="victorina-icon" />
                    <p>{victorina.started_at.slice(0,10)}</p>
                  </div>
                  <div className="victorina-item">
                    <img src={ViewIcon} alt="" className="victorina-icon" />
                    <p>{victorina.count}</p>
                  </div>
                </div>
                <a
                  href="finished-projects/image-project"
                  className="victorina-link">
                  Batafsil ma'lumot
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* <a href="#" className="victorinafinish-finish">
          <img src={ExcludeIcon} alt="" className="victorinafinish-cion" />
          Barcha Viktorina yakunlanganlar
        </a> */}
      </div>
    </div>
  );
}

export default VictorinaFinish;
