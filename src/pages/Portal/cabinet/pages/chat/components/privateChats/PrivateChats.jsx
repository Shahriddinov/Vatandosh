import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  getAllChats,
  getMessages,
} from "../../../../../../../reduxToolkit/chatSlice/extraReducer";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";

import "./privateChats.scss";

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
}) => {
  const dispatch = useDispatch();

  const [chatRoomId, setChatRoomId] = useState(null);

  const handleClick = (user, profileImg, chat_room_id) => {
    setPrivateChatId(chat_room_id);
    setActiveUser(user?.user_id);
    setUserData({ user, profileImg });
    setChatRoomId(chat_room_id);
    setShowMessages(true);
    setShowDocs(false);
    setShowLinks(false);

    dispatch(
      getMessages({
        chat_id: chat_room_id,
        chat_type: 1,
        page: activePage,
      })
    );
  };

  useEffect(() => {
    if (chatRoomId) {
      dispatch(
        getMessages({
          chat_id: chatRoomId,
          chat_type: 1,
          page: activePage,
        })
      );
    }
  }, [chatRoomId, activePage]);

  useEffect(() => {
    dispatch(getAllChats());
  }, []);

  return (
    <div className="users">
      {data?.length === 0 ? (
        <p className="users__no-users">You have not any chat yet.</p>
      ) : (
        data?.map((chat) => {
          let profileImg;
          if (chat?.user?.avatar_url) {
            profileImg = (
              <img
                src={`${PORTAL_IMAGE_URL}${chat?.user?.avatar_url}`}
                alt="user"
              />
            );
          } else {
            profileImg = chat?.user?.first_name[0] + chat?.user?.last_name[0];
          }

          return (
            <div
              key={chat?.id}
              className={`users__one-user ${
                chat?.user?.user_id === activeUser ? "active" : ""
              }`}
              onClick={() => handleClick(chat?.user, profileImg, chat?.id)}
            >
              <div className="users__user-image">
                {profileImg}
                {chat?.user?.last_online_at ? (
                  <span className="users__online"></span>
                ) : null}
              </div>
              <div className="users__user-information">
                <h4>{chat?.user?.first_name + " " + chat?.user?.last_name}</h4>
                {!chat?.user?.last_online_at ? (
                  <p>Online</p>
                ) : (
                  <p>Last seen {chat?.user?.last_online_at}</p>
                )}
              </div>
              {chat.messages ? (
                <div className="users__has-message">
                  {chat.message > 1000
                    ? `${Math.round(chat.message / 1000)}k`
                    : chat.message}
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
