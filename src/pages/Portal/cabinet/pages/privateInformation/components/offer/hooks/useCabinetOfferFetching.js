import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSuggestions } from "../../../../../../../../reduxToolkit/ExpertSlice/Suggestions/extraReducer";
import { useState } from "react";
import { toast } from "react-toastify";

const initialState = {
  suggestions: "",
  additional_information: "",
  images: "",
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

export const useCabinetOfferFetching = () => {
  const [data, setData] = useState(initialState);
  const lan = useSelector((state) => state.language.language);

  const expertSuggestionsData = useSelector(
    (state) => state.suggestionSlice.expertSuggestionsData
  );
  const loading = useSelector((state) => state.suggestionSlice.loading);
  const error = useSelector((state) => state.suggestionSlice.error);

  const expertSuggestionCreateAndUpdateStatus = useSelector(
    (state) => state.suggestionSlice.expertSuggestionCreateAndUpdateStatus
  );
  const expertSuggestionDelete = useSelector(
    (state) => state.suggestionSlice.expertSuggestionDelete
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSuggestions());
  }, [dispatch, lan]);

  useEffect(() => {
    if (expertSuggestionsData.length) {
      const { suggestions, additional_information, image } =
        expertSuggestionsData[0];

      setData({
        suggestions: suggestions ? suggestions : "",
        additional_information: additional_information
          ? additional_information
          : "",
        images: image ? [image] : [],
      });
    }
  }, [expertSuggestionsData]);

  useEffect(() => {
    if (expertSuggestionCreateAndUpdateStatus === "success") {
      toast.success("Update successfully!", options);
      setTimeout(() => dispatch(getSuggestions()), 1500);
    } else if (expertSuggestionDelete === "success") {
      toast.success("Delete successfully!", options);
      setTimeout(() => dispatch(getSuggestions()), 1500);
    } else if (expertSuggestionCreateAndUpdateStatus === "error") {
      toast.error("error Update !", options);
    } else if (expertSuggestionDelete === "error") {
      toast.error("error delete !", options);
    }
  }, [expertSuggestionCreateAndUpdateStatus, expertSuggestionDelete, dispatch]);

  return { data, setData, loading, error, expertSuggestionsData, dispatch };
};
