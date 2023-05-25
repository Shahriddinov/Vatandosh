import React from "react";
import FormControl from "@mui/material/FormControl";
import "./Employe.scss";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../../../../../../assets/images/expert";
import { useTranslation } from "react-i18next";
import { getExpertFilter } from "../../../../../../../reduxToolkit/ExpertSlice/ExpertsSlice/ExpertSliceExtraReducer";
import Spinner from "../../../../../../../component/Spinner/Spinner";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";
import { Pagination } from "../../../../../../../component";
import { useState } from "react";
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
        country: country.countryId,
        specialization: spec.specId,
      })
    );
  };

  const handleChangeCountry = (event, { id, name }) => {
    console.log(id);
    dispatch(
      getExpertFilter({
        country: id,
        specialization: spec.specId,
      })
    );
    setCountry((prev) => ({ ...prev, countryId: id, countryName: name }));
  };

  const handleChangeSpec = (event, { id, title }) => {
    dispatch(
      getExpertFilter({
        country: country.countryId,
        specialization: id,
      })
    );
    setSpec((prev) => ({ ...prev, specId: id, specName: title }));
  };

  const countPagination = paginationCount(expertData?.total, 12);

  return (
    <div className="employe">
      <div className="container">
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
            {expertData?.data?.length ? (
              expertData?.data?.map((evt) => (
                <div key={evt.id}>
                  <img
                    alt="error"
                    src={`${PORTAL_IMAGE_URL}${
                      evt?.user_profile?.avatar_url
                        ? evt?.user_profile?.avatar_url
                        : evt?.user?.avatar
                    }`}
                    className="employee-img"
                  />
                  <p>
                    {evt?.user_profile?.international_location_id?.name}
                    {evt?.user_profile?.international_address_id?.name}
                  </p>
                  <h3>
                    {evt?.user_profile?.last_name}{" "}
                    {evt?.user_profile?.first_name}{" "}
                    {evt?.user_profile?.second_name}
                  </h3>
                  <h4>{evt?.user_profile?.job_position}</h4>
                  <Link
                    className="employe-link"
                    to={`/portal-category/expert/profile/${evt?.id}`}>
                    <span>{t("expert.detail")}</span>
                    <img src={ArrowIcon} alt="Arrow Icon" />
                  </Link>
                </div>
              ))
            ) : (
              <p>Hozirda expertlar mavjud emas</p>
            )}
          </div>
          {countPagination >= 2 ? (
            <Pagination
              count={countPagination}
              paginationFetching={paginationFetching}
              page={activePage}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Employe;
