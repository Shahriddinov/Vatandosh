import React, { useState } from "react";
import "./searchBooks.scss";
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
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchBooks = () => {
  const lng = useSelector((state) => state.language.language);
  const { t } = useTranslation();

  const [activeSort, setActiveSort] = useState("new");

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
      id: 124,
      cover: Book4,
      title: "Alkimyogar",
      author: "Paulo Koelo",
      rating: 4.2,
      ratingCount: 421,
    },
  ];

  return (
    <>
      <div className="all__books__container container">
        <div className="path">
          <ul>
            <li>
              <Link to="/">{t("mainPage")}</Link>
            </li>
            <li>
              <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.23309 4.92481C6.61654 5.21241 6.61654 5.78759 6.23309 6.07519L4.15037 7.63722C3.67639 7.99271 3 7.65451 3 7.06203L3 3.93797C3 3.34549 3.67639 3.00729 4.15037 3.36278L6.23309 4.92481Z"
                  fill="#5D6B8A"
                />
              </svg>
            </li>
            <li className="current_path">Kutubxona</li>
          </ul>
        </div>
        <div className="all__books__search">
          <h2>{t("library.search_header")}</h2>
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
    </>
  );
};

export default SearchBooks;
