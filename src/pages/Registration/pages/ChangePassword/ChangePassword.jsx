import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { recoverPassword } from "../../../../reduxToolkit/authSlice/extraReducer";

import "../SignIn/SignIn.scss";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import {useTranslation} from "react-i18next";

export default function ChangePassword() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isActivePasswordEye, setisActivePasswordEye] = useState(false);
  const [isActiveCurrentPasswordEye, setisActiveCurrentPasswordEye] =
    useState(false);
  const success = useSelector((state) => state.authSlice.success);
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
      dispatch(recoverPassword(passwords));
    }
  };

  useEffect(() => {
    if (success) {
      navigate("/registration/signin");
    }
  }, [success]);

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
              <h3>{t("newPassword")}</h3>
              <p>
                {t("linked")}
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
                {t("change")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
