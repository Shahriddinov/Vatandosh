import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { getAllAboutUzbMenu } from "../../../../reduxToolkit/portalSlices/aboutUzbekistanSlice/aboutUzbekistanSliceAsyncThunks";
import { useEffect } from "react";
import { getContact } from "../../../../reduxToolkit/contactSlice/extraReducer";

const navbarItems = [
  { id: 1, name: "BOSH SAHIFA", url: "/portal-category/about-uzbekistan" },
  {
    id: 2,
    name: "VIZUAL MA'LUMOT",
    url: "/portal-category/about-uzbekistan/visual-information",
  },
  {
    id: 3,
    name: "3D SAYOHAT",
    url: "https://uzbekistan360.uz/",
  },
  {
    id: 4,
    name: "TURISTIK OBYEKTLAR",
    url: "/portal-category/about-uzbekistan/tourist-facilities",
  },
  {
    id: 5,
    name: "BOG'LANISH",
    url: "/portal-category/about-uzbekistan/contact",
  },
];

const CreateMenu = createSelector(
  (state) => state.aboutUzbekistan.allAboutUzbMenu,
  (menu) => {
    const data = [];
    menu.forEach((el, index) => {
      for (let i = 0; i < menu.length; i++) {
        if (
          menu[i].page_menu_contents[0].about_uzbekistan_page_menu_id ===
          navbarItems[index].id
        ) {
          data.push({
            ...menu[i],
            url: navbarItems[index].url,
            id: navbarItems[index].id,
          });
        }
      }
    });
    return data;
  }
);

export const useLayoutFetching = () => {
  const dispatch = useDispatch();
  const menu = useSelector(CreateMenu);
  const menuLoading = useSelector(
    (store) => store.aboutUzbekistan.allAboutUzbMenuLoading
  );

  const contactData = useSelector((state) => state.contactSlice.contactData);
  const contactLoading = useSelector((state) => state.contactSlice.loading);

  const contactError = useSelector((state) => state.contactSlice.error);

  useEffect(() => {
    dispatch(getAllAboutUzbMenu());
    dispatch(getContact());
  }, [dispatch]);

  return {
    dispatch,
    menu,
    menuLoading,
    contactData,
    contactLoading,
    contactError,
  };
};
