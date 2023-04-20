import React from "react";

import "./journalCard.scss";

const JournalCard = ({ image, name, date }) => {
  return (
    <div className="journal-card">
      <div className="journal-card__img">
        <img src={image} alt="" className="img" />
      </div>
      <div className="journal-card__body">
        <p className="journal-card__date">{date}</p>

        <h4 className="journal-card__title">{name}</h4>
      </div>
    </div>
  );
};

export default JournalCard;
