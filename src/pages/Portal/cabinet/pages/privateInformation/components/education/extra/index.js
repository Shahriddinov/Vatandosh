import {
  deleteExpertEducation,
  postExpertEducation,
  updateExpertEducation,
} from "../../../../../../../../reduxToolkit/ExpertSlice/RegisterSlice/extraReducer";

export const cabinetEducationDataChange = ({
  key,
  value,
  data,
  el,
  setData,
}) => {
  const newData = data.map((item) => {
    if (item.id === el.id) {
      return {
        ...item,
        [key]: value,
      };
    }
    return item;
  });
  setData(newData);
};

export const cabinetEducationDataSubmit = ({
  dispatch,
  data,
  setData,
  education,
}) => {
  const oldEducationsId = education.map((el) => el.id);
  const createEducation = [];

  data.forEach((el) => {
    const singleData = {
      institution: el.institution,
      level: "Oliy",
      faculty: el.faculty,
      specialization_id: el.specialization_id,
      type: el.type,
    };
    if (oldEducationsId.includes(el.id)) {
      dispatch(updateExpertEducation({ ...singleData, id: el.id }));
    } else if (el.faculty && el.specialization_id !== "all" && el.institution) {
      createEducation.push(singleData);
    }
  });
  if (createEducation.length)
    dispatch(
      postExpertEducation({
        expert: createEducation,
      })
    );
};

export const deleteCabinetEducation = (id, dispatch) => {
  dispatch(deleteExpertEducation(id * 1));
};
