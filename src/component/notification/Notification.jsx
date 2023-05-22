import { useState } from "react";
import { Avatar, Box, Menu, MenuItem, Typography } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { closeNotification } from "../../reduxToolkit/notificationSlice/notificationSlice";

import "./notification.scss";
import { NotificationList, Tab } from "./components";
const Notification = () => {
  const [value, setValue] = useState("1");

  const anchorEl = useSelector((store) => store.notification.open);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);

  const handleClose = (evt) => {
    if (!evt.target.matches(".cabinet-notification__tab_item")) {
      dispatch(closeNotification(null));
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
          Notifications
        </Typography>
        <Tab />

        <NotificationList />
      </Menu>
    </div>
  );
};

export default Notification;
