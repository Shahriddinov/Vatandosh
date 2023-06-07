import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../SignIn/SignIn.scss";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { setPassword } from "../../../../reduxToolkit/authSlice/extraReducer";
import {useTranslation} from "react-i18next";

export default function SetPassword() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [isActivePasswordEye, setisActivePasswordEye] = useState(false);
  const [isActiveCurrentPasswordEye, setisActiveCurrentPasswordEye] =
    useState(false);
  const token = useSelector((state) => state.authSlice.token);
  const verifyToken = localStorage.getItem("verifyToken");
  const [passwords, setPasswords] = useState({
    token: verifyToken,
    password: "",
    password_confirmation: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwords.password !== passwords.password_confirmation) {
      alert("Passwords not matched");
    } else {
      dispatch(setPassword(passwords));
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/registration/register");
    }
  }, [token]);

  return (
    <div className="auth">
      <div className="container">
        <div className="auth-wrapper">
          <div className="auth-desc">
            <h2 className="auth-desc-title">
              {t("registerTitle")}
            </h2>
            <p className="auth-desc-text">
              {t("registerText")}
            </p>
          </div>
          <div className="auth-form auth-signup">
            <div className="auth-form-title">
              <h3>{t("forgot")}</h3>
              <p>
                {t("sendEmail")}
              </p>
            </div>
            <form
              className="auth-form-inputs"
              onSubmit={(e) => handleSubmit(e)}
            >
              <label className="auth-form-inputs-passwordInput auth-form-inputs-passwordInput-changePassword">
                <span>Parol</span>
                <input
                  onChange={(e) =>
                    setPasswords((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  type={isActivePasswordEye ? "text" : "password"}
                  minLength={5}
                  maxLength={30}
                  required
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
              <label className="auth-form-inputs-passwordInput">
                <span>{t("againPassword")}</span>
                <input
                  onChange={(e) =>
                    setPasswords((prev) => ({
                      ...prev,
                      password_confirmation: e.target.value,
                    }))
                  }
                  type={isActiveCurrentPasswordEye ? "text" : "password"}
                  minLength={5}
                  maxLength={30}
                  required
                />
                {isActiveCurrentPasswordEye ? (
                  <AiFillEyeInvisible
                    className="auth-form-inputs-passwordInput-eyeIcon"
                    onClick={() => setisActiveCurrentPasswordEye(false)}
                  />
                ) : (
                  <AiFillEye
                    className="auth-form-inputs-passwordInput-eyeIcon"
                    onClick={() => setisActiveCurrentPasswordEye(true)}
                  />
                )}
              </label>
              <button
                type="submit"
                className="auth-form-inputs-submitBtn auth-form-inputs-submitBtn-changePassword"
              >
                O’rnatish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
