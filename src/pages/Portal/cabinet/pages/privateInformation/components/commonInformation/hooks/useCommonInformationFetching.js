import { createSelector } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountryCities,
  getLocation,
} from "../../../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import { getExpertRegister } from "../../../../../../../../reduxToolkit/ExpertSlice/RegisterSlice/extraReducer";
import { getAllNations } from "../../../../../../../../reduxToolkit/authSlice/extraReducer";
import { toast } from "react-toastify";
const options = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

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

const nationsDataChange = createSelector(
  (state) => state.authSlice.nationsData,
  (nations) => {
    if (nations) {
      return nations?.map((el) => ({
        ...el,
        label: el.name,
      }));
    }
    return [];
  }
);

const initialData = {
  first_name: "",
  second_name: "",
  last_name: "",
  national_address: "",
  international_location_id: 1,
  international_address_id: 1,
  national_id: 1,
  birth_date: "",
  gender: "",
  phone_number: "",
  job_position: "",
  avatar_url: "",
  passport_file: "",
};

export const useCommonInformationFetching = () => {
  const [data, setData] = useState(initialData);
  const language = useSelector((store) => store.language.language);
  const locationData = useSelector(locationDataChange);
  const locationLoading = useSelector(
    (store) => store.community.locationGetLoading
  );

  const allCitiesGetLoading = useSelector(
    (store) => store.community.allCitiesGetLoading
  );
  const allCitiesGet = useSelector(cityDataChange);

  const registerSuccess = useSelector(
    (state) => state.authSlice.registerSuccess
  );

  const user = useSelector((state) => state.expertRegisterSlice.user);
  const userLoading = useSelector(
    (state) => state.expertRegisterSlice.userLoading
  );

  const nationsData = useSelector(nationsDataChange);
  const nationsLoading = useSelector((state) => state.authSlice.nationsLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocation());
    dispatch(getExpertRegister());
    dispatch(getAllNations());
    dispatch(getCountryCities({ location_id: 1 }));
  }, [dispatch, language]);

  useEffect(() => {
    if (user) {
      setData((prev) => ({
        ...prev,
        first_name: user?.first_name,
        second_name: user?.second_name,
        last_name: user?.last_name,
        national_address: user?.national_address,
        international_location_id: user?.international_location_id?.id,
        international_address_id: user?.international_address_id?.id,
        national_id: user?.national_id.id,
        birth_date: user?.birth_date,
        gender: user?.gender,
        phone_number: user?.phone_number,
        job_position: user?.job_position,
        avatar_url: user?.avatar_url,
        passport_file: user?.passport_file,
      }));

      dispatch(
        getCountryCities({ location_id: user?.international_location_id?.id })
      );
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (registerSuccess === "success") {
      toast.success("success sending !", options);
    } else if (registerSuccess === "error") {
      toast.error("error sending !", options);
    }
  }, [registerSuccess]);

  return {
    locationData,
    locationLoading,
    allCitiesGetLoading,
    allCitiesGet,
    userLoading,
    nationsLoading,
    nationsData,
    data,
    setData,
    dispatch,
    registerSuccess,
  };
};
