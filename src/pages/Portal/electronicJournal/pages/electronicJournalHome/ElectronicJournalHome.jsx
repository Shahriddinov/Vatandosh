import React from "react";

import "./electronicJournalHome.scss";
import {
  JournalHomeHero,
  LearnMagazines,
  PopularJournalSlider,
} from "./components";
import { useElectronicJournalHome } from "./hooks/UseElectronicJournalHome";
import { Spinner } from "../../../../../component";

const ElectronicJournalHome = () => {
  const {
    error,
    tipsLoading,
    tips,
    lastMagazine,
    allMagazinePopularLoading,
    allMagazinePopular,
  } = useElectronicJournalHome();

  if (allMagazinePopularLoading || tipsLoading) {
    return <Spinner position="full" />;
  } else if (error) {
    return <p>{error}</p>;
  }
  return (
    <main className="electronic-journal-home">
      <JournalHomeHero allMagazine={lastMagazine} />
      <PopularJournalSlider allMagazinePopular={allMagazinePopular} />
      <LearnMagazines tips={tips} />
    </main>
  );
};

export default ElectronicJournalHome;
