import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  getAllChats,
  getMessages,
} from "../../../../../../../reduxToolkit/chatSlice/extraReducer";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";

import "./privateChats.scss";
import { ChooseMember } from "../../Chat";
import { useTranslation } from "react-i18next";

const PrivateChats = ({
  setUserData,
  setShowMessages,
  setActiveUser,
  activeUser,
  setShowDocs,
  setShowLinks,
  activePage,
  data,
  setPrivateChatId,
  activeChat,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [chatRoomId, setChatRoomId] = useState(null);
  const [isActive, setIsActive] = useState(true);

  const { chooseMember, setChooseMember } = useContext(ChooseMember);

  const handleClick = (user, profileImg, chat_room_id) => {
    setPrivateChatId(chat_room_id);
    setActiveUser(user?.user_id);
    setUserData({ user, profileImg });
    setChatRoomId(chat_room_id);
    setShowMessages(true);
    setShowDocs(false);
    setShowLinks(false);
    setChooseMember(null);

    dispatch(
      getMessages({
        chat_id: chat_room_id,
        page: activePage,
      })
    );
  };

  useEffect(() => {
    if (chatRoomId) {
      dispatch(
        getMessages({
          chat_id: chatRoomId,
          page: activePage,
        })
      );
    }
  }, [chatRoomId, activePage]);

  useEffect(() => {
    dispatch(getAllChats());
  }, []);

  const date = new Date();
  const milliseconds = date.getTime();
  const today = date.getDate();

  return (
    <div className={`users ${activeUser ? "users-none" : "users-block"}`}>
      {data?.length === 0 ? (
        <p className="users__no-users">{t("chatNone")}</p>
      ) : (
        data?.map((chat) => {
          const time_interval = Math.floor(
            Math.abs(milliseconds - date.getTime()) / 60000
          );

          let profileImg;
          if (chat?.user) {
            if (chat?.user?.avatar_url) {
              profileImg = (
                <img
                  src={`${PORTAL_IMAGE_URL}${chat?.user?.avatar_url}`}
                  alt="user"
                />
              );
            } else {
              profileImg =
                chat?.user?.first_name?.[0] + chat?.user?.last_name?.[0];
            }
          }

          return chat?.user ? (
            <div
              key={chat?.id}
              className={`users__one-user ${
                chat?.user?.user_id === activeUser ? "active" : ""
              }`}
              onClick={() => {
                handleClick(chat?.user, profileImg, chat?.id);
                setIsActive(false);
              }}
            >
              <div className="users__user-image">
                {profileImg}
                {time_interval > 3 ? (
                  <span className="users__online"></span>
                ) : null}
              </div>
              <div className="users__user-information">
                <h4>{chat?.user?.first_name + " " + chat?.user?.last_name}</h4>
                {!chat?.user?.last_online_at ? (
                  <p>{t("Cabinet.user_online")}</p>
                ) : (
                  <p>
                    {t("Cabinet.last_seen")}{" "}
                    {parseInt(
                      chat?.user?.last_online_at.split(" ")[0].split("-")[1]
                    ) === today
                      ? chat?.user?.last_online_at.split(" ")[1].split(":")[0] +
                        ":" +
                        chat?.user?.last_online_at.split(" ")[1].split(":")[1]
                      : chat?.user?.last_online_at.split(" ")[0]}
                  </p>
                )}
              </div>
              {chat.unread ? (
                <div className="users__has-message">
                  {chat.unread > 1000
                    ? `${Math.round(chat.unread / 1000)}k`
                    : chat.unread}
                </div>
              ) : null}
            </div>
          ) : (
            <div
              key={chat?.id}
              className={`users__one-user ${isActive ? "active" : ""}`}
              onClick={() => {
                handleClick(chat, profileImg, chat?.id);
                setIsActive(true);
              }}
            >
              <div className="users__user-image">
                {profileImg}
                {chat?.last_online_at ? (
                  <span className="users__online"></span>
                ) : null}
              </div>
              <div className="users__user-information">
                <h4>{chat?.name}</h4>
                {!chat?.last_online_at ? (
                  <p>{t("Cabinet.user_online")}</p>
                ) : (
                  <p>
                    {t("Cabinet.last_seen")} {chat?.last_online_at}
                  </p>
                )}
              </div>
              {chat.unread > 0 ? (
                <div className="users__has-message">
                  {chat.unread > 1000
                    ? `${Math.round(chat.unread / 1000)}k`
                    : chat.unread}
                </div>
              ) : null}
            </div>
          );
        })
      )}
    </div>
  );
};

export default PrivateChats;
