import React from "react";
import EventsCard from "../eventsCard/EventsCard";

import "./eventsList.scss";
const EventsList = ({ meetingsData }) => {
  return (
    <div className="cabinet-events-list">
      {meetingsData?.map((el) => (
        <EventsCard key={el.id} webinar={el} />
      ))}
    </div>
  );
};

export default EventsList;
