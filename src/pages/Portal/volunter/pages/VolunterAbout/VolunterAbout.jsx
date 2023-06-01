import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./VolunterAbout.scss";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../../../../assets/images/expert";
import { getVolunteerFilter } from "../../../../../reduxToolkit/volunteer/extraReducer";
import { Spinner } from "../../../../../component";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";
import { getCountryCities } from "../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import { useVolunteerAbout } from "./hooks/useVolunterAbout";

function VolunterAbout() {
  const [data, setData] = useState({ country: "", city: "" });
  const {
    allCitiesGet,
    locationsLoading,
    locations,
    volunteersLoading,
    volunteers,
    dispatch,
  } = useVolunteerAbout();

  const handleСlick = ({ id, type }) => {
    setData((prev) => ({ ...prev, [type]: id }));
    if (type === "country") {
      dispatch(getVolunteerFilter({ country: id, city: data.city }));
      dispatch(getCountryCities({ location_id: id }));
    } else if (type === "city") {
      dispatch(getVolunteerFilter({ country: data.country, city: id }));
      console.log(id);
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
                label="Barcha Davlatlar">
                {locations?.map((location) => (
                  <MenuItem
                    onClick={() =>
                      handleСlick({ id: location.id, type: "country" })
                    }
                    value={location.id}
                    key={location.id}
                    name={location.name}>
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
                value={data.city}
                label="Barcha davlatlar">
                {allCitiesGet.length < 0
                  ? ""
                  : allCitiesGet?.map((city) => (
                      <MenuItem
                        onClick={() =>
                          handleСlick({ id: city.id, type: "city" })
                        }
                        value={city.id}
                        key={city.id}>
                        {city.name}
                      </MenuItem>
                    ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="employe-page">
          {volunteers.data.length > 0 ? (
            volunteers.data.map((volunteer) => (
              <div key={volunteer.id}>
                <img
                  src={`${PORTAL_IMAGE_URL}${
                    volunteer?.user_profile?.avatar_url
                      ? volunteer?.user_profile?.avatar_url
                      : volunteer?.user?.avatar
                  }`}
                  alt="error"
                  className="employe-img"
                />
                <p>
                  {volunteer?.user_profile?.international_location_id?.name},{" "}
                  {volunteer?.user_profile?.international_address_id?.name}
                </p>
                <h3 style={{ color: "#065EA9" }}>
                  {volunteer?.user_profile?.second_name}
                </h3>
                <p style={{ color: "#656B70", fontWeight: 700 }}>
                  Chop etilgan maqolalar soni:{" "}
                  <b style={{ color: "#065EA9" }}>
                    {volunteer?.user_volunteer_activities?.length}
                  </b>
                </p>
                <Link
                  className="employe-link"
                  to={`/portal-category/volunteer/profile/${volunteer.id}`}>
                  <span>Batafsil</span>
                  <img src={ArrowIcon} alt="Arrow Icon" />
                </Link>
              </div>
            ))
          ) : (
            <p>Valantiyorlar mavjud emas</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default VolunterAbout;
