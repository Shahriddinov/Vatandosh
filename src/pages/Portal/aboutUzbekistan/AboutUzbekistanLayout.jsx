import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import AboutUzbekistanHeader from "./components/aboutUzbekistanHeader/AboutUzbekistanHeader";
import AboutUzbekistanHeaderTransparent from "./components/aboutUzbekistanHeaderTransparent/AboutUzbekistanHeader";
import AboutUzbekistanNavbar from "./components/aboutUzbekistanNavbar/AboutUzbekistanNavbar";
import AboutUzbekistanNavbarTransparent from "./components/aboutUzbekistanNavbarTransparent/AboutUzbekistanNavbar";
import OnlineTeachingFooter from "../OnlineTeaching/components/OnlineTeachingFooter/OnlineTeachingFooter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllAboutUzbMenu } from "../../../reduxToolkit/portalSlices/aboutUzbekistanSlice/aboutUzbekistanSliceAsyncThunks";

const AboutUzbekistan = () => {
  const location = useLocation();
  let transparentIsTrue = location.pathname.split("/")[3];
  const dispatch = useDispatch();
  const menu = useSelector((store) => store.aboutUzbekistan.allAboutUzbMenu);
  const menuLoading = useSelector(
    (store) => store.aboutUzbekistan.allAboutUzbMenuLoading
  );

  useEffect(() => {
    dispatch(getAllAboutUzbMenu());
  }, []);
  console.log(menu);

  return (
    <div>
      {(transparentIsTrue === "virtual-tour") |
      (transparentIsTrue === "city") ? (
        <AboutUzbekistanHeaderTransparent />
      ) : (
        <AboutUzbekistanHeader />
      )}
      {(transparentIsTrue === "virtual-tour") |
      (transparentIsTrue === "city") ? (
        <AboutUzbekistanNavbarTransparent />
      ) : (
        <AboutUzbekistanNavbar />
      )}
      <Outlet />
      {transparentIsTrue !== "virtual-tour" && <OnlineTeachingFooter />}
    </div>
  );
};

export default AboutUzbekistan;
