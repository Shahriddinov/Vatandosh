import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { getAllAboutUzbMenu } from "../../../../reduxToolkit/portalSlices/aboutUzbekistanSlice/aboutUzbekistanSliceAsyncThunks";
import { useEffect } from "react";

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
    url: "/portal-category/about-uzbekistan/virtual-tour",
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
    return menu.map((el, i) => {
      return {
        ...el,
        url: navbarItems[i].url,
        id: navbarItems[i].id,
      };
    });
  }
);

export const useLayoutFetching = () => {
  const dispatch = useDispatch();
  const menu = useSelector(CreateMenu);
  const menuLoading = useSelector(
    (store) => store.aboutUzbekistan.allAboutUzbMenuLoading
  );

  useEffect(() => {
    dispatch(getAllAboutUzbMenu());
  }, []);

  return { dispatch, menu, menuLoading };
};
