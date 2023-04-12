import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { getContact } from "../../reduxToolkit/contactSlice/extraReducer";
import ChatModal from "./components/PortalChatModal/ChatModal";

import "./portal.scss";

const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [showChat, setShowChat] = useState(false);
  const [horizontal, setHorizontal] = useState(false);

  const navbarList = [
    { id: 1, label: t("uzLearning"), url: "/portal-category/online-teaching" },
    { id: 2, label: t("applyUniversity"), url: "/" },
    { id: 3, label: t("expertCouncil"), url: "/portal-category/expert" },
    { id: 4, label: t("virtualTalking"), url: "/" },
    { id: 5, label: t("eventBase"), url: "/" },
    { id: 6, label: t("electronLibrary"), url: "/" },
    { id: 7, label: t("electronBook"), url: "/" },
    { id: 8, label: t("aboutUzbekistan"), url: "/portal-category/victorina" },
    { id: 9, label: t("participationProject"), url: "/" },
    {
      id: 10,
      label: t("electronCommunity"),
      url: "/portal-category/community-association",
    },
    {
      id: 11,
      label: t("compatriotsValunteer"),
      url: "/portal-category/volunteer",
    },
  ];

  const contactData = useSelector(
    (state) => state.contactSlice.contactData.data
  );

  useEffect(() => {
    dispatch(getContact());

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 1024) {
        setHorizontal(true);
      } else {
        setHorizontal(false);
      }
    });
  }, []);

  return (
    <div className="portal">
      <div className="background-gif"></div>
      <div className="container">
        <div className="portal-body">
          <div className="portal-body-middle">
            <div className="social-media">
              <svg
                width="2"
                height="104"
                viewBox="0 0 2 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1V103"
                  stroke="url(#paint0_linear_42_1145)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_42_1145"
                    x1="1.5"
                    y1="1"
                    x2="1.5"
                    y2="103"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="#D9D9D9" fillOpacity="0.9" />
              </svg>
              <a href={contactData?.instagram}>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.50002 0C10.8085 0 11.0979 0.00978483 12.0045 0.0511511C12.9093 0.0924161 13.5272 0.236118 14.0678 0.446256C14.6268 0.663445 15.1008 0.954089 15.5734 1.42663C16.0459 1.8992 16.3366 2.37323 16.5538 2.93218C16.7639 3.47284 16.9076 4.09073 16.9488 4.99546C16.9902 5.90208 17 6.19154 17 8.50002C17 10.8085 16.9902 11.0979 16.9488 12.0045C16.9076 12.9093 16.7639 13.5272 16.5538 14.0678C16.3366 14.6268 16.0459 15.1008 15.5734 15.5734C15.1008 16.0459 14.6268 16.3366 14.0678 16.5538C13.5272 16.7639 12.9093 16.9076 12.0045 16.9488C11.0979 16.9902 10.8085 17 8.50002 17C6.19154 17 5.90208 16.9902 4.99546 16.9488C4.09073 16.9076 3.47284 16.7639 2.93218 16.5538C2.37323 16.3366 1.8992 16.0459 1.42663 15.5734C0.954089 15.1008 0.663445 14.6268 0.446256 14.0678C0.236118 13.5272 0.0924161 12.9093 0.0511511 12.0045C0.00978483 11.0979 0 10.8085 0 8.50002C0 6.19154 0.00978483 5.90208 0.0511511 4.99546C0.0924161 4.09073 0.236118 3.47284 0.446256 2.93218C0.663445 2.37323 0.954089 1.8992 1.42663 1.42663C1.8992 0.954089 2.37323 0.663445 2.93218 0.446256C3.47284 0.236118 4.09073 0.0924161 4.99546 0.0511511C5.90208 0.00978483 6.19154 0 8.50002 0ZM8.49734 11.3298C10.0616 11.3298 11.3298 10.0616 11.3298 8.49734C11.3298 6.933 10.0616 5.66488 8.49734 5.66488C6.933 5.66488 5.66488 6.933 5.66488 8.49734C5.66488 10.0616 6.933 11.3298 8.49734 11.3298ZM8.49734 4.13383C10.9072 4.13383 12.8608 6.08742 12.8608 8.49734C12.8608 10.9072 10.9072 12.8608 8.49734 12.8608C6.08742 12.8608 4.13383 10.9072 4.13383 8.49734C4.13383 6.08742 6.08742 4.13383 8.49734 4.13383ZM14.3556 3.87224C14.3556 4.44601 13.8904 4.91111 13.3166 4.91111C12.7429 4.91111 12.2778 4.44601 12.2778 3.87224C12.2778 3.29847 12.7429 2.83333 13.3166 2.83333C13.8904 2.83333 14.3556 3.29847 14.3556 3.87224Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href={contactData?.twitter}>
                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.979 1.76286C17.9532 1.73216 17.9106 1.72174 17.8743 1.73848C17.3361 1.97947 16.77 2.15273 16.1869 2.25508C16.8059 1.78501 17.2672 1.13405 17.5037 0.387632C17.5151 0.351902 17.5033 0.312823 17.4744 0.289561C17.4453 0.2663 17.4049 0.263322 17.373 0.28249C16.6758 0.699897 15.9206 0.99411 15.1276 1.15731C14.4248 0.421129 13.4435 0 12.4278 0C10.3623 0 8.68211 1.69605 8.68211 3.78086C8.68211 4.03301 8.70626 4.28275 8.75419 4.52523C5.89336 4.34695 3.21836 2.96056 1.3995 0.708643C1.38088 0.685568 1.35268 0.672727 1.32318 0.675705C1.29387 0.677938 1.26769 0.694686 1.25294 0.720181C0.921099 1.29484 0.745777 1.9523 0.745777 2.62112C0.745777 3.7803 1.2675 4.86411 2.15591 5.57926C1.69853 5.52381 1.25183 5.37847 0.849016 5.15274C0.821916 5.13729 0.788179 5.13748 0.761078 5.1533C0.733978 5.16893 0.716833 5.19796 0.716095 5.22959L0.715727 5.27798C0.715727 6.94277 1.8025 8.40453 3.3487 8.88986C2.94145 8.95611 2.51891 8.95165 2.10356 8.87163C2.07295 8.86586 2.04088 8.87646 2.01986 8.90028C1.99903 8.9241 1.99202 8.95741 2.00161 8.98756C2.46526 10.4484 3.75354 11.4728 5.25309 11.6005C4.00224 12.5256 2.5237 13.0129 0.961473 13.0129C0.673694 13.0129 0.383886 12.9956 0.0999786 12.962C0.0594204 12.9573 0.0192308 12.9817 0.00521981 13.0209C-0.00879122 13.0606 0.00614159 13.1049 0.0411692 13.1274C1.73171 14.2218 3.68643 14.8 5.69425 14.8C12.2619 14.8 16.1865 9.41483 16.1865 4.20869C16.1865 4.06372 16.1837 3.9195 16.178 3.77565C16.8865 3.25254 17.4947 2.61219 17.9851 1.87098C18.007 1.83786 18.0046 1.79375 17.979 1.76286Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href={contactData?.facebook}>
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.62343 0.0037452L7.22488 0C4.5302 0 2.78878 1.73871 2.78878 4.42982V6.47227H0.377148C0.168754 6.47227 0 6.63668 0 6.83949V9.79876C0 10.0016 0.168947 10.1658 0.377148 10.1658H2.78878V17.633C2.78878 17.8358 2.95753 18 3.16593 18H6.31242C6.52081 18 6.68956 17.8356 6.68956 17.633V10.1658H9.50932C9.71772 10.1658 9.88647 10.0016 9.88647 9.79876L9.88763 6.83949C9.88763 6.74211 9.84779 6.64886 9.77717 6.57994C9.70656 6.51103 9.61034 6.47227 9.51029 6.47227H6.68956V4.74086C6.68956 3.90868 6.89334 3.48622 8.00727 3.48622L9.62304 3.48566C9.83125 3.48566 10 3.32124 10 3.11863V0.370775C10 0.168347 9.83144 0.00411972 9.62343 0.0037452Z"
                    fill="white"
                  />
                </svg>
              </a>
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="#D9D9D9" fillOpacity="0.9" />
              </svg>
              <svg
                width="2"
                height="104"
                viewBox="0 0 2 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1V103"
                  stroke="url(#paint0_linear_42_1145)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_42_1145"
                    x1="1.5"
                    y1="1"
                    x2="1.5"
                    y2="103"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="register-field">
              <h2>
                “<span>VATANDOSHLAR</span>” <br /> Jamoat Fondining Yagona
                Avtomatlashtirilgan Axborot Tizimi
              </h2>
              <p>
                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.{" "}
              </p>
              <div className="portal-btns">
                <button onClick={() => navigate("/registration/signup")}>
                  Sign Up
                </button>
                <button onClick={() => navigate("/registration/signin")}>
                  Log In
                </button>
              </div>
            </div>
            <div className="navbar-side">
              <Swiper
                direction={`${horizontal ? "horizontal" : "vertical"}`}
                slidesPerView={3}
                spaceBetween={horizontal ? 20 : 40}
                loop={true}
                grabCursor={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay]}
              >
                {navbarList.map((navbar) => {
                  return (
                    <SwiperSlide key={navbar.id}>
                      <Link to={navbar.url}>{navbar.label}</Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <div className="portal-body-bottom">
            <button onClick={() => setShowChat(!showChat)}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 0C4.47715 0 0 4.47715 0 10C0 11.8153 0.484506 13.5196 1.33127 14.9883C1.50372 15.2874 1.5333 15.6516 1.38777 15.9647L0.534056 17.8016C0.00986135 18.7933 0.727364 20 1.86159 20H10C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM6.0002 11.3C6.71817 11.3 7.3002 10.7179 7.3002 9.99995C7.3002 9.28198 6.71817 8.69995 6.0002 8.69995C5.28223 8.69995 4.7002 9.28198 4.7002 9.99995C4.7002 10.7179 5.28223 11.3 6.0002 11.3ZM14.0002 11.3C14.7182 11.3 15.3002 10.7179 15.3002 9.99995C15.3002 9.28198 14.7182 8.69995 14.0002 8.69995C13.2822 8.69995 12.7002 9.28198 12.7002 9.99995C12.7002 10.7179 13.2822 11.3 14.0002 11.3ZM10.0002 11.3C10.7182 11.3 11.3002 10.7179 11.3002 9.99995C11.3002 9.28198 10.7182 8.69995 10.0002 8.69995C9.28222 8.69995 8.7002 9.28198 8.7002 9.99995C8.7002 10.7179 9.28222 11.3 10.0002 11.3Z"
                  fill="white"
                />
              </svg>
            </button>
            <ChatModal showChat={showChat} setShowChat={setShowChat} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
