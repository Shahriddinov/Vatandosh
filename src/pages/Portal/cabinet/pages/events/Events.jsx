import "./events.scss";
import eventImg from "../../../../../assets/images/portal/cabinetVolunteer/event.png";
import calImg from "../../../../../assets/images/portal/cabinetVolunteer/calendar.svg";
import { motion } from "framer-motion";
import { useEventsFetching } from "./hooks/useEventsFetching";
import { Spinner } from "../../../../../component";
import { EventsList } from "./components";

const fakeData = [
  {
    id: 1,
    img: eventImg,
    data: "12.02.2023",
    header: "Tabiiy-ilmiy savodxonlik yo'nalishi bo'yicha onlayn vebinar",
    body: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    timer: [8, 12, 45],
  },
  {
    id: 2,
    img: eventImg,
    data: "12.02.2023",
    header: "Tabiiy-ilmiy savodxonlik yo'nalishi bo'yicha onlayn vebinar",
    body: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    timer: [5, 10, 12],
  },
  {
    id: 3,
    img: eventImg,
    data: "12.02.2023",
    header: "Tabiiy-ilmiy savodxonlik yo'nalishi bo'yicha onlayn vebinar",
    body: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    timer: [12, 7, 58],
  },
  {
    id: 4,
    img: eventImg,
    data: "12.02.2023",
    header: "Tabiiy-ilmiy savodxonlik yo'nalishi bo'yicha onlayn vebinar",
    body: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    timer: [8, 12, 45],
  },
];

const Events = () => {
  const { meetingsLoading, meetingError, meetingsData } = useEventsFetching();

  if (meetingsLoading) {
    return <Spinner />;
  } else if (meetingError) {
    return <p>{meetingError}</p>;
  }

  return (
    <div className="container-events">
      <div className="container-events-inner">
        <h1>Мероприятия</h1>
        <EventsList meetingsData={meetingsData} />
      </div>
    </div>
  );
};

export default Events;
