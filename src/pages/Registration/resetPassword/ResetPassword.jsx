import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyToken } from "../../../reduxToolkit/authSlice/extraReducer";
import { useEffect } from "react";
import { Spinner } from "../../../component";
import { useTranslation } from "react-i18next";

const ResetPassword = () => {
  const { t } = useTranslation();
  const { search } = useLocation();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authSlice.verifyLoading);
  const tokenMessage = useSelector((state) => state.authSlice.tokenMessage);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("verifyToken", search.split("=")[1]);
    dispatch(verifyToken(search));
  }, []);

  useEffect(() => {
    if (tokenMessage) {
      navigate("/registration/change-password");
    }
  }, [tokenMessage]);

  if (loading) {
    return <Spinner position="full" />;
  }

  return <div>{t("reset")}</div>;
};

export default ResetPassword;
