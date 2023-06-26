import "./events.scss";
import { useEventsFetching } from "./hooks/useEventsFetching";
import { Spinner } from "../../../../../component";
import { EventsList } from "./components";
import { useTranslation } from "react-i18next";

const Events = () => {
  const { t } = useTranslation();
  const { meetingsLoading, meetingError, meetingsData } = useEventsFetching();

  if (meetingsLoading) {
    return <Spinner />;
  } else if (meetingError) {
    return <p>{meetingError}</p>;
  }

  return (
    <div className="container-events">
      <div className="container-events-inner">
        <h1>{t("events")}</h1>
        <EventsList meetingsData={meetingsData} />
      </div>
    </div>
  );
};

export default Events;
