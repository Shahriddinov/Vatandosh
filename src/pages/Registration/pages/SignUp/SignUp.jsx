import React, {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {sendEmail} from "../../../../reduxToolkit/authSlice/extraReducer";
import Spinner from "../../../../component/Spinner/Spinner";

import "../SignIn/SignIn.scss";
import {useTranslation} from "react-i18next";

export default function SignUp() {
    const {t} = useTranslation();

    const dispatch = useDispatch();
    const emailRef = useRef();
    const [isValid, setIsValid] = useState(false);
    const loading = useSelector((store) => store.authSlice.emailLoading);
    const message = useSelector((store) => store.authSlice.message);
    const error = useSelector((store) => store.authSlice.error);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(sendEmail({email: emailRef.current.value}));
        setIsValid(true);
    };

    if (loading) {
        return <Spinner position="full"/>;
    }

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
                            <h3>{t("registeri")}</h3>
                            <p>
                                {t("sendEmail")}
                            </p>
                        </div>
                        <form
                            className="auth-form-inputs"
                            onSubmit={(e) => handleSubmit(e)}
                        >
                            <label className="auth-form-inputs-emailInput auth-form-inputs-emailInput-signup">
                                <span>{t("createEmail")}</span>
                                <input type="email" ref={emailRef} required/>
                            </label>
                            <p
                                className="auth-form-inputs-sendMail"
                                style={isValid ? {display: "block"} : {display: "none"}}
                            >
                                {message ? message : "Loading..."}
                            </p>
                            <button type="submit" className="auth-form-inputs-submitBtn">
                                {t("keep")}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
