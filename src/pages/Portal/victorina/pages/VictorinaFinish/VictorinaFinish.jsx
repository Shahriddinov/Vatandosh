import React from "react";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import "./VictorinaFinish.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getQuizzFinish } from "../../../../../reduxToolkit/victorinaQuiz/victorinafinish/finish";
import VictorinaCard from "../VictorinaHome/components/victorinaCard/VictorinaCard";
import { Spinner } from "../../../../../component";

function VictorinaFinish() {
  const [year, setYear] = useState("2022");

  const handleChange = (event) => {
    setYear(event.target.value);
  };
  const dispatch = useDispatch();
  const quizData = useSelector(
    (state) => state.quizFinishSlice.quizData.quizzes
  );
  const quizDataLoading = useSelector((state) => state.quizFinishSlice.loading);

  const lan = useSelector((state) => state.language.language);

  useEffect(() => {
    dispatch(getQuizzFinish({ status: "0", year: year }));
  }, [year, dispatch, lan]);

  if (quizDataLoading) {
    return <Spinner position="full" />;
  }

  return (
    <div className="victorinafinish">
      <div className="container">
        <div className="victorinafinish-top">
          <h2>Viktorina yakunlanganlar</h2>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">{year}</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={year}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="2022">2022</MenuItem>
              <MenuItem value="2023">2023</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="victorina-page">
          {quizData?.map((victorina) => (
            <VictorinaCard
              victorina={victorina}
              key={victorina}
              url={"finished-projects"}
            />
          ))}
        </div>
        {/* <Link className="victorina_link" to="victorina-more">
          <img src={ExcludeIcon} alt="error" />
          Barcha Viktorina yakunlanganlar
        </Link> */}
      </div>
    </div>
  );
}

export default VictorinaFinish;
