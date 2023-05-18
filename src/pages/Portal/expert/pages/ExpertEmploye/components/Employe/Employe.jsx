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
import {
  getExpertFilter,
  getExpertFilterCountry,
  getExperts,
} from "../../../../../../../reduxToolkit/ExpertSlice/ExpertsSlice/ExpertSliceExtraReducer";
import Spinner from "../../../../../../../component/Spinner/Spinner";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";
import { Pagination } from "../../../../../../../component";
import { useState } from "react";
import { getExpertSpecialization } from "../../../../../../../reduxToolkit/ExpertSlice/RegisterSlice/extraReducer";
import {
  getAllCommunity,
  getLocation,
} from "../../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import { paginationCount } from "../../../../../../../helpers/extraFunction";
import { Autocomplete, TextField } from "@mui/material";
import { useExportEmploy } from "../../hooks/useExportEmploye";

function Employe() {
  const [activePage, setActivePage] = useState(1);
  const [country, setCountry] = useState({
    countryName: "Barcha davlatlar",
    countryId: "",
  });

  const [spec, setSpec] = useState({
    specName: "Barcha mutahasislar",
    specId: "",
  });
  const { t } = useTranslation();

  const {
    allRegions,
    allRegionsGetLoading,
    dispatch,
    expertData,
    specialization,
    loading,
    expertError,
  } = useExportEmploy();

  if (loading || allRegionsGetLoading) {
    return <Spinner position="full" />;
  } else if (expertError) {
    return <p>{expertError}</p>;
  }

  const paginationFetching = (key) => {
    setActivePage(key);
    dispatch(
      getExpertFilter({
        countryId: country.countryId,
        specialization: spec.specId,
      })
    );
  };

  const handleChangeCountry = (event, { id, name }) => {
    console.log(id);
    dispatch(
      getExpertFilter({
        countryId: id,
        specialization: spec.specId,
      })
    );
    setCountry((prev) => ({ ...prev, countryId: id, countryName: name }));
  };

  const handleChangeSpec = (event, { id, title }) => {
    dispatch(
      getExpertFilter({
        countryId: country.countryId,
        specialization: id,
      })
    );
    setSpec((prev) => ({ ...prev, specId: id, specName: title }));
  };

  const countPagination = paginationCount(expertData?.total, 12);

  return (
    <div className="employe">
      <div className="container">
        {expertData?.data?.length ? (
          <div className="employe-inner">
            <div className="employe-list">
              <h3>{t("expert.expertCouncil")}</h3>
              <div className="employe-item">
                <FormControl sx={{ m: 3, minWidth: 270 }}>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={specialization}
                    sx={{ width: 300 }}
                    onChange={handleChangeSpec}
                    value={spec.specName}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </FormControl>
                <FormControl sx={{ m: 3, minWidth: 270 }}>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={allRegions}
                    sx={{ width: 300 }}
                    onChange={handleChangeCountry}
                    value={country.countryName}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </FormControl>
              </div>
            </div>
            <div className="employe-page">
              {expertData?.data?.map((evt) => (
                <div key={evt.id}>
                  <img
                    src={`${PORTAL_IMAGE_URL}${evt?.user_id?.avatar}`}
                    alt={`${evt?.user_id?.name}`}
                  />
                  <p>{evt?.user_profile_id?.international_location_id?.name}</p>
                  <h3>{evt?.user_id?.name}</h3>
                  <h4>{evt?.user_profile_id?.job_position}</h4>
                  <Link
                    className="employe-link"
                    to={`/portal-category/expert/profile/${evt?.id}`}
                  >
                    <span>{t("expert.detail")}</span>
                    <img src={ArrowIcon} alt="Arrow Icon" />
                  </Link>
                </div>
              ))}
            </div>
            {countPagination >= 2 ? (
              <Pagination
                count={countPagination}
                paginationFetching={paginationFetching}
                page={activePage}
              />
            ) : null}
          </div>
        ) : (
          <p>Hozirda expertlar mavjud emas</p>
        )}
      </div>
    </div>
  );
}

export default Employe;
