import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { signIn } from "../../../../reduxToolkit/authSlice/extraReducer";

import google from "../../../../assets/images/register/google-icon.svg";
import apple from "../../../../assets/images/register/apple-icon.svg";
import facebook from "../../../../assets/images/register/facebook-icon.svg";
import oneid from "../../../../assets/images/register/oneid-icon.svg";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import "./SignIn.scss";
import {useTranslation} from "react-i18next";

export default function SignIn() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [isActivePasswordEye, setisActivePasswordEye] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const error = useSelector((state) => state.authSlice.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(userData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [error]);

  return (
    <div className="auth">
      <div className="container">
        <div className="auth-wrapper">
          <div className="auth-desc">
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <h2 className="auth-desc-title">
              {t("registerTitle")}
            </h2>
            <p className="auth-desc-text">
              {t("registerText")}
            </p>
          </div>
          <div className="auth-form">
            <div className="auth-form-title">
              <h3>{t("personals")}</h3>
              <p>{t("create")}</p>
            </div>
            <form
              className="auth-form-inputs"
              onSubmit={(e) => handleSubmit(e)}
            >
              <label className="auth-form-inputs-emailInput">
                <span>{t("createEmail")}</span>
                <input
                  type="email"
                  autoComplete="off"
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </label>
              <label className="auth-form-inputs-passwordInput">
                <span>Parol</span>
                <input
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  type={isActivePasswordEye ? "text" : "password"}
                  minLength={5}
                  maxLength={30}
                  required
                  autoComplete="off"
                />
                {isActivePasswordEye ? (
                  <AiFillEyeInvisible
                    className="auth-form-inputs-passwordInput-eyeIcon"
                    onClick={() => setisActivePasswordEye(false)}
                  />
                ) : (
                  <AiFillEye
                    className="auth-form-inputs-passwordInput-eyeIcon"
                    onClick={() => setisActivePasswordEye(true)}
                  />
                )}
              </label>
              <div className="auth-form-inputs-checkbox">
                <div className="auth-form-inputs-checkbox-input">
                  <input type="checkbox" name="" id="" />
                  <span>{t("remember")}</span>
                </div>
                <div className="auth-form-inputs-checkbox-forgetPassword">
                  <Link to="/registration/recovery-password">
                    {t("forgot")}
                  </Link>
                </div>
              </div>
              <button type="submit" className="auth-form-inputs-submitBtn">
                {t("introduction")}
              </button>
            </form>
            <div className="auth-links">
              <div className="auth-links-list">
                <div className="auth-links-list-item">
                  <img src={google} alt="icon" />
                </div>
                <a href="http://www.apple.com" className="auth-links-list-item">
                  <img src={apple} alt="icon" />
                </a>
                <a
                  href="http://www.facebook.com"
                  className="auth-links-list-item auth-links-list-item-facebook"
                >
                  <img src={facebook} alt="icon" />
                </a>
                <a
                  href="https://id.egov.uz/"
                  className="auth-links-list-item auth-links-list-item-oneid"
                >
                  <img src={oneid} alt="icon" />
                </a>
              </div>
              <div className="auth-links-tosignup">
                <span>{t("registerYet")}</span>
                <Link to="/registration/signup">{t("registeri")}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
