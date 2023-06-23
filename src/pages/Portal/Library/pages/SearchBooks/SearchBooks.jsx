import React, { useEffect, useState } from "react";
import "../AllBooks/allBooks.scss";
import BookCard from "../../components/BookCard/BookCard";

import { CiSearch } from "react-icons/ci";
import { HiOutlineChevronDown } from "react-icons/hi";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

import { FormControl, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLibraryFetching } from "../../hooks/libraryFetching";
import { Pagination, Spinner } from "../../../../../component";
import { paginationCount } from "../../../../../helpers/extraFunction";
import { Link, useLocation } from "react-router-dom";

const SearchBooks = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [data, setData] = useState({
    lang: "",
    type: "",
    new: null,
    popular: null,
    search: "",
  });

  const {
    libraryData,
    libraryLoading,
    activPage,
    changePagination,
    filterBooks,
    filterBooksType,
    searchBook,
    sortBook,
  } = useLibraryFetching(12);

  useEffect(() => {
    searchBook({ search: location.state });
  }, [location.state, searchBook]);

  const handleСlick = ({ sort, type }) => {
    setData((prev) => ({ ...prev, [type]: sort }));
    if (type === "lang") {
      filterBooks({ lang: sort });
    } else if (type === "type") {
      filterBooksType({ type: sort });
    } else if (type === "sort") {
      sortBook({ sort: sort });
    } else if (type === "search") {
      searchBook({ search: sort });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  if (libraryLoading) {
    return <Spinner />;
  }

  const totalPagination = paginationCount(libraryData?.total, 12);

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
            <li className="current_path">{t("library.library")}</li>
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
                    {t("english")}
                  </MenuItem>
                  <MenuItem
                    value={"O'zbek"}
                    onClick={() =>
                      handleСlick({ sort: "O'zbek", type: "lang" })
                    }
                  >
                    {t("uzbek")}
                  </MenuItem>
                  <MenuItem
                    value={"Русский"}
                    onClick={() =>
                      handleСlick({ sort: "Русский", type: "lang" })
                    }
                  >
                    {t("ruskiy")}
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
                    {t("libraryOne")}
                  </MenuItem>
                  <MenuItem
                    value={"Ilmiy-marifiy"}
                    onClick={() =>
                      handleСlick({ sort: "Ilmiy-marifiy", type: "type" })
                    }
                  >
                    {t("libraryTwo")}
                  </MenuItem>
                  <MenuItem
                    value={"Diniy-marifiy"}
                    onClick={() =>
                      handleСlick({ sort: "Diniy-marifiy", type: "type" })
                    }
                  >
                    {t("libraryThree")}
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="all__books__sort">
            <ul>
              <li
                className={data.sort === "all" ? "active" : ""}
                onClick={() => handleСlick({ sort: "all", type: "sort" })}
              >
                {t("all")}
              </li>
              <li
                className={data.sort === "new" ? "active" : ""}
                onClick={() => handleСlick({ sort: "new", type: "sort" })}
              >
                {t("library.new")}
              </li>
              <li
                className={data.sort === "popular" ? "active" : ""}
                onClick={() => handleСlick({ sort: "popular", type: "sort" })}
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
    </>
  );
};

export default SearchBooks;
