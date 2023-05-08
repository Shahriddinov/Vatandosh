import React, { useState } from "react";
import "./allBooks.scss";
import Hero from "../../components/Hero/Hero";
import BookCard from "../../components/BookCard/BookCard";

import { CiSearch } from "react-icons/ci";
import { HiOutlineChevronDown } from "react-icons/hi";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

import HeroImage from "../../../../../assets/images/library/libraryHero.png";
import HeroImage1 from "../../../../../assets/images/library/libraryHero1.png";
import HeroImage2 from "../../../../../assets/images/library/libraryHero2.png";
import { FormControl, MenuItem, Select } from "@mui/material";

import Book1 from "../../../../../assets/images/library/ken.png";
import Book2 from "../../../../../assets/images/library/agata.png";
import Book3 from "../../../../../assets/images/library/jeyn.png";
import Book4 from "../../../../../assets/images/library/paulo.png";
import Suggest from "../../components/suggestModal/Suggest";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const AllBooks = () => {
  const lng = useSelector((state) => state.language.language);
  const { t } = useTranslation();

  const [activeSort, setActiveSort] = useState("new");
  const [suggestModal, setSuggestModal] = useState(false);

  const toggleModal = () => {
    setSuggestModal(!suggestModal);
    if (window.innerWidth <= 1000) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const sliderData = [
    {
      id: 1,
      image: HeroImage,
      text: t("library.hero_title"),
    },
    {
      id: 2,
      image: HeroImage1,
      text: "Eng shinam kutubxona",
    },
    {
      id: 3,
      image: HeroImage2,
      text: "Most comfy library",
    },
  ];

  const books = [
    {
      id: 121,
      cover: Book1,
      title: "Kakku uyasi uzra parvoz",
      author: "Ken Kizi",
      rating: 4.2,
      ratingCount: 421,
    },
    {
      id: 122,
      cover: Book2,
      title: "Sharqiy ekspressdagi qotillik",
      author: "Erix Mariya Remark",
      rating: 5,
      ratingCount: 421,
    },
    {
      id: 123,
      cover: Book3,
      title: "Andisha va g'urur",
      author: "Jeyn Ostin",
      rating: 3.2,
      ratingCount: 421,
    },
    {
      id: 123,
      cover: Book4,
      title: "Alkimyogar",
      author: "Paulo Koelo",
      rating: 4.2,
      ratingCount: 421,
    },
  ];

  return (
    <>
      <div className="hero__container">
        <Hero sliderData={sliderData} className="hero__container" />
      </div>
      <div className="all__books__container container">
        <div className="all__books__search">
          <h2>{t("library.main_page_header")}</h2>
          <div className="all__books__row">
            <div className="all__books__search__input">
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 360,
                  height: 51,
                  border: "1px solid #EAEDF6",
                  borderRadius: "12px",
                  boxShadow: 0,
                }}
              >
                <InputBase
                  sx={{
                    ml: 1,
                    flex: 1,
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#656B70",
                  }}
                  placeholder={t("library.search")}
                  inputProps={{ "aria-label": t("library.search") }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <CiSearch color="#065EA9" size={24} />
                </IconButton>
              </Paper>
              <Button
                onClick={toggleModal}
                variant="contained"
                size="large"
                sx={{
                  padding: "12px 22px",
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
                {t("library.suggest")}
              </Button>
            </div>
            <div className="all__books__filter">
              <FormControl sx={{ minWidth: 180, height: 48 }}>
                <Select
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  value=""
                  IconComponent={HiOutlineChevronDown}
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#656B70",
                    borderRadius: "12px",
                    boxShadow: 0,
                  }}
                >
                  <MenuItem value="">{t("library.sort_by_language")}</MenuItem>
                  <MenuItem value={10}>English</MenuItem>
                  <MenuItem value={20}>O'zbek</MenuItem>
                  <MenuItem value={30}>Русский</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ minWidth: 180, height: 48 }}>
                <Select
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  value=""
                  IconComponent={HiOutlineChevronDown}
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#656B70",
                    borderRadius: "12px",
                    boxShadow: 0,
                  }}
                >
                  <MenuItem value="">{t("library.sort_by_genre")}</MenuItem>
                  <MenuItem value={10}>Criminal</MenuItem>
                  <MenuItem value={20}>Romance</MenuItem>
                  <MenuItem value={30}>Satiric</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="all__books__sort">
            <ul>
              <li
                className={activeSort === "new" ? "active" : ""}
                onClick={() => setActiveSort("new")}
              >
                {t("library.new")}
              </li>
              <li
                className={activeSort === "popular" ? "active" : ""}
                onClick={() => setActiveSort("popular")}
              >
                {t("library.popular")}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grey__bg">
        <div className="all__books__grid container">
          {books.map((book) => (
            <BookCard {...book} key={book.id} />
          ))}
        </div>
      </div>
      {suggestModal && <Suggest toggleModal={toggleModal} lng={lng} t={t} />}
    </>
  );
};

export default AllBooks;
