import React from "react";
import "./associations.scss";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AssociationsCard from "../../components/AssociationsCard/AssociationsCard";
import ArrowDown from "../../../../../assets/images/icons/arrowDown.svg";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getLocation } from "../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import { Autocomplete, TextField } from "@mui/material";
import { createSelector } from "@reduxjs/toolkit";
import { Spinner } from "../../../../../component";

const Associations = () => {
  const { t } = useTranslation();
  const locationDataChange = createSelector(
    (store) => store.community.locationGet,
    (location) => {
      return location.map((el) => ({ ...el, label: el.name }));
    }
  );
  const locationData = useSelector(locationDataChange);
  const locationLoading = useSelector(
    (store) => store.community.locationGetLoading
  );

  const handleChange = (event, value) => {
    // setCountry(event.target.value);
    console.log(value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocation());
  }, []);

  if (locationLoading) {
    return <Spinner position="full" />;
  }
  return (
    <div className="associations__wrapper">
      <div className="associations__top">
        <h1>{t("communityAssociation.navbar.navbar_link2")}</h1>
        <FormControl className="form__control">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={locationData}
            sx={{ width: 300 }}
            onChange={handleChange}
            renderInput={(params) => (
              <TextField {...params} label="Barcha davlatlar" />
            )}
          />
        </FormControl>
      </div>
      <div className="associations__grid">
        <AssociationsCard />
        <AssociationsCard />
        <AssociationsCard />
        <AssociationsCard />
        <AssociationsCard />
        <AssociationsCard />
        <AssociationsCard />
        <AssociationsCard />
      </div>
      <button className="more__less__button">
        {" "}
        <img src={ArrowDown} alt="" />
        {t("communityAssociation.view_all")}
      </button>
    </div>
  );
};

export default Associations;
