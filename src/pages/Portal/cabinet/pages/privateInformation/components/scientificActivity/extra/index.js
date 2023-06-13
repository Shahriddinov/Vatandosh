import {
  deleteExpertScientific,
  postExpertScientific,
} from "../../../../../../../../reduxToolkit/ExpertSlice/RegisterSlice/extraReducer";

export const cabinetScientificInputHandler = ({ e, setData, setHobby }) => {
  const name = e.target.name;
  const value = name === "article_file" ? e.target.files[0] : e.target.value;
  if (name !== "hobby") {
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  } else {
    setHobby(e.target.value);
  }
};
export const cabinetScientificHobbyHandler = ({
  e,
  data,
  setHobby,
  setData,
}) => {
  if (e.key === "Enter" && data.hobby !== "") {
    setHobby("");
    setData((prev) => {
      return {
        ...prev,
        main_science_directions: [
          ...prev.main_science_directions,
          e.target.value,
        ],
      };
    });
  }
  return;
};

export const cabinetScientificDeleteHobbyHandler = ({ el, setData }) => {
  setData((prev) => {
    return {
      ...prev,
      main_science_directions: [...prev.main_science_directions].filter(
        (each) => each !== el
      ),
    };
  });
};

export const cabinetScientificDeleteArticleLinkHandler = ({
  data,
  setData,
}) => {
  if (data.article_url !== "") {
    setData((prev) => {
      return { ...prev, article_url: "" };
    });
    return;
  }
  return;
};

export const cabinetScientificSubmit = ({ dispatch, data }) => {
  const obj = {
    academic_degree: data.academic_degree,
    scientific_title: data.scientific_title,
    topic_of_scientific_article: data.topic_of_scientific_article,
    article_published_journal_name: data.article_published_journal_name,
    scientific_article_created_at: data.scientific_article_created_at,
    article_url: data.article_url,
    main_science_directions: data.main_science_directions,
  };
  if (
    typeof data.article_file === "object" &&
    data.article_file !== null &&
    data.article_file !== ""
  ) {
    dispatch(postExpertScientific({ ...obj, article_file: data.article_file }));
  } else if (
    data.academic_degree &&
    data.scientific_title &&
    data.topic_of_scientific_article &&
    data.article_published_journal_name &&
    data.scientific_article_created_at &&
    data.article_url &&
    data.main_science_directions.length > 0
  ) {
    dispatch(postExpertScientific(obj));
  }
};

export const cabinetScientificDelete = ({ id, dispatch }) => {
  dispatch(deleteExpertScientific(id));
};
