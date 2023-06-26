import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllChats } from "../../../../../../../reduxToolkit/chatSlice/extraReducer";

import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";
import { getMessages } from "../../../../../../../reduxToolkit/chatSlice/extraReducer";

import "./groupsChats.scss";
import { useTranslation } from "react-i18next";

const GroupsChats = ({
  setGroupData,
  setShowGroupMessages,
  setActiveGroup,
  activeGroup,
  setShowDocs,
  setShowLinks,
  setShowMembers,
  activePage,
  data,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [chatRoomId, setChatRoomId] = useState(null);
  const leaveGroup = useSelector((state) => state.chatSlice.leaveData);

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

  useEffect(() => {
    if (leaveGroup === "success") {
      dispatch(getAllChats());
    }
  }, [leaveGroup]);

  console.log(data);

  return (
    <div className="groups">
      {data?.length === 0 ? (
        <p className="groups__no-group">{t("groupNone")}</p>
      ) : (
        data?.map((group) => {
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
                    {group.users_count} {t("Cabinet.member")},{" "}
                    {group.online_count} {t("Cabinet.online")}
                  </p>
                ) : (
                  <p>
                    {group.users_count} {t("Cabinet.member")}
                  </p>
                )}
              </div>
              {group.unread > 0 ? (
                <div className="groups__has-message">
                  {group.unread > 1000
                    ? `${Math.round(group.unread / 1000)}k`
                    : group.unread}
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
