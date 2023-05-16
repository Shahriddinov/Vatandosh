import React, { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./VolunterAbout.scss";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../../../../assets/images/expert";
import { data } from "../VolunterHome/data";
import { useDispatch, useSelector } from "react-redux";
import { getVolunteerAll } from "../../../../../reduxToolkit/volunteer/extraReducer";
import { Spinner } from "../../../../../component";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";

function VolunterAbout() {
  const [age, setAge] = React.useState("");
  const language = useSelector((store) => store.language.language);
  const volunteers = useSelector((store) => store.volunteerSlice.volunteerData);
  const volunteersLoading = useSelector(
    (store) => store.volunteerSlice.volunteerLoading
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVolunteerAll(12));
  }, [language]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  if (volunteersLoading) {
    return <Spinner />;
  }

  return (
    <div className="employe">
      <div className="container">
        <div className="employe-list">
          <h3>Volontyorlar</h3>
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
          {volunteers.data.map((volunteer) => (
            <div key={volunteer.id}>
              <img
                src={`${PORTAL_IMAGE_URL}/${volunteer.user_id.avatar}`}
                alt="error"
              />
              <p>{volunteer.user_profile_id.international_location_id.name}</p>
              <h3>{volunteer.user_id.name}</h3>
              <h4>{volunteer.user_employment_info_id.specialization}</h4>
              <h4>{volunteer.user_employment_info_id.city}</h4>
              <Link
                className="employe-link"
                to={`/portal-category/volunteer/profile/${volunteer.id}`}
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

export default VolunterAbout;
