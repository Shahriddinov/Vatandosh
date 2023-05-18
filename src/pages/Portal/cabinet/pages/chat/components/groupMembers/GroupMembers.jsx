import React from "react";

import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";

import "./groupMembers.scss";

const GroupMembers = ({ members, showMembers }) => {
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
              <div key={member.id} className="group-members__one-member">
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
