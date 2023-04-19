import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getInf, getPagination } from '../../../reduxToolkit/informationServicesSlice/extraReducer';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useInformationServicesPagination = () => {
  const [page, setPage] = useState(1);
  const { pageName } = useParams()
  const dispatch = useDispatch()
  const { t } = useTranslation();
  const paginationData = useSelector((state) => state.informationServicesSlice.paginationData)

  const paginationLoading = useSelector(
    (state) => state.informationServicesSlice.paginationLoading
  );
  const loading = useSelector(
    (state) => state.informationServicesSlice.loading
  );
  const data = useSelector((state) => state.informationServicesSlice.data);

  const paginationCount = Math.ceil(paginationData?.total / 6)

  const paginationFetching = (count) => {
    setPage(count);
    dispatch(getPagination({
      reqUrlName: pageName,
      page: count
    }))
  }

  useEffect(() => {
    dispatch(
      getPagination({ reqUrlName: pageName, page: 1 })
    );
    dispatch(getInf(pageName));
    setPage(1);
  }, [dispatch, pageName]);

  return {   
    paginationFetching,
    page,
    paginationData,
    paginationCount,
    paginationLoading,
    loading,
    data,
    pageName,
    t
  }
}
