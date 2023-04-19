import React from "react";
import { Outlet } from "react-router-dom";
import OnlineTeachingFooter from "../OnlineTeaching/components/OnlineTeachingFooter/OnlineTeachingFooter";
import { Header } from "./components";

import "./electronikJournalLayout.scss";

const ElectronicJournalLayout = () => {
  const navData = [
    {
      id: 1,
      url: "/portal-category/electronic-journal",
      label: "ГЛАВНАЯ СТРАНИЦА",
    },
    {
      id: 2,
      url: "/portal-category/electronic-journal/about",
      label: "О ЖУРНАЛЕ",
    },
    {
      id: 3,
      url: "/portal-category/electronic-journal/new-number",
      label: "НОВЫЙ НОМЕР",
    },
    {
      id: 4,
      url: "/portal-category/electronic-journal/archive",
      label: "АРХИВ",
    },
    {
      id: 5,
      url: "/portal-category/electronic-journal/contact",
      label: "КОНТАКТЫ",
    },
  ];

  const navbarUrl = {
    home: "/portal",
    register: "/portal-category/electronic-journal",
  };

  return (
    <div className="electronic-journal">
      <Header navData={navData} navbarUrl={navbarUrl} />
      <Outlet />
      <OnlineTeachingFooter />
    </div>
  );
};

export default ElectronicJournalLayout;
