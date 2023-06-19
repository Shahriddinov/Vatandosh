import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { baseServerUrl } from "../../services/api/utils";
import Header from "../../component/Layout/Header/Header";
import Spinner from "../../component/Spinner/Spinner";

import "./hashtag.scss";
import {
  getLatestTag,
  getPopularTag,
  getTagSearch,
} from "../../reduxToolkit/tagSearchSlice/extraReducer";
import { Pagination } from "../../component";

const Hashtag = () => {
  const dispatch = useDispatch();
  const [activePage, setActivePage] = useState(1);
  const [activeTab, setActiveTab] = useState(1);

  const tagData = useSelector((state) => state.tagSearchSlice.tagData);
  const tagLoading = useSelector((state) => state.tagSearchSlice.loading);
  const latestLoading = useSelector(
    (state) => state.tagSearchSlice.latestLoading
  );
  const latestTags = useSelector((state) => state.tagSearchSlice.latestTags);
  const popularLoading = useSelector(
    (state) => state.tagSearchSlice.popularLoading
  );
  const popularTags = useSelector((state) => state.tagSearchSlice.popularTags);
  const error = useSelector((state) => state.tagSearchSlice.error);
  const { tag } = useParams();

  useEffect(() => {
    dispatch(getTagSearch({ tag, page: activePage }));
    dispatch(getLatestTag(activePage));
    dispatch(getPopularTag(activePage));
  }, [activePage]);

  if (tagLoading || latestLoading || popularLoading) {
    return <Spinner position="full" />;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  let paginationCount;

  if (activeTab === 1) {
    paginationCount = Math.ceil(tagData.total / 16);
  } else if (activeTab === 2) {
    paginationCount = Math.ceil(latestTags.total / 16);
  } else if (activeTab === 3) {
    paginationCount = Math.ceil(popularTags.total / 16);
  }

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
              <button
                className={activeTab === 1 ? "active-btn" : ""}
                onClick={() => {
                  setActiveTab(1);
                  setActivePage(1);
                }}>
                Eng mashhur
              </button>
            </div>
            <div className="hashtag__image-btn">
              <button
                className={activeTab === 2 ? "active-btn" : ""}
                onClick={() => {
                  setActiveTab(2);
                  setActivePage(1);
                }}>
                Eng so‘ngi
              </button>
            </div>
            <div className="hashtag__image-btn">
              <button
                className={activeTab === 3 ? "active-btn" : ""}
                onClick={() => {
                  setActiveTab(3);
                  setActivePage(1);
                }}>
                Eng ko‘p ko‘rilgan
              </button>
            </div>
          </div>
        </div>
        <div className="hashtag__body">
          <div className="hashtag__images">
            <div
              className={`hashtag__regular ${
                activeTab === 1 ? "active-tab" : ""
              }`}>
              {tagData.data.map((image, index) => {
                return image.image ? (
                  <div
                    key={index}
                    className="hashtag__image-card"
                    onClick={() => {}}>
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
            <div
              className={`hashtag__latest ${
                activeTab === 2 ? "active-tab" : ""
              }`}>
              {latestTags.data.map((image, index) => {
                return image.image ? (
                  <div
                    key={index}
                    className="hashtag__image-card"
                    onClick={() => {}}>
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
            <div
              className={`hashtag__popular ${
                activeTab === 3 ? "active-tab" : ""
              }`}>
              {popularTags.data.map((image, index) => {
                return image.image ? (
                  <div
                    key={index}
                    className="hashtag__image-card"
                    onClick={() => {}}>
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
