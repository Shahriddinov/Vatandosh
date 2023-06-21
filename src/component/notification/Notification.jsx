import { useState } from "react";
import { Menu, Typography } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { closeNotification } from "../../reduxToolkit/notificationSlice/notificationSlice";

import "./notification.scss";
import { NotificationList, Tab } from "./components";
import { filterNotification } from "./extra";
import { useTranslation } from "react-i18next";

const Notification = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState("admin");
  const anchorEl = useSelector((store) => store.notification.open);
  const notificationData = useSelector(
    (store) => store.notification.notificationData
  );
  const notificationDataLoading = useSelector(
    (store) => store.notification.notificationDataLoading
  );

  const error = useSelector((store) => store.notification.error);
  const dispatch = useDispatch();

  if (notificationDataLoading) {
    return null;
  } else if (error) {
    return <p>{error}</p>;
  }

  const open = Boolean(anchorEl);

  const handleClose = (evt) => {
    if (!evt.target.parentElement.matches(".notification-tab__item")) {
      if (!evt.target.parentElement.matches(".notification-tab__list")) {
        dispatch(closeNotification(null));
      }
    }
  };
  const { admin, news, events } = filterNotification({
    data: notificationData.data,
    dispatch,
  });

  return (
    <div className="cabinet-notification_box">
      <Menu
        components="div"
        className="cabinet-notification"
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Typography
          component="p"
          className="cabinet-notification__title"
          sx={{ p: "12px 16px", width: "100%", maxWidth: "440px" }}
        >
          {t("notification")}
        </Typography>
        <Tab value={value} handleClose={handleClose} setValue={setValue} />

        <NotificationList
          data={value === "admin" ? admin : value === "news" ? news : events}
        />
      </Menu>
    </div>
  );
};

export default Notification;
