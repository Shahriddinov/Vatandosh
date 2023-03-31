import Card from "../../../../component/card/Card";

import "./introSection.scss";
import { useSelector } from "react-redux";
import { Paginator } from "../../../../component/Pagination/Pagination";
import { useSinglePaginationData } from "../../hooks/useSinglePaginationData";
import { getPaginationCount } from "../../extraFunck";

const IntroSection = ({ data }) => {
  const {
    paginationLoading,
    paginationData,
    paginationFetching,
    type,
    pageUrl,
    page,
  } = useSinglePaginationData();
  const lan = useSelector((state) => state.language.language);

  const paginationCount = getPaginationCount(paginationData, type);

  if (paginationLoading) {
    return null;
  }

  return (
    <div className="single-intro-section">
      <div className="single-intro-section__container container">
        <div className="single-intro-section__inner">
          {
            <h3 className="single-intro-section__title">
              {data[`menu_${lan}`]}
            </h3>
          }

          {paginationData?.total === 0 ? (
            <p>Ma'lumot mavjud emas </p>
          ) : (
            <>
              <ul
                className={`${
                  type === "projects"
                    ? "single-intro-section__project_list"
                    : "single-intro-section__compatriots_list"
                } `}
              >
                {paginationData["0"].data?.map((el) => (
                  <li className="single-intro-section__item" key={el.id}>
                    <Card {...el} pathUrl={pageUrl} />
                  </li>
                ))}
              </ul>
              {paginationCount >= 2 ? (
                <Paginator
                  page={page}
                  paginationFetching={paginationFetching}
                  count={paginationCount}
                />
              ) : null}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
