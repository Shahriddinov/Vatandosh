import React from "react";
import { ArchiveCard } from "../";
import { archiveData } from "../../../../data";

import "./archiveIntro.scss";
import { Pagination } from "../../../../../../../component";

const ArchiveIntro = () => {
  const paginationCount = 10;
  const paginationFetching = (e) => {
    console.log(e);
  };

  return (
    <section className="archive-intro">
      <div className="archive-intro__container container">
        <div className="archive-intro__inner">
          <h3 className="archive-intro__title">В архиве 121 журнал есть</h3>
          <ul className="archive-intro__list">
            {archiveData.map((el) => (
              <ArchiveCard {...el} />
            ))}
          </ul>
          {paginationCount >= 2 ? (
            <Pagination
              page={1}
              paginationFetching={paginationFetching}
              count={paginationCount}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ArchiveIntro;
