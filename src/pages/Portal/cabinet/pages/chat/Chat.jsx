import React, { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./chat.scss";

import PrivateChats from "./components/privateChats/PrivateChats";
import PrivateMessages from "./components/privateMessages/PrivateMessages";
import GroupsChats from "./components/groupsChats/GroupsChats";
import GroupsMessages from "./components/groupsMessages/GroupsMessages";
import { useContext } from "react";
import { MessagesContext } from "../../../../../App";
import { useTranslation } from "react-i18next";

export const ChooseMember = createContext();

const Chat = () => {
  const { t } = useTranslation();
  const [activeChat, setActiveChat] = useState("private");
  const [userData, setUserData] = useState(null);
  const [showMessages, setShowMessages] = useState(false);
  const [activeUser, setActiveUser] = useState(null);
  const [activeGroup, setActiveGroup] = useState(null);
  const [showGroupMessages, setShowGroupMessages] = useState(false);
  const [groupData, setGroupData] = useState(null);
  const [showDocs, setShowDocs] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [showMembers, setShowMembers] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [privateChatRoomId, setPrivateChatId] = useState(null);
  const [chooseMember, setChooseMember] = useState(null);
  const [data, setData] = useState(null);

  const messagesData = useSelector((state) => state.chatSlice.messagesData);
  const allChatsData = useSelector((state) => state.chatSlice.allChatsData);
  const { setMessages } = useContext(MessagesContext);

  useEffect(() => {
    if (messagesData) {
      setMessages([...messagesData.messages.data]);
    }
  }, [messagesData]);

  useEffect(() => {
    const newData = allChatsData?.chats?.filter((el) => el.type === activeChat);
    setData(newData);
  }, [allChatsData]);

  return (
    <ChooseMember.Provider
      value={{ chooseMember, setChooseMember, setActiveChat }}>
      <div className="chat">
        <div className="chat__container">
          <div className="chat__left">
            <div className="chat__buttons">
              <button
                className={`chat__chats ${
                  activeChat === "private" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveChat("private");
                  setShowGroupMessages(false);
                  setActiveGroup(null);
                }}>
                {t("chat")}
              </button>
              <button
                className={`chat__groups ${
                  activeChat === "group" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveChat("group");
                  setShowMessages(false);
                  setActiveUser(null);
                }}>
                {t("group")}
              </button>
            </div>
            {activeChat === "private" ? (
              <PrivateChats
                setUserData={setUserData}
                setShowMessages={setShowMessages}
                setActiveUser={setActiveUser}
                activeUser={activeUser}
                setShowDocs={setShowDocs}
                setShowLinks={setShowLinks}
                activePage={activePage}
                activeChat={activeChat}
                data={data}
                setPrivateChatId={setPrivateChatId}
              />
            ) : (
              <GroupsChats
                setGroupData={setGroupData}
                setActiveGroup={setActiveGroup}
                setShowGroupMessages={setShowGroupMessages}
                activeGroup={activeGroup}
                setShowDocs={setShowDocs}
                setShowLinks={setShowLinks}
                setShowMembers={setShowMembers}
                activePage={activePage}
                activeChat={activeChat}
                data={data}
                setData={setData}
                activeUser={activeUser}
              />
            )}
          </div>
          {activeChat === "private" ? (
            <PrivateMessages
              userData={userData}
              showMessages={showMessages}
              activeUser={activeUser}
              activePage={activePage}
              setShowDocs={setShowDocs}
              showDocs={showDocs}
              setShowLinks={setShowLinks}
              showLinks={showLinks}
              data={data}
              privateChatRoomId={privateChatRoomId}
              setActiveChat={setActiveChat}
              setShowGroupMessages={setShowGroupMessages}
              setActiveGroup={setActiveGroup}
              setShowMessages={setShowMessages}
              setActiveUser={setActiveUser}
            />
          ) : (
            <GroupsMessages
              groupData={groupData}
              showGroupMessages={showGroupMessages}
              setShowGroupMessages={setShowGroupMessages}
              activeGroup={activeGroup}
              setShowDocs={setShowDocs}
              showDocs={showDocs}
              setShowLinks={setShowLinks}
              showLinks={showLinks}
              setShowMembers={setShowMembers}
              showMembers={showMembers}
              setActivePage={setActivePage}
              activePage={activePage}
              data={data}
              setData={setData}
              setActiveUser={setActiveUser}
              setActiveGroup={setActiveGroup}
              setActiveChat={setActiveChat}
              setShowMessages={setShowMessages}
              activeUser={activeUser}
            />
          )}
        </div>
      </div>
    </ChooseMember.Provider>
  );
};

export default Chat;
