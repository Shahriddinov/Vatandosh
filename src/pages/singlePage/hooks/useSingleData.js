import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const useSingleData = () => {
  const { search } = useLocation();
  const projectsMenuLoading = useSelector(
    (store) => store.singleSlice.projectsLoading
  );
  const menuData = useSelector((store) => store.singleSlice.projectsData);
  const error = useSelector((store) => store.singleSlice.error);
  const data = menuData.length
    ? menuData?.find((el) => el?.id === search.slice(2) * 1)
    : { id: search.slice(2) * 1 };

  // useEffect(() => {
  //   if (!projectsMenuLoading) {
  //     setData(newData);
  //   }
  // }, [menuData, search.slice(2)]);

  return {
    projectsMenuLoading,
    data,
    error,
  };
};
