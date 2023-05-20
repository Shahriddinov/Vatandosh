import React from "react";

import "./electronicJournalHome.scss";
import {
  JournalHomeHero,
  LearnMagazines,
  PopularJournalSlider,
} from "./components";

const ElectronicJournalHome = () => {
  return (
    <main className="electronic-journal-home">
      <JournalHomeHero />
      <PopularJournalSlider />
      <LearnMagazines />
    </main>
  );
};

export default ElectronicJournalHome;
