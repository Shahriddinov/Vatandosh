import React from "react";
import "./notificationCard.scss";
import { MenuItem } from "@mui/material";
import hours from "../../../../assets/images/hours.svg";
import { useDispatch } from "react-redux";
import { openNotification } from "../../../../reduxToolkit/notificationSlice/notificationSlice";

const NotificationCard = (props) => {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    dispatch(openNotification(event.currentTarget));
  };
  return (
    <MenuItem onClick={handleClick}>
      <div className="notification-card__inner">
        <div
          className="notification-card__img"
          style={{ borderRadius: props.type === "admin" ? "50%" : "4px" }}
        >
          <img
            src={props.image}
            alt={props.title}
            style={{ borderRadius: props.type === "admin" ? "50%" : "4px" }}
          />
          {!props?.read && <span className="notification-card__img_dot"></span>}
        </div>

        <div className="notification-card__content">
          <p className="notification-card__text">{props?.title}</p>

          {props?.time && (
            <p className="notification-card__time">
              <img className="notification-card__time_img" src={hours} alt="" />
              <span className="notification-card__time_span">1 soat qoldi</span>
            </p>
          )}

          <p className="notification-card__time_date">{props?.date}</p>
        </div>
      </div>
    </MenuItem>
  );
};

export default NotificationCard;
