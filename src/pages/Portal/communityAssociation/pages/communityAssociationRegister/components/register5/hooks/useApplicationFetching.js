import { createSelector } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "../../../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";

const useApplicationFetching = () => {
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

  const communityCreateData = useSelector(
    (store) => store.community.communityCreateData
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
  }, []);

  return {
    data,
    setData,
    links,
    setLinks,
    dispatch,
    locationData,
    locationLoading,
  };
};

export default useApplicationFetching;
