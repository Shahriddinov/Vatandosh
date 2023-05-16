import React from "react";

import { users } from "./users";

import "./privateChats.scss";

const PrivateChats = ({
  setUserData,
  setShowMessages,
  setActiveUser,
  activeUser,
  setShowDocs,
  setShowLinks,
}) => {
  const handleClick = (user, profileImg) => {
    setActiveUser(user.id);
    setUserData({ user, profileImg });
    setShowMessages(true);
    setShowDocs(false);
    setShowLinks(false);
  };

  return (
    <div className="users">
      {users.map((user) => {
        let profileImg;
        if (user.img) {
          profileImg = <img src={user.img} alt="user" />;
        } else {
          const names = user.name.split(" ");
          profileImg = names[0][0] + names[1][0];
        }

        return (
          <div
            key={user.id}
            className={`users__one-user ${
              user.id === activeUser ? "active" : ""
            }`}
            onClick={() => handleClick(user, profileImg)}
          >
            <div className="users__user-image">
              {profileImg}
              {user.online ? <span className="users__online"></span> : null}
            </div>
            <div className="users__user-information">
              <h4>{user.name}</h4>
              {user.online ? (
                <p>Online</p>
              ) : (
                <p>Last seen {user.last_online}</p>
              )}
            </div>
            {user.message ? (
              <div className="users__has-message">
                {user.message > 1000
                  ? `${Math.round(user.message / 1000)}k`
                  : user.message}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default PrivateChats;
