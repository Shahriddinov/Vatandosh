import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Header from "../../component/Layout/Header/Header";
import ImageModal from "../Mediateka/components/imageModal/ImageModal";
import ImagesList from "../Mediateka/components/imageList/ImagesList";
import Spinner from "../../component/Spinner/Spinner";
import { getMediaPagination } from "../../reduxToolkit/mediatekaSlice/extraReducer";
import { mediaPagination, slideMove } from "../Mediateka/extraFunc";
import { Paginator } from "../../component/Pagination/Pagination";
import { useHashtagFetching } from "./hooks/useHashtagFetching";

import "./hashtag.scss";
import { showMediaModal } from "../Mediateka/extraFunc";

const Hashtag = () => {
  const dispatch = useDispatch();
  const [showImageModal, setShowImageModal] = useState(false);
  const [activeImage, setActiveImage] = useState("");
  const [activePage, setActivePage] = useState(1);

  const { mediaData, dataLoading, lan } = useHashtagFetching();

  const typeUrl = "images";
  const paginationCount = mediaPagination(typeUrl, mediaData);

  if (showImageModal) {
    document.querySelector("body").style.height = "100vh";
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.height = "initial";
    document.querySelector("body").style.overflow = "auto";
  }

  if (dataLoading) {
    return <Spinner position="full" />;
  }

  const moveSlide = (value) => {
    slideMove({
      mediaData,
      setActiveImage,
      activeImage,
      value,
    });
  };

  const handleImageModal = (imgUrl) => {
    setShowImageModal(true);
    setActiveImage(imgUrl);
    showMediaModal({ mediaData, imgUrl });
  };

  const fetchingData = (page) => {
    setActivePage(page);
    dispatch(getMediaPagination({ typeUrl, page, categoryId: 0 }));
  };

  return (
    <div className="hashtag">
      <Header />
      <div className="container">
        <div className="hashtag__top">
          <h2>#Vatandoshimiz bilan bir kun</h2>
          <div className="hashtag__btns">
            <div className="hashtag__video-btn">
              <button className={typeUrl === "images" ? "active-btn" : ""}>
                Eng mashhurlar
              </button>
            </div>
            <div className="hashtag__image-btn">
              <button>Eng so'ngi</button>
            </div>
            <div className="hashtag__image-btn">
              <button>Eng ko'p ko'rilgan</button>
            </div>
          </div>
        </div>
        <div className="hashtag__body">
          <ImageModal
            activeImage={activeImage}
            setShowImageModal={setShowImageModal}
            showImageModal={showImageModal}
            moveSlide={moveSlide}
          />
          <ImagesList
            activeCard="images"
            categoryId={0}
            handleImageModal={handleImageModal}
            dataImage={mediaData[0].data}
          />
        </div>
        {paginationCount >= 2 ? (
          <Paginator
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
