import React from "react";
import { ArchiveCard } from "../";

import "./archiveIntro.scss";
import { Pagination } from "../../../../../../../component";
import { paginationCount } from "../../../../../../../helpers/extraFunction";

const ArchiveIntro = ({ allMagazine, activePage, paginationFetching }) => {
  const totalPaginate = paginationCount(allMagazine?.total, 5);
  return (
    <section className="archive-intro">
      <div className="archive-intro__container container">
        <div className="archive-intro__inner">
          <h3 className="archive-intro__title">
            В архиве {allMagazine?.total} журнал есть
          </h3>
          <ul className="archive-intro__list">
            {allMagazine?.data?.map((el) => (
              <ArchiveCard key={el.id} {...el} />
            ))}
          </ul>
          {totalPaginate > 1 ? (
            <Pagination
              page={activePage}
              paginationFetching={paginationFetching}
              count={totalPaginate}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ArchiveIntro;
