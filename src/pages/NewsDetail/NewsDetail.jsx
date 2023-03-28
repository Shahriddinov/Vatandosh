import { useDispatch } from "react-redux";
import { Spinner } from "../../component";
import NotFound from "../404";
import { useNewsDataFetching } from "./hooks/useNewsDetailFetching";
import { useEffect } from "react";
import { getContact } from "../../reduxToolkit/contactSlice/extraReducer";
import Detail from "../../component/Detail/Detail";

export default function NewsDetail() {
  const { loading, pathErrText, data } = useNewsDataFetching();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContact());
  }, [])

  if (loading) {
    return (
      <div className="spinner_box">
        <Spinner />
      </div>
    )
  }

  if (pathErrText) {
    return <NotFound />
  }

  return (
    <Detail {...data} />
  );
}