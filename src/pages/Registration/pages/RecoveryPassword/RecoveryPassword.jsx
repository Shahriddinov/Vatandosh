import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { resetPassword } from "../../../../reduxToolkit/authSlice/extraReducer";

import "../SignIn/SignIn.scss";
import Spinner from "../../../../component/Spinner/Spinner";
import { useTranslation } from "react-i18next";

export default function RecoveryPassword() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const message = useSelector((state) => state.authSlice.message);
  const loading = useSelector((state) => state.authSlice.resetLoading);
  const error = useSelector((state) => state.authSlice.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword({ email: email }));
    setIsValid(true);
  };

  return (
    <div className="auth">
      <div className="container">
        <div className="auth-wrapper">
          <div className="auth-desc">
            <h2 className="auth-desc-title">
              {t("registeri")}
            </h2>
            <p className="auth-desc-text">
              {t("create")}
            </p>
          </div>
          <div className="auth-form auth-signup">
            <div className="auth-form-title">
              <h3>{t("reset")}</h3>
              <p>{t("editPassword")}</p>
            </div>
            <form
              className="auth-form-inputs"
              onSubmit={(e) => handleSubmit(e)}>
              <label className="auth-form-inputs-emailInput auth-form-inputs-emailInput-signup">
                <span>{t("editEmail")}</span>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <p
                className="auth-form-inputs-sendMail"
                style={isValid ? { display: "block" } : { display: "none" }}>
                {message ? message : "Loading..."}
              </p>
              <button type="submit" className="auth-form-inputs-submitBtn">
                {t("registerSubmit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
