import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { resetPassword } from "../../../../reduxToolkit/authSlice/extraReducer";

import "../SignIn/SignIn.scss";
import Spinner from "../../../../component/Spinner/Spinner";

export default function RecoveryPassword() {
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
              Lorem ipsum dolor sit amet consectetur. Mauris sit mauris
            </h2>
            <p className="auth-desc-text">
              Lorem ipsum dolor sit amet consectetur. Neque sed ultrices vel
              orci mollis felis ultrices leo. Erat vestibulum amet nibh luctus
              vitae velit vitae vulputate blandit. Malesuada commodo magna sed
              sem justo non convallis. Vestibulum id nunc et morbi lobortis non
              bibendum arcu netus. Eget nisi tincidunt aliquam rutrum nunc
              feugiat fermentum in nisi
            </p>
          </div>
          <div className="auth-form auth-signup">
            <div className="auth-form-title">
              <h3>Parolni tiklash</h3>
              <p>
                Hisobingiz bilan bog'langan email pochtangizni kiriting va
                parolingizni tiklash uchun tasdiqlash kodini yuboramiz.
              </p>
            </div>
            <form
              className="auth-form-inputs"
              onSubmit={(e) => handleSubmit(e)}
            >
              <label className="auth-form-inputs-emailInput auth-form-inputs-emailInput-signup">
                <span>Email pochtangizni kiriting</span>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <p
                className="auth-form-inputs-sendMail"
                style={isValid ? { display: "block" } : { display: "none" }}
              >
                {message ? message : "Loading..."}
              </p>
              <button type="submit" className="auth-form-inputs-submitBtn">
                Davom etish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
