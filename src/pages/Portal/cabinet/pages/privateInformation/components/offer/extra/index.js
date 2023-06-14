import {
  deleteSuggestions,
  postSuggestions,
} from "../../../../../../../../reduxToolkit/ExpertSlice/Suggestions/extraReducer";

export const cabinetOfferInputHandler = ({ e, setData }) => {
  const name = e.target.name;
  const evt = e.target;
  setData((prev) => {
    return {
      ...prev,
      [name]: name === "images" ? [...prev.images, evt.files[0]] : evt.value,
    };
  });
};

export const cabinetOfferDeleteImageHandler = ({ el, setData }) => {
  setData((prev) => {
    return {
      ...prev,
      images: prev.images.filter((each) => each !== el),
    };
  });
};

export const cabinetOfferSubmit = ({ dispatch, data }) => {
  const postData = {
    suggestions: data.suggestions,
    additional_information: data.additional_information,
  };
  if (
    data.suggestions &&
    data.additional_information &&
    typeof data.images[0] === "string"
  ) {
    dispatch(postSuggestions(postData));
  } else {
    dispatch(postSuggestions({ ...postData, images: data.images }));
  }
};

export const cabinetOfferDelete = ({ dispatch, id }) => {
  dispatch(deleteSuggestions(id));
};
