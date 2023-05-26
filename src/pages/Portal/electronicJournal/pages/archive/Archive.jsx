import React from "react";

import "./archive.scss";
import { JournalAboutHero } from "../electronicJournalAbout/components";
import { ArchiveIntro } from "./components";
import { useState } from "react";
import { magazineGetAll } from "../../../../../reduxToolkit/portalSlices/electronicJournalSlice/electronicJournalExtraReducers";
import { useArchiveFetching } from "./hooks/useArchiveFetching";
import { Spinner } from "../../../../../component";

const Archive = () => {
  const { error, allMagazineLoading, allMagazine, pageMenu, dispatch } =
    useArchiveFetching();
  const [activePage, setActivePage] = useState(1);

  const paginationFetching = (count) => {
    setActivePage(count);
    dispatch(magazineGetAll({ paginate: 5, page: activePage }));
  };

  if (allMagazineLoading) {
    return <Spinner position="full" />;
  } else if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="electron-archive">
      <JournalAboutHero pageMenu={pageMenu} />

      <ArchiveIntro
        activePage={activePage}
        paginationFetching={paginationFetching}
        allMagazine={allMagazine}
      />
    </main>
  );
};

export default Archive;

//archiveData
