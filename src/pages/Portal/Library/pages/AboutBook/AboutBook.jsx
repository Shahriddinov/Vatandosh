import React from "react";
import "./aboutBook.scss";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import FullStar from "../../../../../assets/images/library/fullStar.svg";
import EmptyStar from "../../../../../assets/images/library/emptyStar.svg";
import { Button } from "@mui/material";

import Book1 from "../../../../../assets/images/library/ken.png";
import Book2 from "../../../../../assets/images/library/agata.png";
import Book3 from "../../../../../assets/images/library/jeyn.png";
import Book4 from "../../../../../assets/images/library/paulo.png";
import BookCard from "../../components/BookCard/BookCard";
import { useParams } from "react-router-dom";
import { useEbookFetching } from "../../hooks/ebookFetching";
import { Spinner } from "../../../../../component";
import { useLibraryFetching } from "../../hooks/libraryFetching";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";

const AboutBook = () => {

  const lng = useSelector((state) => state.language.language);
  const { t } = useTranslation();
  const { id } = useParams();

  const { ebookData, ebookLoading } = useEbookFetching(id);
  const { libraryData, libraryLoading } = useLibraryFetching(4);

  const handleButtonClick = () => {
    const url = PORTAL_IMAGE_URL + pdfFile[0].download_link;
    window.open(url, "_blank");
  };

  const ratingCount = 421;

  const fullStars = Math.floor(ebookData.stars / 2);
  const emptyStars = 5 - fullStars;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<img src={FullStar} alt="" key={i} />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<img src={EmptyStar} alt="" key={i + 5} />);
  }

  if (ebookLoading) {
    return <Spinner />;
  }
  const pdfFile = JSON.parse(ebookData.book_file);

  return (
    <div className="about__book">
      <div className="container about__book__wrapper">
        <div className="book">
          <div className="about__book__cover">
            <img src={`${PORTAL_IMAGE_URL}${ebookData.image}`} alt="" />
          </div>
          <div className="book__description">
            <h1>{ebookData.title}</h1>
            <div className="book__rating">
              <p>{ebookData.stars}</p>
              {stars}
              <span>({ratingCount})</span>
            </div>
            <h3>
              {t("library.author")}: <span>{ebookData.author}</span>
            </h3>
            <h3>
              {t("library.language")}: <span>{ebookData.language}</span>
            </h3>
            <Button
              onClick={handleButtonClick}
              variant="contained"
              size="large"
              sx={{
                width: "max-content",
                padding: "12px 22px",
                margin: "8px 0",
                boxShadow: 0,
                borderRadius: "12px",
                background: "#065EA9",
                textTransform: "none",
                fontFamily: "Inter",
                fontSize: "14px",
                lineHeight: "24px",
                fontWeight: 400,
              }}
            >
              {t("library.read_online")}
            </Button>
            <h3>{t("library.about")}</h3>
            <p className="description__text">{ebookData.text}</p>
            <span className="description__more">{t("library.read_more")}</span>
          </div>
        </div>
        <div className="book__details">
          <h2>{t("library.about_the_book")}</h2>
          <div className="horizontal__line" />
          <div className="details__row">
            <ul>
              <li>
                {t("library.for_ages")}:{" "}
                <span>{ebookData.ages} years or older</span>
              </li>
              <li>
                {t("library.format")}: <span>{ebookData.format}</span>
              </li>
              <li>
                {t("library.published_date")}:{" "}
                <span>
                  {new Date(ebookData.publication).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </li>
              <li>
                {t("library.language")}: <span>{ebookData.language}</span>
              </li>
            </ul>
            <ul>
              <li>
                Pages: <span>{ebookData.pages}</span>
              </li>
              <li>
                STIR: <span>{ebookData.stir}</span>
              </li>
              <li>
                Uploaded date:{" "}
                <span>
                  {new Date(ebookData.created_at).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </li>
              <li>
                Genre: <span>{ebookData.type}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="recommended__books">
          <h1>{t("library.suggestions")}</h1>
          <div className="books__row">
            {libraryData.data?.map((book) => (
              <BookCard {...book} key={book.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBook;
