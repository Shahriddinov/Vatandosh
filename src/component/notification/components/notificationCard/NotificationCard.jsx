import React from "react";
import "./notificationCard.scss";
import { MenuItem } from "@mui/material";
import img from "../../../../assets/images/Initials.png";
import hours from "../../../../assets/images/hours.svg";

const NotificationCard = (handleClose) => {
  return (
    <MenuItem onClick={handleClose}>
      <div className="notification-card__inner">
        <div className="notification-card__img">
          <img src={img} alt="" />
          <span className="notification-card__img_dot"></span>
        </div>

        <div className="notification-card__content">
          <p className="notification-card__text">
            Tabiiy-ilmiy savodxonlik yo'nalishi bo'yicha onlayn vebinar oz
            qoldiceqhqeuilgwqeiriwqegeweru
          </p>

          <p className="notification-card__time">
            <img className="notification-card__time_img" src={hours} alt="" />
            <span className="notification-card__time_span">1 soat qoldi</span>
          </p>
          <p className="notification-card__time_date">Bugun 23:42 da</p>
        </div>
      </div>
    </MenuItem>
  );
};

export default NotificationCard;
