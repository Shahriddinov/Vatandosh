import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import { sendContact } from "../../reduxToolkit/contactSlice/extraReducer";

import "./ContactUs.scss";
import { useEffect } from "react";
import { resetContact } from "../../reduxToolkit/contactSlice";

const ContactUs = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const formRef = useRef();
  const contact = useSelector((state) => state.contactSlice.sendData);

  const options = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

  const [dataContact, setDataContact] = useState({ phone: "", text: "" });

  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(sendContact(dataContact));
    formRef.current.reset();
  };

  useEffect(() => {
    if (contact) {
      toast.success(t("sendContact"), options);
    }

    dispatch(resetContact());
  }, [contact]);

  return (
    <div className="contact-us">
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
      <div className="contact-container container">
        <div className="contact-inner">
          <h3>{t("footerContactUs")}</h3>

          <form onSubmit={handleSumbit} ref={formRef}>
            <input
              type="text"
              placeholder={t("footerName")}
              onChange={(e) =>
                setDataContact((prev) => ({ ...prev, text: e.target.value }))
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
    </div>
  );
};

export default ContactUs;
