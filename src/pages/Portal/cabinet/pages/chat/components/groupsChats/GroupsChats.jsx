import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllChats } from "../../../../../../../reduxToolkit/chatSlice/extraReducer";
import Spinner from "../../../../../../../component/Spinner";

import { groups } from "./groups";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";
import { getMessages } from "../../../../../../../reduxToolkit/chatSlice/extraReducer";

import "./groupsChats.scss";

const GroupsChats = ({
  setGroupData,
  setShowGroupMessages,
  setActiveGroup,
  activeGroup,
  setShowDocs,
  setShowLinks,
  setShowMembers,
}) => {
  const dispatch = useDispatch();
  const [activePage, setActivePage] = useState(1);
  const [chatRoomId, setChatRoomId] = useState(null);

  const allChatLoading = useSelector((state) => state.chatSlice.allChatLoading);
  const allChatsData = useSelector((state) => state.chatSlice.allChatsData);
  const sendMessageStatus = useSelector(
    (state) => state.chatSlice.sendMessageStatus
  );

  const handleClick = (group, groupImg) => {
    setActiveGroup(group.id);
    setChatRoomId(group.chat_room_id);
    setGroupData({ group, groupImg });
    setShowGroupMessages(true);
    setShowDocs(false);
    setShowLinks(false);
    setShowMembers(false);

    dispatch(
      getMessages({
        chat_id: group.chat_room_id,
        per_page: 50,
        chat_type: 1,
        page: activePage,
      })
    );
  };

  useEffect(() => {
    if (sendMessageStatus === "success") {
      dispatch(
        getMessages({
          chat_id: chatRoomId,
          per_page: 50,
          chat_type: 1,
          page: activePage,
        })
      );
    }
  }, [sendMessageStatus, chatRoomId]);

  useEffect(() => {
    dispatch(getAllChats());
  }, []);

  if (allChatLoading) {
    return <Spinner position="full" />;
  }

  return (
    <div className="groups">
      {allChatsData?.chats.map((group) => {
        let groupImg;
        if (group.avatar_image) {
          groupImg = (
            <img src={`${PORTAL_IMAGE_URL}${group.avatar_image}`} alt="group" />
          );
        } else {
          const names = group.name.split(" ");
          groupImg = names[0][0] + names[1][0];
        }

        return (
          <div
            key={group.id}
            className={`groups__one-group ${
              group.id === activeGroup ? "active" : ""
            }`}
            onClick={() => handleClick(group, groupImg)}
          >
            <div className="groups__group-image">{groupImg}</div>
            <div className="groups__group-information">
              <h4>{group.name}</h4>
              {group.online_count > 0 ? (
                <p>
                  {group.users_count} ta a'zo, {group.online_count} ta online
                </p>
              ) : (
                <p>{group.users_count} ta a'zo</p>
              )}
            </div>
            {group.messages ? (
              <div className="groups__has-message">
                {group.messages > 1000
                  ? `${Math.round(group.messages / 1000)}k`
                  : group.messages}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default GroupsChats;
