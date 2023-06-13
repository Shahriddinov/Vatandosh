export const cabinetOfferInputHandler = ({ e, setData }) => {
  const name = e.target.name;
  const evt = e.target;
  setData((prev) => {
    return {
      ...prev,
      [name]: name === "image" ? [...prev.image, evt.files[0]] : evt.value,
    };
  });
};

export const cabinetOfferDeleteImageHandler = ({ el, setData }) => {
  setData((prev) => {
    return {
      ...prev,
      image: prev.image.filter((each) => each !== el),
    };
  });
};

export const cabinetOfferSubmit = ({ dispatch, data }) => {
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
    // dispatch(postExpertScientific({ ...obj, article_file: data.article_file }));
  } else if (
    data.academic_degree &&
    data.scientific_title &&
    data.topic_of_scientific_article &&
    data.article_published_journal_name &&
    data.scientific_article_created_at &&
    data.article_url &&
    data.main_science_directions.length > 0
  ) {
    // dispatch(postExpertScientific(obj));
  }
};
