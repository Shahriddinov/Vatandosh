import { createSelector } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountryCities,
  getLocation,
} from "../../../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";

const useApplicationFetching = () => {
  const locationDataChange = createSelector(
    (store) => store.community.locationGet,
    (location) => {
      return location.map((el) => ({
        ...el,
        label: el.name ? el.name : "Uzbekistan",
      }));
    }
  );
  const cityDataChange = createSelector(
    (store) => store.community.allCitiesGet,
    (cities) => {
      return cities.map((el) => ({
        ...el,
        label: el.name ? el.name : "Toshkent",
      }));
    }
  );
  const language = useSelector((store) => store.language.language);
  const locationData = useSelector(locationDataChange);
  const locationLoading = useSelector(
    (store) => store.community.locationGetLoading
  );

  const allCitiesGetLoading = useSelector(
    (store) => store.community.allCitiesGetLoading
  );
  const allCitiesGet = useSelector(cityDataChange);

  const communityCreateData = useSelector(
    (store) => store.community.communityCreateData
  );

  const communityCreateDataStatus = useSelector(
    (store) => store.community.communityCreateDataStatus
  );

  const [data, setData] = useState({
    region_id: communityCreateData.region_id,
    city_id: communityCreateData.city_id,
    phone: communityCreateData.phone ? communityCreateData.phone : "",
    email: communityCreateData.email,
    address: communityCreateData.address,
    confirm: false,
  });

  const linksData = communityCreateData.site
    ? communityCreateData.site.map((el, i) => ({ id: i + 1, link: el }))
    : [{ id: 1, link: "" }];

  const [site, setSite] = useState(linksData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocation());
    if (communityCreateData.city_id) {
      dispatch(
        getCountryCities({ location_id: communityCreateData.region_id * 1 })
      );
    }
  }, [dispatch, language]);

  useEffect(() => {
    setData({
      region_id: communityCreateData.region_id,
      city_id: communityCreateData.city_id,
      phone: communityCreateData.phone ? communityCreateData.phone : "+998",
      email: communityCreateData.email,
      address: communityCreateData.address,
    });
  }, []);

  return {
    data,
    setData,
    communityCreateData,
    site,
    setSite,
    dispatch,
    locationData,
    locationLoading,
    communityCreateDataStatus,
    allCitiesGetLoading,
    allCitiesGet,
  };
};

export default useApplicationFetching;
