import React, { useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import {
  changeStatus,
  loginUser,
} from "../../../../reduxToolkit/authSlice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const SignInWithFacebook = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const status = useSelector((state) => state.authSlice.statusAuth);

  const url = location.search.slice(6);

  useEffect(() => {
    const getFacebookUser = async () => {
      try {
        dispatch(changeStatus());

        const user = await axios
          .get(
            `https://api.vatandoshlarfondi.uz/api/oauth/call-back/facebook?code=${url}`
          )
          .then((res) => res.data);

        dispatch(loginUser({ user, navigate }));
      } catch (e) {
        console.log(e);
      }
    };

    getFacebookUser();
  }, []);

  // useEffect(() => {
  //   if (status) {
  //     navigate("/registration/register");
  //   }
  // }, [status]);

  return <div>{t("registerFacebook")}</div>;
};

export default SignInWithFacebook;
