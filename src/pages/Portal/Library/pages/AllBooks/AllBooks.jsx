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
import { useDispatch, useSelector } from "react-redux";
import { useLibraryFetching } from "../../hooks/libraryFetching";
import { Pagination, Spinner } from "../../../../../component";
import { paginationCount } from "../../../../../helpers/extraFunction";
import { useLocation, useNavigate } from "react-router-dom";

const AllBooks = () => {
  const lng = useSelector((state) => state.language.language);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeSort, setActiveSort] = useState("all");
  const [suggestModal, setSuggestModal] = useState(false);
  const [data, setData] = useState({
    lang: "",
    type: "",
    new: null,
    popular: null,
    search: "",
  });

  const toggleModal = () => {
    setSuggestModal(!suggestModal);
    if (window.innerWidth <= 1000) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const dispatch = useDispatch();

  const {
    libraryData,
    libraryLoading,
    librarySliderData,
    librarySliderLoading,
    activPage,
    changePagination,
    filterBooks,
    filterBooksType,
    searchBook,
  } = useLibraryFetching(12);

  console.log(libraryData);

  const handleСlick = ({ sort, type }) => {
    setData((prev) => ({ ...prev, [type]: sort }));
    if (type === "lang") {
      filterBooks({ lang: sort });
    } else if (type === "type") {
      filterBooksType({ type: sort });
    } else if (type === "new") {
    } else if (type === "popular") {
    } else if (type === "search") {
      // searchBook({ search: sort });
      if (sort !== "") {
        navigate("/portal-category/library/search", {
          state: sort,
          search: sort,
        });
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
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

  if (libraryLoading) {
    return <Spinner />;
  }

  const totalPagination = paginationCount(libraryData?.total, 12);

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
                  name="search"
                  value={data.search}
                  onChange={handleInputChange}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                  onClick={() =>
                    handleСlick({ sort: data.search, type: "search" })
                  }
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
                  value={data.lang}
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
                  <MenuItem
                    value=""
                    onClick={() => handleСlick({ sort: "", type: "lang" })}
                  >
                    {t("library.sort_by_language")}
                  </MenuItem>
                  <MenuItem
                    value={"English"}
                    onClick={() =>
                      handleСlick({ sort: "English", type: "lang" })
                    }
                  >
                    English
                  </MenuItem>
                  <MenuItem
                    value={"O'zbek"}
                    onClick={() =>
                      handleСlick({ sort: "O'zbek", type: "lang" })
                    }
                  >
                    O'zbek
                  </MenuItem>
                  <MenuItem
                    value={"Русский"}
                    onClick={() =>
                      handleСlick({ sort: "Русский", type: "lang" })
                    }
                  >
                    Русский
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ minWidth: 180, height: 48 }}>
                <Select
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  value={data.type}
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
                  <MenuItem
                    value=""
                    onClick={() => handleСlick({ sort: "", type: "type" })}
                  >
                    {t("library.sort_by_genre")}
                  </MenuItem>
                  <MenuItem
                    value={"Badiiy adabiyot"}
                    onClick={() =>
                      handleСlick({ sort: "Badiiy adabiyot", type: "type" })
                    }
                  >
                    Badiiy adabiyot
                  </MenuItem>
                  <MenuItem
                    value={"Ilmiy-marifiy"}
                    onClick={() =>
                      handleСlick({ sort: "Ilmiy-marifiy", type: "type" })
                    }
                  >
                    Ilmiy-marifiy
                  </MenuItem>
                  <MenuItem
                    value={"Diniy-marifiy"}
                    onClick={() =>
                      handleСlick({ sort: "Diniy-marifiy", type: "type" })
                    }
                  >
                    Diniy-marifiy
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="all__books__sort">
            <ul>
              <li
                className={activeSort === "all" ? "active" : ""}
                onClick={() => setActiveSort("all")}
              >
                Barchasi
              </li>
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
          {libraryData.data?.map((book) => (
            <BookCard {...book} key={book.id} />
          ))}
        </div>
      </div>
      <div className="all__books__pagination">
        <Pagination
          count={totalPagination}
          paginationFetching={changePagination}
          page={activPage}
        />
      </div>
      {suggestModal && <Suggest toggleModal={toggleModal} lng={lng} t={t} />}
    </>
  );
};

export default AllBooks;
