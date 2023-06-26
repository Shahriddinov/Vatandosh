import React, { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import CabinetHeader from "./components/cabinetHeader/CabinetHeader";
import CabinetLeftMenu from "./components/cabinetLeftMenu/CabinetLeftMenu";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import "./cabinetLayout.scss";
import { useDispatch, useSelector } from "react-redux";
import { btnHandler } from "../../../reduxToolkit/orgPageSlice";
import { getItem } from "../../../helpers/persistanceStorage";
import { removeToken } from "../../../reduxToolkit/authSlice/authSlice";
import { useTranslation } from "react-i18next";

const CabinetLayout = () => {
  const { pathname } = useLocation();
  const [activePage, setActivePage] = useState(pathname.split("/")[3]);
  const { t } = useTranslation();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [leftMenuToggle, setLeftMenuToggle] = useState(false);
  const [rightBtnToggle, setRightBtnToggle] = useState(false);
  const [imgUpload, setImgUpload] = useState([]);
  const controls = useAnimation();

  const btnOrgPageToggle = useSelector((state) => state.orgPageSlice.btnToggle);
  const dispatch = useDispatch();

  const toggleSwitchHandler = () => {
    dispatch(btnHandler());
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const textHandler = (e) => {
    setText(e.target.value);
  };

  const uploadHandler = (e) => {
    setImgUpload(e.target.files[0]);
  };


  const userToken = getItem("token");

  useEffect(() => {
    if (!userToken) {
      dispatch(removeToken());
    }
  }, [userToken]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (title === "" || text === "" || imgUpload.length === 0) {
      controls.start({
        x: 0,
        transition: {
          type: "spring",
          velocity: 600,
          stiffness: 5000,
          damping: 15,
        },
      });
      return;
    }
    dispatch(btnHandler());
    setTitle("");
    setText("");
    setImgUpload([]);
    return;
  };

  return (
    <div className="cabinet-layout">
      <div className="container">
        {btnOrgPageToggle ? (
          <div
            className="overlay-organizations"
            onClick={toggleSwitchHandler}
          ></div>
        ) : null}
        <AnimatePresence>
          {btnOrgPageToggle && (
            <div className="modal-orgPage">
              <motion.div
                initial={{ x: -2000 }}
                animate={{ x: 0 }}
                exit={{ x: -2000 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className="modal-orgPage-container"
              >
                <h1>{t("event")}</h1>
                <form
                  onSubmit={submitHandler}
                  className="modal-orgPage-container-form"
                >
                  <label
                    htmlFor="title"
                    className="modal-orgPage-container-form-title"
                  >
                    <span>{t("communityAssociation.input_title")}</span>{" "}
                    <span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder={t("expert.inputplaceholder")}
                    className="modal-orgPage-container-form-titleInput"
                    onChange={titleHandler}
                  />
                  <label
                    className="modal-orgPage-container-form-comment"
                    htmlFor="Izoh"
                  >
                    <span>{t("communityAssociation.desc_textarea_plack")}</span>{" "}
                    <span>*</span>
                  </label>
                  <textarea
                    onChange={textHandler}
                    className="modal-orgPage-container-form-commentTextArea"
                    placeholder={t("communityAssociation.desc_textarea_plack")}
                  ></textarea>
                  <div className="modal-orgPage-container-form-fileUploadContainer">
                    <input type="file" id="file" onChange={uploadHandler} />
                    <label htmlFor="file">{t("eventOne")}</label>
                    {imgUpload.length !== 0 && (
                      <img
                        src={URL.createObjectURL(imgUpload)}
                        alt="uploadImg"
                      />
                    )}
                  </div>
                  <div className="modal-orgPage-container-form-submitContainer">
                    <motion.button
                      animate={controls}
                      whileTap={{ scale: 0.9 }}
                      type="submit"
                    >
                      {t("footerSend")}
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        <div className="cabinet-layout__left">
          <CabinetLeftMenu
            leftMenuToggle={leftMenuToggle}
            setLeftMenuToggle={setLeftMenuToggle}
            setActivePage={setActivePage}
            activePage={activePage}
          />

        </div>
        <div className="cabinet-layout__right">
          <CabinetHeader
            setLeftMenuToggle={setLeftMenuToggle}
            setRightBtnToggle={setRightBtnToggle}
            rightBtnToggle={rightBtnToggle}
            setActivePage={setActivePage}
          />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CabinetLayout;
