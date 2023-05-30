import React, { useContext } from "react";
import { useDispatch } from "react-redux";

import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";

import "./groupMembers.scss";
import { ChooseMember } from "../../Chat";
import { checkUser } from "../../../../../../../reduxToolkit/chatSlice/extraReducer";

const GroupMembers = ({
  members,
  showMembers,
  setData,
  setActiveUser,
  data,
}) => {
  const dispatch = useDispatch();
  const { setActiveChat } = useContext(ChooseMember);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleClick = (user) => {
    setActiveChat("private");
    setActiveUser(user.id);
    dispatch(checkUser(user.id));
  };
  console.log(data);

  return (
    <div className={`group-members ${showMembers ? "show" : ""}`}>
      <div className="group-members__container">
        {members ? (
          members.map((member) => {
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
                  {member.last_online_at ? (
                    <p>Last seen {member.last_online_at}</p>
                  ) : (
                    <p>Online</p>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p className="group-members__no-member">No any member yet.</p>
        )}
      </div>
    </div>
  );
};

export default GroupMembers;
