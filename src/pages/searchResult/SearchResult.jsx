import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getSearchResults } from "../../reduxToolkit/searchSlice/extraReducer";

import "./searchResult.scss";
import { Card, Pagination, Spinner } from "../../component";
import Header from "../../component/Layout/Header/Header";

const SearchResult = () => {
  const dispatch = useDispatch();
  const { search } = useParams();
  const searchData = useSelector((state) => state.searchSlice.searchData);
  const loading = useSelector((state) => state.searchSlice.searchLoading);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    dispatch(getSearchResults({ search, page: activePage }));
  }, [activePage]);

  if (loading) {
    return <Spinner position="full" />;
  }

  const data = searchData.data;

  const totalNumber = searchData.total;

  const paginationCount = Math.ceil(totalNumber / 12);

  const fetchingData = (page) => {
    setActivePage(page);
  };

  return (
    <>
      <Header />
      <div className="search">
        <div className="container">
          <h2 className="search__search-text">
            Qidirish natijasi:{" "}
            {data.length ? (
              <i>{search}</i>
            ) : (
              <span>
                <i>{search}</i> so'ziga oid ma'lumot topilmadi!
              </span>
            )}
          </h2>
          <div className="search__body">
            {data.length
              ? data?.map((search, index) => (
                  <Card
                    key={index}
                    {...search}
                    pathUrl={`${search.image.split("/")[0]}`}
                  />
                ))
              : null}
          </div>
          {paginationCount >= 2 ? (
            <Pagination
              count={paginationCount}
              page={activePage}
              paginationFetching={fetchingData}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default SearchResult;
