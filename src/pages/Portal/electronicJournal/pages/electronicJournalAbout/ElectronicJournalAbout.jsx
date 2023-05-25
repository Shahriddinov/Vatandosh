import React from "react";
import "./electronicJournalAbout.scss";
import { JournalAboutContent, JournalAboutHero } from "./components";
import { useElectronicJournalAbout } from "./hooks/useElectronicJournalAbout";
import { Spinner } from "../../../../../component";
const ElectronicJournalAbout = () => {
  const { lan, error, oneMagazineLoading, oneMagazine, pageMenu } =
    useElectronicJournalAbout();

  if (oneMagazineLoading) {
    return <Spinner position="full" />;
  } else if (error) {
    return <p>{error}</p>;
  }
  return (
    <main className="electronic-journal-about">
      <JournalAboutHero pageMenu={pageMenu} />
      <JournalAboutContent oneMagazine={oneMagazine} />
    </main>
  );
};

export default ElectronicJournalAbout;
