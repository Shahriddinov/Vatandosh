import React from "react";

import { groups } from "./groups";

import "./groupsChats.scss";

const GroupsChats = ({
  setGroupData,
  setShowGroupMessages,
  setActiveGroup,
  activeGroup,
  setShowDocs,
  setShowLinks,
}) => {
  const handleClick = (group, groupImg) => {
    setActiveGroup(group.id);
    setGroupData({ group, groupImg });
    setShowGroupMessages(true);
    setShowDocs(false);
    setShowLinks(false);
  };

  return (
    <div className="groups">
      {groups.map((group) => {
        let groupImg;
        if (group.img) {
          groupImg = <img src={group.img} alt="group" />;
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
            <div className="groups__group-image">
              {groupImg}
              {group.online ? <span className="groups__online"></span> : null}
            </div>
            <div className="groups__group-information">
              <h4>{group.name}</h4>
              {group.online_users ? (
                <p>
                  {group.all_users} ta a'zo, {group.online_users} ta online
                </p>
              ) : (
                <p>{group.all_users} ta a'zo</p>
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
