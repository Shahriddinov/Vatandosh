import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllChats } from "../../../../../../../reduxToolkit/chatSlice/extraReducer";
import Spinner from "../../../../../../../component/Spinner";

import { groups } from "./groups";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";
import { getMessages } from "../../../../../../../reduxToolkit/chatSlice/extraReducer";

import "./groupsChats.scss";
import { MessagesContext } from "../../../../../../../App";

const GroupsChats = ({
  setGroupData,
  setShowGroupMessages,
  setActiveGroup,
  activeGroup,
  setShowDocs,
  setShowLinks,
  setShowMembers,
  activePage,
}) => {
  const dispatch = useDispatch();
  const [chatRoomId, setChatRoomId] = useState(null);

  const allChatLoading = useSelector((state) => state.chatSlice.allChatLoading);
  const allChatsData = useSelector((state) => state.chatSlice.allChatsData);
  const sendMessageStatus = useSelector(
    (state) => state.chatSlice.sendMessageStatus
  );

  const handleClick = (group, groupImg) => {
    setActiveGroup(group.id);
    setChatRoomId(group.id);
    setGroupData({ group, groupImg });
    setShowGroupMessages(true);
    setShowDocs(false);
    setShowLinks(false);
    setShowMembers(false);

    dispatch(
      getMessages({
        chat_id: group.id,
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

  // if (allChatLoading) {
  //   return <Spinner position="full" />;
  // }

  return (
    <div className="groups">
      {allChatsData?.chats.length === 0 ? (
        <p className="groups__no-group">You have not joined any group yet.</p>
      ) : (
        allChatsData?.chats.map((group) => {
          let groupImg;
          if (group.avatar_image) {
            groupImg = (
              <img
                src={`${PORTAL_IMAGE_URL}${group.avatar_image}`}
                alt="group"
              />
            );
          } else {
            const names = group.name.split(" ");
            groupImg = names[0][0] + names[1][0];
          }

          return group.type === "group" ? (
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
          ) : null;
        })
      )}
    </div>
  );
};

export default GroupsChats;
