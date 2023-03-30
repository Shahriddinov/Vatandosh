import { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { getDetailData } from "../../../reduxToolkit/newsSlice/extraReducer";

export const useNewsDataFetching = () => {
    const { id, page } = useParams();
    const dispatch = useDispatch()
    const data = useSelector((state) => state.newsSlice.detailData);
    const loading = useSelector((state) => state.newsSlice.loadingDetail);
    const error = useSelector((state) => state.newsSlice.error);

    useEffect(() => {
        dispatch(getDetailData({ page, id }));
    }, [id, dispatch, page])

    return { data, loading, error }
}