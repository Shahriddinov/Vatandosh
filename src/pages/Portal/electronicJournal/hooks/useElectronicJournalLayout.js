import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  lastMagazineGet,
  magazineGetMenu,
} from "../../../../reduxToolkit/portalSlices/electronicJournalSlice/electronicJournalExtraReducers";
import { createSelector } from "@reduxjs/toolkit";
import { getContact } from "../../../../reduxToolkit/contactSlice/extraReducer";
const navData = [
  {
    id: 1,
    url: "/portal-category/electronic-journal",
  },
  {
    id: 2,
    url: "/portal-category/electronic-journal/about",
  },
  {
    id: 3,
    url: "/portal-category/electronic-journal/new-number",
  },
  {
    id: 4,
    url: "/portal-category/electronic-journal/archive",
  },
  {
    id: 5,
    url: "/portal-category/electronic-journal/contact",
  },
];

const changeMenu = createSelector(
  (state) => state.journal.menu,
  (state) => state.journal.lastMagazine,
  (menu, journals) => {
    const journal = journals?.data?.length > 0 ? journals.data[0] : {};
    const data = menu?.slice(0, 5)?.map((el, index) => {
      if (el.id === 2) {
        return {
          ...el,
          url: navData[index].url + "/" + journal?.id,
          label: el?.name,
        };
      }
      return {
        ...el,
        url: navData[index].url,
        label: el?.name,
      };
    });
    return data;
  }
);

export const useElectronicJournalLayout = () => {
  const lan = useSelector((state) => state.language.language);

  const menu = useSelector(changeMenu);
  const menuLoading = useSelector((state) => state.journal.menuLoading);

  const lastMagazineLoading = useSelector(
    (state) => state.journal.lastMagazineLoading
  );

  const contactData = useSelector((state) => state.contactSlice.contactData);
  const contactLoading = useSelector((state) => state.contactSlice.loading);

  const contactError = useSelector((state) => state.contactSlice.error);

  const error = useSelector((state) => state.journal.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(magazineGetMenu());
    dispatch(lastMagazineGet({ paginate: 2 }));
    dispatch(getContact());
  }, [dispatch, lan]);

  return {
    menu,
    menuLoading,
    lastMagazineLoading,
    error,
    lan,
    contactData,
    contactLoading,
    contactError,
  };
};
