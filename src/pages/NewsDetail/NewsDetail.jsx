import { useDispatch } from "react-redux";
import { Spinner } from "../../component";
import NotFound from "../404";
import { useNewsDataFetching } from "./hooks/useNewsDetailFetching";
import { useEffect } from "react";
import { getContact } from "../../reduxToolkit/contactSlice/extraReducer";
import Detail from "../../component/Detail/Detail";

export default function NewsDetail() {
  const { siteNews } = useNewsDataFetching();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContact());
  }, []);

  return <Detail {...siteNews} />;
}
