import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Employe.scss";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../../../../../../assets/images/expert";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getExperts } from "../../../../../../../reduxToolkit/ExpertSlice/ExpertsSlice/ExpertSliceExtraReducer";
import Spinner from "../../../../../../../component/Spinner/Spinner";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";
import { Pagination } from "../../../../../../../component";
import { useState } from "react";

function Employe() {
  const [activePage, setActivePage] = useState(1);
  const { t } = useTranslation();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const dispatch = useDispatch();
  const { expertData, loading } = useSelector((state) => state.expertSlice);

  useEffect(() => {
    dispatch(getExperts());
  }, [dispatch]);

  if (loading) {
    return <Spinner position="full" />;
  }

  const paginationFetching = (key) => {
    setActivePage(key);
    dispatch(getExperts(key));
  };

  return expertData?.data?.length ? (
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
                onChange={handleChange}
              >
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
          {expertData?.data?.map((evt) => (
            <div key={evt.id}>
              <img
                src={`${PORTAL_IMAGE_URL}/${evt.user_id.avatar}`}
                alt="error"
              />
              <p>{evt.user_profile_id.international_location_id.name}</p>
              <h3>{evt.user_id.name}</h3>
              <h4>{evt.user_profile_id.job_position}</h4>
              <Link
                className="employe-link"
                to={`/portal-category/expert/profile/${evt.id}`}
              >
                <span>{t("expert.detail")}</span>
                <img src={ArrowIcon} alt="Arrow Icon" />
              </Link>
            </div>
          ))}
        </div>
        <Pagination
          count={Math.ceil(expertData.total / 12)}
          paginationFetching={paginationFetching}
          page={activePage}
        />
      </div>
    </div>
  ) : null;
}

export default Employe;
