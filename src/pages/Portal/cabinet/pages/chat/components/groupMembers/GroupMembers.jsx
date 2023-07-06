import React, { useContext } from "react";
import { useDispatch } from "react-redux";

import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";

import "./groupMembers.scss";
import { ChooseMember } from "../../Chat";
import { checkUser } from "../../../../../../../reduxToolkit/chatSlice/extraReducer";
import { useTranslation } from "react-i18next";

const GroupMembers = ({
  members,
  showMembers,
  setShowMembers,
  setActiveUser,
  setActiveGroup,
  setShowGroupMessages,
}) => {
  const dispatch = useDispatch();
  const { setActiveChat } = useContext(ChooseMember);
  const user = JSON.parse(localStorage.getItem("user"));
  const { t } = useTranslation();

  const handleClick = (user) => {
    setActiveChat("private");
    setActiveUser(user.id);
    setShowMembers(false);
    setActiveGroup(null);
    setShowGroupMessages(false);
    dispatch(checkUser(user.id));
  };

  const date = new Date();
  const milliseconds = date.getTime();

  return (
    <div className={`group-members ${showMembers ? "show" : ""}`}>
      <div className="group-members__container">
        {members ? (
          members.map((member) => {
            const new_date = new Date(member.last_online_at);

            const time_interval = Math.floor(
              Math.abs(milliseconds - new_date.getTime()) / 60000
            );

            let profileImg;
            if (member.avatar) {
              profileImg = (
                <img src={`${PORTAL_IMAGE_URL}${member.avatar}`} alt="member" />
              );
            } else {
              const names = member.name.split(" ");
              profileImg = names[0][0] + names[1][0];
            }

            return (
              <div
                key={member.id}
                className={`group-members__one-member ${
                  user?.user_id?.id === member.id ? "yourself" : ""
                }`}
                onClick={() => handleClick(member)}
              >
                <div className="group-members__picture">
                  {profileImg}
                  {member.last_online_at ? null : (
                    <span className="group-members__online"></span>
                  )}
                </div>
                <div className="group-members__member-information">
                  <h4>{member.name}</h4>
                  {time_interval > 3 ? (
                    <p>
                      Last seen{" "}
                      {member.last_online_at.split(" ")[1].split(":")[0] +
                        ":" +
                        member.last_online_at.split(" ")[1].split(":")[1]}
                    </p>
                  ) : (
                    <p>{t("Cabinet.user_online")}</p>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p className="group-members__no-member">{t("memberyet")}</p>
        )}
      </div>
    </div>
  );
};

export default GroupMembers;
