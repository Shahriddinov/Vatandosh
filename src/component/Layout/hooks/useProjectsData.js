import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getColumnMenu } from "../../../reduxToolkit/singleSlice/singleAsyncThunk";
import { useLocation } from "react-router-dom";

export const useProjectsData = () => {
    const {pathname} = useLocation()

    const error = useSelector(store => store.singleSlice.error);
    const dispatch = useDispatch()

    useEffect(() => {
        if(pathname.split("/")[1] !== "portal" && pathname.split("/")[1] !== "registration") {
            dispatch(getColumnMenu())
        }
    }, [])

    return {error}
}