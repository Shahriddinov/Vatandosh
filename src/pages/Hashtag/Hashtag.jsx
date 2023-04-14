import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { baseServerUrl } from "../../services/api/utils";
import Header from "../../component/Layout/Header/Header";
import Spinner from "../../component/Spinner/Spinner";

import "./hashtag.scss";
import { getTagSearch } from "../../reduxToolkit/tagSearchSlice/extraReducer";
import { Pagination } from "../../component";

const Hashtag = () => {
  const dispatch = useDispatch();
  const [activePage, setActivePage] = useState(1);

  const tagData = useSelector((state) => state.tagSearchSlice.tagData);
  const tagLoading = useSelector((state) => state.tagSearchSlice.loading);
  const error = useSelector((state) => state.tagSearchSlice.error);
  const { tag } = useParams();

  useEffect(() => {
    dispatch(getTagSearch({ tag, page: activePage }));
  }, []);

  if (tagLoading) {
    return <Spinner position="full" />;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  const paginationCount = Math.ceil(tagData.total / 16);
  const data = tagData.data;

  const fetchingData = (page) => {
    setActivePage(page);
  };

  return (
    <div className="hashtag">
      <Header />
      <div className="container">
        <div className="hashtag__top">
          <h2>#{tag}</h2>
          <div className="hashtag__btns">
            <div className="hashtag__image-btn">
              <button className={true ? "active-btn" : ""}>Eng mashhur</button>
            </div>
            <div className="hashtag__image-btn">
              <button>Eng so‘ngi</button>
            </div>
            <div className="hashtag__image-btn">
              <button>Eng ko‘p ko‘rilgan</button>
            </div>
          </div>
        </div>
        <div className="hashtag__body">
          <div className="hashtag__images">
            {data.map((image, index) => {
              return image.image ? (
                <div
                  key={index}
                  className="hashtag__image-card"
                  onClick={() => {}}
                >
                  <div className="hashtag__image-container">
                    <Link to={`/${image.image.split("/")[0]}/${image.id}`}>
                      <img
                        src={`${baseServerUrl}/${image.image}`}
                        alt="mediatake"
                      />
                    </Link>
                  </div>
                </div>
              ) : null;
            })}
          </div>
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
  );
};

export default Hashtag;
