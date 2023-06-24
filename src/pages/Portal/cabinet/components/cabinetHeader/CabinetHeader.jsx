import React, { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import i18next from "i18next";
import { Link, useLocation } from "react-router-dom";
import "./cabinetHeader.scss";
import { languageChange } from "../../../../../reduxToolkit/languageSlice";
import { languageList } from "../../../../../component/Layout/data";
import { GrayContext } from "../../../../../context/GrayContext";
import { removeToken } from "../../../../../reduxToolkit/authSlice/authSlice";
import { CiGlobe } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";

import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";
import { useTranslation } from "react-i18next";
import { getExpertEmployment } from "../../../../../reduxToolkit/ExpertSlice/RegisterSlice/extraReducer";
import Spinner from "../../../../../component/Spinner/Spinner";
import {
  moreInfoIcon,
  rightButtonOpenIcon,
} from "../../../../../assets/images/cabinet";

const CabinetHeader = ({
  setLeftMenuToggle,
  setRightBtnToggle,
  rightBtnToggle,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { grayScale } = useContext(GrayContext);
  const [activeLang, setActiveLang] = useState(false);
  const language = useSelector((state) => state.language.language);
  const user = useSelector((state) => state.authSlice.userData);
  const employmentLoading = useSelector(
    (state) => state.expertRegisterSlice.employmentLoading
  );
  const error = useSelector(
    (state) => state.expertRegisterSlice.employmentError
  );
  const userEmployment = useSelector(
    (state) => state.expertRegisterSlice.employment
  );

  const handleChangeLng = (lng) => {
    i18next.changeLanguage(lng);
    dispatch(languageChange(lng));
    setActiveLang((el) => !el);
  };

  useEffect(() => {
    dispatch(getExpertEmployment());
  }, [dispatch]);

  if (employmentLoading) {
    return <Spinner position="full" />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let userExperience = 0;

  userEmployment.map((data) => {
    userExperience += data.experience;
  });

  return (
    <div className="cabinet-header">
      <div className="cabinet-header__user-information">
        <div
          className="cabinet-header__left-menu-open"
          onClick={() => setLeftMenuToggle(true)}>
          <img src={moreInfoIcon} alt="" />
        </div>
        <div className="cabinet-header__user-image">
          <img src={`${PORTAL_IMAGE_URL}${user?.avatar_url}`} alt="user" />
        </div>
        <div className="cabinet-header__user-data">
          <h4>{user.first_name + " " + user.last_name}</h4>
          <p>
            {t("experience")}:{" "}
            <span>
              {userExperience + " "}
              {t("experienceYear")}
            </span>
          </p>
        </div>
      </div>
      <div
        className="cabinet-header__right-buttons-open"
        onClick={() => setRightBtnToggle(!rightBtnToggle)}>
        <img src={rightButtonOpenIcon} alt="" />
      </div>
      <div className="cabinet-header__right-buttons">
        <div className="cabinet-header__glasses" onClick={() => grayScale()}>
          <svg width="20" height="6" viewBox="0 0 20 6" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.105718 1.10183C0.247265 1.23227 0.95382 1.62416 1.09478 2.01605C1.23632 2.4074 1.51942 4.91266 2.36752 5.56599C3.24216 6.23843 6.54139 5.9879 7.17304 5.69698C8.58674 5.04474 8.76014 2.93792 9.0102 2.01551C9.15116 1.49317 9.99926 1.49317 9.99926 1.49317C9.99926 1.49317 10.8474 1.49317 10.9889 2.01496C11.239 2.93792 11.4136 5.05075 12.8261 5.7019C13.4583 5.9939 16.7575 6.24443 17.6334 5.57199C18.4803 4.91866 18.7628 2.40685 18.9043 2.01496C19.0447 1.62362 19.7524 1.23173 19.8934 1.10128C20.0355 0.970832 20.0355 0.448493 19.8934 0.317499C19.6109 0.0566031 16.2757 -0.175911 12.6845 0.187051C11.9679 0.259644 11.6955 0.447947 9.99867 0.447947C8.30306 0.447947 8.0294 0.259098 7.31341 0.187051C3.7246 -0.175366 0.388812 0.0571486 0.105718 0.318045C-0.0352393 0.448493 -0.0352393 0.971377 0.105718 1.10183Z"
              fill="#5D6B8A"
            />
          </svg>
        </div>
        <div className="cabinet-header__language">
          <div
            className="cabinet-header__language-wrapper"
            onClick={() => setActiveLang((el) => !el)}>
            <CiGlobe className="cabinet-header__language-icon" />
            <span style={{ color: "white" }}>
              {languageList.find((lan) => lan.type === language)?.label}
            </span>
            <IoMdArrowDropdown className="cabinet-header__language-iconArrow" />
          </div>
          <div
            className="cabinet-header__language-bar"
            style={activeLang ? { display: "flex" } : null}>
            {languageList.map((el, index) => (
              <p
                key={index}
                onClick={() => {
                  handleChangeLng(el.type);
                }}>
                {el.label}
              </p>
            ))}
          </div>
        </div>
        <Link
          to="/portal-category/cabinet/chat"
          className={`cabinet-header__chat ${
            pathname === "/portal-category/cabinet/chat" ||
            pathname === "/portal-category/cabinet"
              ? "active"
              : ""
          }`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2.00001C10.6994 1.95278 9.40265 2.16913 8.18781 2.63605C6.97297 3.10297 5.86513 3.8108 4.93095 4.71696C3.99676 5.62313 3.25552 6.7089 2.75183 7.90895C2.24814 9.10901 1.9924 10.3986 2 11.7C1.98324 13.0512 2.25462 14.3904 2.79605 15.6285C3.33749 16.8665 4.13655 17.975 5.14 18.88C5.21967 18.951 5.28453 19.037 5.33086 19.1331C5.3772 19.2292 5.40409 19.3335 5.41 19.44V21.22C5.41548 21.3512 5.45278 21.4791 5.5187 21.5927C5.58461 21.7063 5.67716 21.8022 5.78836 21.8721C5.89956 21.9419 6.02608 21.9837 6.15703 21.9938C6.28797 22.0039 6.4194 21.982 6.54 21.93L8.54 21.06C8.71078 20.9955 8.89922 20.9955 9.07 21.06C10.0154 21.3152 10.9907 21.443 11.97 21.44C14.5479 21.444 17.0218 20.4237 18.8475 18.6037C20.6731 16.7837 21.701 14.3129 21.705 11.735C21.709 9.1571 20.6887 6.6832 18.8687 4.85754C17.0486 3.03187 14.5779 2.00399 12 2.00001ZM18 9.46001L15.07 14.12C14.9595 14.2955 14.8138 14.4461 14.6422 14.5624C14.4705 14.6787 14.2766 14.7582 14.0727 14.7957C13.8688 14.8333 13.6593 14.8282 13.4574 14.7808C13.2556 14.7333 13.0658 14.6445 12.9 14.52L10.56 12.77C10.4561 12.6921 10.3298 12.65 10.2 12.65C10.0702 12.65 9.94386 12.6921 9.84 12.77L6.68 15.17C6.59199 15.2379 6.48278 15.2724 6.37176 15.2674C6.26073 15.2623 6.15507 15.2181 6.07355 15.1426C5.99202 15.0671 5.9399 14.9651 5.92643 14.8548C5.91297 14.7445 5.93903 14.6329 6 14.54L8.93 9.88001C9.0405 9.70456 9.18618 9.55393 9.35784 9.43763C9.52949 9.32132 9.7234 9.24187 9.92731 9.20428C10.1312 9.16669 10.3407 9.17179 10.5425 9.21925C10.7444 9.2667 10.9342 9.35549 11.1 9.48001L13.44 11.23C13.5439 11.3079 13.6702 11.35 13.8 11.35C13.9298 11.35 14.0561 11.3079 14.16 11.23L17.32 8.83001C17.408 8.76214 17.5172 8.72765 17.6282 8.73266C17.7393 8.73768 17.8449 8.78188 17.9264 8.85741C18.008 8.93294 18.0601 9.03492 18.0736 9.14524C18.087 9.25556 18.061 9.36708 18 9.46001Z"
              fill="#5D6B8A"
            />
          </svg>
        </Link>
        <div className="cabinet-header__notification">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 4C10.4207 4 9.16036 4.5897 8.30417 5.60939C7.46087 6.61374 7.07407 7.95734 7.07407 9.3625V10.7708C7.07407 10.9691 6.98891 11.2076 6.76685 11.5154C6.55398 11.8105 6.27765 12.0872 5.97239 12.3928L5.92067 12.4447C5.38886 12.9776 5 13.7497 5 14.6708C5 15.9194 5.93196 17 7.16049 17H16.8395C18.068 17 19 15.9194 19 14.6708C19 13.7497 18.6111 12.9776 18.0793 12.4447L18.0276 12.3928L18.0276 12.3928C17.7223 12.0871 17.446 11.8104 17.2332 11.5154C17.0111 11.2076 16.9259 10.9691 16.9259 10.7708V9.3625C16.9259 7.95734 16.5391 6.61374 15.6958 5.60939C14.8396 4.5897 13.5793 4 12 4Z"
              fill="#5D6B8A"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.3693 18.1132C10.7515 17.9079 11.2691 17.9896 11.5255 18.2958C11.6083 18.3947 11.737 18.488 11.91 18.557C12.0832 18.6261 12.287 18.6651 12.5 18.6651C12.713 18.6651 12.9168 18.6261 13.09 18.557C13.263 18.488 13.3917 18.3947 13.4745 18.2958C13.7309 17.9896 14.2485 17.9079 14.6307 18.1132C15.013 18.3185 15.115 18.7331 14.8587 19.0392C14.6028 19.3449 14.2452 19.5874 13.8333 19.7518C13.4215 19.9161 12.9621 20 12.5 20C12.0379 20 11.5785 19.9161 11.1667 19.7518C10.7548 19.5874 10.3972 19.3449 10.1413 19.0392C9.88497 18.7331 9.98704 18.3185 10.3693 18.1132Z"
              fill="#5D6B8A"
            />
          </svg>
        </div>
        <div
          className="cabinet-header__logout"
          onClick={() => dispatch(removeToken())}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 0H9C11.2091 0 13 1.79086 13 4V9.25L6 9.25C5.58579 9.25 5.25 9.58579 5.25 10C5.25 10.4142 5.58579 10.75 6 10.75L13 10.75V16C13 18.2091 11.2091 20 9 20H4C1.79086 20 0 18.2091 0 16V14V6V4C0 1.79086 1.79086 0 4 0ZM13 10.75H17.1893L15.4697 12.4697C15.1768 12.7626 15.1768 13.2374 15.4697 13.5303C15.7626 13.8232 16.2374 13.8232 16.5303 13.5303L18.8232 11.2374C19.5066 10.554 19.5066 9.44598 18.8232 8.76256L16.5303 6.46967C16.2374 6.17678 15.7626 6.17678 15.4697 6.46967C15.1768 6.76256 15.1768 7.23744 15.4697 7.53033L17.1893 9.25H13V10.75Z"
              fill="#EB5757"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CabinetHeader;
