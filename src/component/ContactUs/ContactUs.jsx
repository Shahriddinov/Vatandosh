import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { sendContact } from "../../reduxToolkit/contactSlice/extraReducer";

import "./ContactUs.scss";

const ContactUs = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const formRef = useRef();
  const [dataConatct, setDataContact] = useState({ name: "", phone: "" });

  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(sendContact(dataConatct));
    formRef.current.reset();
  };

  return (
    <div className="contact-us">
      <div className="contact-container container">
        <h3>{t("footerContactUs")}</h3>
        <form onSubmit={handleSumbit} ref={formRef}>
          <input
            type="text"
            placeholder={t("footerName")}
            onChange={(e) =>
              setDataContact((prev) => ({ ...prev, name: e.target.value }))
            }
            required
          />
          <input
            type="text"
            placeholder="+998"
            onChange={(e) =>
              setDataContact((prev) => ({ ...prev, phone: e.target.value }))
            }
            required
          />
          <button type="submit">{t("footerSend")}</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
