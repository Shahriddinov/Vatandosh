import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAssociations, getAssociationsCategory } from "../../../reduxToolkit/associationsSlice/associationsAsyncThunk";


export const useAssociationFetching = () => {
    const associationData = useSelector(store => store.associationSlice.associationData);
    const associationCategoryData = useSelector(store => store.associationSlice.associationCategoryData);
    const associationLoading = useSelector(store => store.associationSlice.associationLoading);
    const associationCategoryLoading = useSelector(store => store.associationSlice.associationCategoryLoading);
    const error = useSelector(store => store.associationSlice.error);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAssociations())
        dispatch(getAssociationsCategory())
    },[])

    return {associationData,associationCategoryData,error,associationLoading,associationCategoryLoading}
    // if(!associationLoading && !associationCategoryLoading) {
    // }

    // console.log(associationData,associationCategoryData,associationLoading,associationCategoryLoading);    
}