import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getLibraryAll,
  getLibrarySlider,
} from "../../../../reduxToolkit/portalSlices/librarySlice/extraReducer";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const useLibraryFetching = (count) => {
  const lang = useSelector((store) => store.language.language);

  const [activPage, setActivePage] = useState(1);
  const [language, setLanguage] = useState("");
  const [genre, setGenre] = useState("");
  const libraryData = useSelector((store) => store.librarySlice.libraryData);
  const libraryLoading = useSelector(
    (store) => store.librarySlice.libraryLoading
  );
  const librarySliderData = useSelector(
    (store) => store.librarySlice.librarySliderData
  );
  const librarySliderLoading = useSelector(
    (store) => store.librarySlice.librarySliderLoading
  );
  const location = useLocation();

  const dispatch = useDispatch();
  const changePagination = (value) => {
    dispatch(getLibraryAll({ count: count, page: value, lang: language }));
    setActivePage(value);
  };

  const filterBooks = ({ lang }) => {
    if (lang === "" && genre === "") {
      dispatch(
        getLibraryAll({
          count: count,
          page: activPage,
        })
      );
    } else if (lang !== "" && genre === "") {
      dispatch(
        getLibraryAll({
          count: count,
          page: activPage,
          lang: lang,
        })
      );
    } else if (lang === "" && genre !== "") {
      dispatch(
        getLibraryAll({
          count: count,
          page: activPage,
          type: genre,
        })
      );
    } else {
      dispatch(
        getLibraryAll({
          count: count,
          page: activPage,
          lang: lang,
          type: genre,
        })
      );
    }
    setLanguage(lang);
  };

  const filterBooksType = ({ type }) => {
    if (type === "" && language === "") {
      dispatch(
        getLibraryAll({
          count: count,
          page: activPage,
        })
      );
    } else if (type !== "" && language === "") {
      dispatch(
        getLibraryAll({
          count: count,
          page: activPage,
          type: type,
        })
      );
    } else if (type === "" && language !== "") {
      dispatch(
        getLibraryAll({
          count: count,
          page: activPage,
          lang: language,
        })
      );
    } else {
      dispatch(
        getLibraryAll({
          count: count,
          page: activPage,
          lang: language,
          type: type,
        })
      );
    }
    setGenre(type);
  };

  const searchBook = ({ search }) => {
    if (search === "") {
      dispatch(
        getLibraryAll({
          count: count,
          page: activPage,
        })
      );
    } else {
      dispatch(
        getLibraryAll({
          count: count,
          page: activPage,
          search: search,
        })
      );
    }
  };

  const sortBook = ({ sort }) => {
    if (sort === "all") {
      dispatch(
        getLibraryAll({
          count: count,
          page: activPage,
        })
      );
    } else if (sort === "new") {
      dispatch(
        getLibraryAll({
          count: count,
          page: activPage,
          neW: true,
        })
      );
    } else if (sort === "popular") {
      dispatch(
        getLibraryAll({
          count: count,
          page: activPage,
          popular: true,
        })
      );
    }
  };

  useEffect(() => {
    if (!location.state) {
      dispatch(getLibraryAll({ count: count }));
      dispatch(getLibrarySlider());
    }
  }, [lang]);

  return {
    libraryData,
    libraryLoading,
    librarySliderData,
    librarySliderLoading,
    activPage,
    changePagination,
    filterBooks,
    filterBooksType,
    searchBook,
    sortBook,
  };
};
