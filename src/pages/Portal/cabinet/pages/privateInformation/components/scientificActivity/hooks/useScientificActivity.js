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
    if (scientificData.length) {
      const {
        academic_degree,
        scientific_title,
        topic_of_scientific_article,
        article_published_journal_name,
        scientific_article_created_at,
        article_url,
        article_file,
        main_science_directions,
      } = scientificData[0];

      setData({
        academic_degree: academic_degree ? academic_degree : "",
        scientific_title: scientific_title ? scientific_title : "",
        topic_of_scientific_article: topic_of_scientific_article
          ? topic_of_scientific_article
          : "",
        article_published_journal_name: article_published_journal_name
          ? article_published_journal_name
          : "",
        scientific_article_created_at: scientific_article_created_at
          ? scientific_article_created_at
          : "",
        article_url: article_url ? article_url : "",
        article_file: article_file ? article_file : "",
        main_science_directions: main_science_directions
          ? JSON.parse(main_science_directions)
          : [],
      });
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
