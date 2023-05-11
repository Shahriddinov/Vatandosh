import React, { Fragment } from "react";
import "./associations.scss";

import FormControl from "@mui/material/FormControl";
import AssociationsCard from "../../components/AssociationsCard/AssociationsCard";
import ArrowDown from "../../../../../assets/images/icons/arrowDown.svg";
import { useTranslation } from "react-i18next";
import { Autocomplete, TextField } from "@mui/material";
import { Spinner } from "../../../../../component";
import { useAssociationFetching } from "./hooks/useAssociationFetching";
import { getAllCommunity } from "../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import { useState } from "react";

const Associations = () => {
  const [count, setCount] = useState(8);
  const [country, setCountry] = useState("Barchasi");
  const { t } = useTranslation();
  const {
    allRegions,
    allRegionsGetLoading,
    allCommunityGet,
    allCommunityGetLoading,
    dispatch,
  } = useAssociationFetching();

  const handleChange = (event, { id, name }) => {
    dispatch(getAllCommunity({ region: id }));
    setCountry(name ? name : "Rossiya");
  };

  if (allRegionsGetLoading || allCommunityGetLoading) {
    return <Spinner position="full" />;
  }

  console.log(allCommunityGet);
  return (
    <div className="associations">
      <div className="container">
        <div className="associations__wrapper">
          <div className="associations__top">
            <h1>{t("communityAssociation.navbar.navbar_link2")}</h1>
            <FormControl className="form__control">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={allRegions}
                sx={{ width: 300 }}
                onChange={handleChange}
                value={country}
                renderInput={(params) => (
                  <TextField {...params} label="Barcha davlatlar" />
                )}
              />
            </FormControl>
          </div>
          <div className="associations__grid">
            {allCommunityGet.length > 0 ? (
              allCommunityGet.map((item) => (
                <Fragment key={item.id}>
                  <AssociationsCard {...item} allRegions={allRegions} />
                </Fragment>
              ))
            ) : (
              <p>Hozirda bu davlatda jamoat birlashmalari mavjud emas</p>
            )}
          </div>
          {allCommunityGet.length > 8 ? (
            <button
              className="more__less__button"
              onClick={() => {
                dispatch(getAllCommunity({ page: count + 8 }));
                setCount((prev) => prev + 8);
              }}
            >
              {" "}
              <img src={ArrowDown} alt="" />
              {t("communityAssociation.view_all")}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Associations;
