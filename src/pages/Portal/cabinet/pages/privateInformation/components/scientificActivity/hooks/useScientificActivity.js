import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExpertScientific } from "../../../../../../../../reduxToolkit/ExpertSlice/RegisterSlice/extraReducer";
import { useState } from "react";
import { toast } from "react-toastify";

const initialState = {
  academic_degree: "",
  scientific_title: "",
  topic_of_scientific_article: "",
  article_published_journal_name: "",
  scientific_article_created_at: "",
  article_url: "",
  article_file: "",
  main_science_directions: [],
};

const options = {
  position: "top-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

export const useScientificActivity = () => {
  const [data, setData] = useState(initialState);

  const lan = useSelector((state) => state.language.language);

  const scientificDataDataLoading = useSelector(
    (state) => state.expertRegisterSlice.scientificDataLoading
  );
  const scientificData = useSelector(
    (state) => state.expertRegisterSlice.scientificData
  );
  const scientificDataError = useSelector(
    (state) => state.expertRegisterSlice.scientificDataError
  );

  const scientificDataCreateAndUpdateStatus = useSelector(
    (state) => state.expertRegisterSlice.scientificDataCreateAndUpdateStatus
  );

  const scientificDeleteStatus = useSelector(
    (state) => state.expertRegisterSlice.scientificDeleteStatus
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExpertScientific());
  }, [dispatch, lan]);

  useEffect(() => {
    if (scientificData.length > 0) {
      setData({
        academic_degree: scientificData[0]?.academic_degree,
        scientific_title: scientificData[0]?.academic_degree,
        topic_of_scientific_article:
          scientificData[0]?.topic_of_scientific_article,
        article_published_journal_name:
          scientificData[0]?.article_published_journal_name,
        scientific_article_created_at:
          scientificData[0]?.scientific_article_created_at,
        article_url: scientificData[0]?.article_url,
        article_file: scientificData[0]?.article_file,
        main_science_directions: scientificData[0]?.main_science_directions
          ? JSON.parse(scientificData[0]?.main_science_directions)
          : [],
      });
    } else {
      setData(initialState);
    }
  }, [scientificData]);

  useEffect(() => {
    if (scientificDataCreateAndUpdateStatus === "success") {
      toast.success("Update successfully!", options);
      setTimeout(() => dispatch(getExpertScientific()), 1500);
    } else if (scientificDeleteStatus === "success") {
      toast.success("Delete successfully!", options);
      setTimeout(() => dispatch(getExpertScientific()), 1500);
    } else if (scientificDataCreateAndUpdateStatus === "error") {
      toast.error("error Update !", options);
    } else if (scientificDeleteStatus === "error") {
      toast.error("error delete !", options);
    }
  }, [scientificDataCreateAndUpdateStatus, scientificDeleteStatus, dispatch]);

  return {
    scientificData,
    scientificDataDataLoading,
    scientificDataError,
    data,
    setData,
    dispatch,
  };
};
