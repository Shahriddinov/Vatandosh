import { createSelector } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "../../../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";

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
  const language = useSelector((store) => store.language.language);
  const locationData = useSelector(locationDataChange);
  const locationLoading = useSelector(
    (store) => store.community.locationGetLoading
  );

  const communityCreateData = useSelector(
    (store) => store.community.communityCreateData
  );

  const communityCreateDataStatus = useSelector(
    (store) => store.community.communityCreateDataStatus
  );

  const [data, setData] = useState({
    region_id: communityCreateData.region_id,
    city_id: communityCreateData.city_id,
    phone: communityCreateData.phone ? communityCreateData.phone : "+998",
    email: communityCreateData.email,
    address: communityCreateData.address,
    confirm: false,
  });

  const linksData = communityCreateData.site
    ? communityCreateData.site
        .split(",")
        .map((el, i) => ({ id: i + 1, link: el }))
    : [{ id: 1, link: "" }];

  const [links, setLinks] = useState(linksData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocation());
  }, [dispatch, language]);

  useEffect(() => {
    setData({
      region_id: communityCreateData.region_id,
      city_id: communityCreateData.city_id,
      phone: communityCreateData.phone ? communityCreateData.phone : "+998",
      email: communityCreateData.email,
      address: communityCreateData.address,
    });
  }, [communityCreateData]);

  // console.log(data);
  // console.log(locationData);

  return {
    data,
    setData,
    communityCreateData,
    links,
    setLinks,
    dispatch,
    locationData,
    locationLoading,
    communityCreateDataStatus,
  };
};

export default useApplicationFetching;
