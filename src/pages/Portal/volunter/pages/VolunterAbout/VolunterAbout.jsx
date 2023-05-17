import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./VolunterAbout.scss";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../../../../assets/images/expert";
import { data } from "../VolunterHome/data";
import { useDispatch, useSelector } from "react-redux";
import {
  getVolunteerAll,
  getVolunteerByCity,
  getVolunteerByCountry,
} from "../../../../../reduxToolkit/volunteer/extraReducer";
import { Spinner } from "../../../../../component";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";
import {
  getLocation,
  getLocationOne,
} from "../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import { useTranslation } from "react-i18next";

function VolunterAbout() {
  const [age, setAge] = React.useState("");
  const [data, setData] = useState({ country: "", city: "" });
  const language = useSelector((store) => store.language.language);
  const {t}= useTranslation()
  const volunteers = useSelector((store) => store.volunteerSlice.volunteerData);
  const volunteersLoading = useSelector(
    (store) => store.volunteerSlice.volunteerLoading
  );
  const locations = useSelector((store) => store.community.locationGet);
  const locationsLoading = useSelector(
    (store) => store.community.locationGetLoading
  );
  const location = useSelector((store) => store.community.locationGetOne);
  const locationLoading = useSelector(
    (store) => store.community.locationGetOneLoading
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVolunteerAll(12));
    dispatch(getLocation());
  }, [language]);

  const handleСlick = ({ id, type }) => {
    setData((prev) => ({ ...prev, [type]: id }));
    if (type === "country") {
      dispatch(getVolunteerByCountry(id));
      dispatch(getLocationOne(id));
    } else if (type === "city") {
      dispatch(getVolunteerByCity({ country: data.country, city: id }));
    }
  };

  if (volunteersLoading || locationsLoading) {
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
                Barcha Davlatlar
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={data.country}
                label="Barcha Davlatlar"
              >
                {locations?.map((location) => (
                  <MenuItem
                    onClick={() =>
                      handleСlick({ id: location.id, type: "country" })
                    }
                    value={location.id}
                    key={location.id}
                    name={location.name}
                  >
                    {location.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 3, minWidth: 270 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Barcha Shaharlar
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                // value={city}
                label="Barcha davlatlar"
              >
                {location.length < 0
                  ? ""
                  : location.cities?.map((city) => (
                      <MenuItem
                        onClick={() =>
                          handleСlick({ id: city.id, type: "city" })
                        }
                        value={city.id}
                        key={city.id}
                      >
                        {city.city}
                      </MenuItem>
                    ))}
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

export default VolunterAbout;
