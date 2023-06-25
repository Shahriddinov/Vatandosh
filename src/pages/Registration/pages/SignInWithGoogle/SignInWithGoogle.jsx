import React, { useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import {
  changeStatus,
  loginUser,
} from "../../../../reduxToolkit/authSlice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const SignInWithGoogle = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const status = useSelector((state) => state.authSlice.statusAuth);

  const url = location.search.slice(6);

  useEffect(() => {
    const getGoogleUser = async () => {
      try {
        dispatch(changeStatus());

        const user = await axios
          .get(
            `https://api.vatandoshlarfondi.uz/api/oauth/call-back/google?code=${url}`
          )
          .then((res) => res.data);

        dispatch(loginUser({ user, navigate }));
      } catch (e) {
        console.log(e);
      }
    };

    getGoogleUser();
  }, []);

  // useEffect(() => {
  //   if (status === "user_register") {
  //     navigate("/registration/register");
  //   } else if (status === "user_profile") {
  //     navigate("/portal-category/cabinet");
  //   }
  // }, [status]);

  return <div>{t("registerGoogle")}</div>;
};

export default SignInWithGoogle;
