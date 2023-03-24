import { useEffect, useMemo,} from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { getOneNews } from "../../../reduxToolkit/newsSlice/extraReducer";

export const useNewsDataFetching = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const data = useSelector((state) => state.newsSlice.oneData);
    const loading = useSelector((state) => state.newsSlice.loadingOneNews);

    useEffect(() => {
        dispatch(getOneNews(id));
    },[id,dispatch])

    const pathErrText = useMemo(() => {
        for(let i = 0; i < id.length; i++) {
            if(isNaN(id[i] * 1 )) {
                return 1
            }
        }
        return 0
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return {data,loading,pathErrText}
}