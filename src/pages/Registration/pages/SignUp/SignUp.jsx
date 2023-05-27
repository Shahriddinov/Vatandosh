import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { sendEmail } from "../../../../reduxToolkit/authSlice/extraReducer";
import Spinner from "../../../../component/Spinner/Spinner";

import "../SignIn/SignIn.scss";

export default function SignUp() {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const [isValid, setIsValid] = useState(false);
  const loading = useSelector((store) => store.authSlice.emailLoading);
  const message = useSelector((store) => store.authSlice.message);
  const error = useSelector((store) => store.authSlice.error);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(sendEmail({ email: emailRef.current.value }));
    setIsValid(true);
  };

  if (loading) {
    return <Spinner position="full" />;
  }

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
              <h3>Ro’yxatdan o’tish</h3>
              <p>
                Hisob ochish uchun email pochtangizni kiriting va biz sizga
                tashdiqlash kodini yuboramiz
              </p>
            </div>
            <form
              className="auth-form-inputs"
              onSubmit={(e) => handleSubmit(e)}
            >
              <label className="auth-form-inputs-emailInput auth-form-inputs-emailInput-signup">
                <span>Email pochtangizni kiriting</span>
                <input type="email" ref={emailRef} required />
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
