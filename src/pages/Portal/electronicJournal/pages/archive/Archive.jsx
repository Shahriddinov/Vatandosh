import React from "react";

import "./archive.scss";
import { JournalAboutHero } from "../electronicJournalAbout/components";
import { ArchiveIntro } from "./components";

const Archive = () => {
  return (
    <main className="electron-archive">
      <JournalAboutHero
        title="АРХИВ"
        desc="В этом разделе вы можете ознакомиться с предыдущими номерами наших журналов."
      />

      <ArchiveIntro />
    </main>
  );
};

export default Archive;

//archiveData
