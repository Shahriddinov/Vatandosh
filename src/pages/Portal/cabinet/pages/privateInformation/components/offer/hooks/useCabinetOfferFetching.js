import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSuggestions } from "../../../../../../../../reduxToolkit/ExpertSlice/Suggestions/extraReducer";
import { useState } from "react";

const initialState = {
  suggestions: "",
  additional_information: "",
  image: "",
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
    (state) => state.suggestionSlice.loading
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSuggestions());
  }, [dispatch, lan]);

  useEffect(() => {
    if (expertSuggestionsData.length > 0) {
      console.log(expertSuggestionsData);
      setData({
        suggestions: expertSuggestionsData[0].suggestions,
        additional_information: expertSuggestionsData[0].additional_information,
        image: [expertSuggestionsData[0].image],
      });
    } else {
      setData(initialState);
    }
  }, [expertSuggestionsData]);

  return { data, setData, loading, error,expertSuggestionsData };
};
