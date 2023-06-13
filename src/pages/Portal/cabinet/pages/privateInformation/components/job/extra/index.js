import {
  createExpertEmployment,
  deleteExpertEmployment,
  updateExpertEmployment,
} from "../../../../../../../../reduxToolkit/ExpertSlice/RegisterSlice/extraReducer";

export const handleCabinetJob = ({ key, value, comId, data, setData }) => {
  const newData = data.map((el) => {
    if (el.id === comId) {
      return {
        ...el,
        [key]: value,
        specialization: key === "position" ? value : el.specialization,
      };
    }
    return el;
  });
  setData(newData);
};

export const cabinetJobDataSubmit = ({
  dispatch,
  data,
  setData,
  employment,
}) => {
  console.log(data);
  const oldEmploymentId = employment.map((el) => el.id);
  const createJob = [];
  data.forEach((el) => {
    const postItem = {
      company: el.company,
      position: el.position,
      location_id: el.location_id,
      status: el.status,
      city: el.city,
      start_date: el.start_date,
      finish_date: el.finish_date ? el.finish_date : "",
      specialization: el.specialization,
    };

    if (oldEmploymentId.includes(el.id)) {
      dispatch(updateExpertEmployment({ ...postItem, id: el.id }));
    } else if (!oldEmploymentId.includes(el.id)) {
      const elMatch =
        el.company &&
        el.position &&
        el.location_id &&
        el.city &&
        el.start_date &&
        el.specialization;
      if (elMatch) {
        createJob.push(postItem);
      }
    }
  });
  if (createJob.length > 0) {
    dispatch(createExpertEmployment({ expert: createJob }));
  }
};

export const cabinetJobDataDelete = (id, dispatch) => {
  dispatch(deleteExpertEmployment(id * 1));
};
