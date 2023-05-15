import React, { useState } from "react";

import "./chat.scss";

import PrivateChats from "./components/privateChats/PrivateChats";
import PrivateMessages from "./components/privateMessages/PrivateMessages";
import GroupsChats from "./components/groupsChats/GroupsChats";
import GroupsMessages from "./components/groupsMessages/GroupsMessages";

const Chat = () => {
  const [activeChat, setActiveChat] = useState("private");
  const [userData, setUserData] = useState(null);
  const [showMessages, setShowMessages] = useState(false);
  const [activeUser, setActiveUser] = useState(null);
  const [activeGroup, setActiveGroup] = useState(null);
  const [showGroupMessages, setShowGroupMessages] = useState(false);
  const [groupData, setGroupData] = useState(null);
  const [showDocs, setShowDocs] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="chat">
      <div className="chat__container">
        <div className="chat__left">
          <div className="chat__buttons">
            <button
              className={`chat__chats ${
                activeChat === "private" ? "active" : ""
              }`}
              onClick={() => setActiveChat("private")}
            >
              Чаты
            </button>
            <button
              className={`chat__groups ${
                activeChat === "group" ? "active" : ""
              }`}
              onClick={() => setActiveChat("group")}
            >
              Группы
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
            />
          ) : (
            <GroupsChats
              setGroupData={setGroupData}
              setActiveGroup={setActiveGroup}
              setShowGroupMessages={setShowGroupMessages}
              activeGroup={activeGroup}
              setShowDocs={setShowDocs}
              setShowLinks={setShowLinks}
            />
          )}
        </div>
        {activeChat === "private" ? (
          <PrivateMessages
            userData={userData}
            showMessages={showMessages}
            activeUser={activeUser}
            setShowDocs={setShowDocs}
            showDocs={showDocs}
            setShowLinks={setShowLinks}
            showLinks={showLinks}
          />
        ) : (
          <GroupsMessages
            groupData={groupData}
            showGroupMessages={showGroupMessages}
            activeGroup={activeGroup}
            setShowDocs={setShowDocs}
            showDocs={showDocs}
            setShowLinks={setShowLinks}
            showLinks={showLinks}
          />
        )}
      </div>
    </div>
  );
};

export default Chat;
