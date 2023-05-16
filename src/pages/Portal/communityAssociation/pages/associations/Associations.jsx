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
import { paginationCount } from "../../../../../helpers/extraFunction";

const Associations = () => {
  const [count, setCount] = useState(1);
  const [country, setCountry] = useState("Barcha davlatlar");
  const [conId, setConId] = useState("");
  const { t } = useTranslation();
  const {
    allRegions,
    allRegionsGetLoading,
    allCommunityGet,
    allCommunityGetLoading,
    communityData,
    dispatch,
  } = useAssociationFetching();

  const handleChange = (event, { id, name }) => {
    dispatch(
      getAllCommunity({ region_id: id, per_page: 8, country: "change" })
    );
    setCountry(name ? name : "Rossiya");
    setConId(id);
    setCount(1);
  };

  const handleClick = () => {
    dispatch(
      getAllCommunity({
        page: count + 1,
        per_page: "8",
        region_id: conId,
      })
    );
    setCount((prev) => prev + 1);
  };

  if (allRegionsGetLoading || allCommunityGetLoading) {
    return <Spinner position="full" />;
  }

  const pagination = paginationCount(allCommunityGet?.total, 8);

  console.log(communityData);
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
                renderInput={(params) => <TextField {...params} />}
              />
            </FormControl>
          </div>
          <div className="associations__grid">
            {communityData.length > 0 ? (
              communityData.map((item) => (
                <Fragment key={item.id}>
                  <AssociationsCard {...item} allRegions={allRegions} />
                </Fragment>
              ))
            ) : (
              <p>Hozirda bu davlatda jamoat birlashmalari mavjud emas</p>
            )}
          </div>
          {allCommunityGet?.total > 8 &&
          communityData.length > 0 &&
          count < pagination ? (
            <button className="more__less__button" onClick={handleClick}>
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
