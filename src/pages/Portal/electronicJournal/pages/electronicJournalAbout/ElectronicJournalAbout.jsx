import React from "react";
import "./electronicJournalHome.scss";
import { JournalAboutContent, JournalAboutHero } from "./components";
const ElectronicJournalAbout = () => {
  return (
    <main className="electronic-journal-about">
      <JournalAboutHero
        title="О ЖУРНАЛЕ"
        desc="В этом разделе вы можете узнать о журналах."
      />
      <JournalAboutContent />
    </main>
  );
};

export default ElectronicJournalAbout;
