import React, { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Employe.scss";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../../../../../../assets/images/expert";
import { data } from "../../../ExpertHome/data";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getExpertMenu } from "../../../../../../../reduxToolkit/ExpertMenu/Menu";

function Employe() {
  const { t } = useTranslation();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const dispatch = useDispatch();
  const userMenu = useSelector((state) => state.expertMenu.menuData);

  useEffect(() => {
    dispatch(getExpertMenu());
  }, []);

  console.log(userMenu);

  return (
    <div className="employe">
      <div className="container">
        <div className="employe-list">
          <h3>{t("expert.expertCouncil")}</h3>
          <div className="employe-item">
            <FormControl sx={{ m: 3, minWidth: 270 }}>
              <InputLabel id="demo-simple-select-helper-label">
                {t("expert.allexpert")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                label="Barcha mutaxassislar"
                onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 3, minWidth: 270 }}>
              <InputLabel id="demo-simple-select-helper-label">
                {t("expert.allcountry")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                label="Barcha davlatlar"
                onChange={handleChange}>
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
              <img src={evt.images} alt="error" />
              <p>{evt.country}</p>
              <h3>{evt.name}</h3>
              <h4>{evt.job}</h4>
              <h4>{evt.location}</h4>
              <Link
                className="employe-link"
                to="/portal-category/expert/profile/1">
                <span>{t("expert.detail")}</span>
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
