import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  DELETE_EXPERT_EDUCATION,
  DELETE_EXPERT_EMPLOYMENT,
  GET_EXPERT_EDUCATION,
  GET_EXPERT_EDUCATION_SPECIALIZATION,
  GET_EXPERT_EMPLOYMENT,
  GET_EXPERT_REGISTER,
  GET_EXPERT_REGISTER_MENU,
  SEND_EXPERT_EDUCATION,
  SEND_EXPERT_EMPLOYMENT,
  SEND_EXPERT_REGISTER,
  SEND_EXPERT_SCIENTIFIC,
  UPDATE_EXPERT_EDUCATION,
  UPDATE_EXPERT_EMPLOYMENT,
} from "../../../services/api/utils";

const token = localStorage.getItem("token");

export const getExpertRegisterMenu = createAsyncThunk(
  "expert/register/menu",
  async () => {
    return await axios.get(GET_EXPERT_REGISTER_MENU).then((res) => res.data);
  }
);
// register
export const postExpertRegister = createAsyncThunk(
  "expert/register1/post",
  async (payload) => {
    return await axios
      .post(SEND_EXPERT_REGISTER, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  }
);
export const getExpertRegister = createAsyncThunk(
  "expert/register/get",
  async () => {
    return await axios.get(GET_EXPERT_REGISTER).then((res) => res.data);
  }
);

// EDUCATION
export const getExpertEducation = createAsyncThunk(
  "expert/education/get",
  async () => {
    return await axios.get(GET_EXPERT_EDUCATION).then((res) => res.data);
  }
);
export const getExpertSpecialization = createAsyncThunk(
  "expert/education/specialization",
  async () => {
    return await axios
      .get(GET_EXPERT_EDUCATION_SPECIALIZATION)
      .then((res) => res.data);
  }
);
export const postExpertEducation = createAsyncThunk(
  "expert/register2/post",
  async (payload) => {
    return await axios
      .post(SEND_EXPERT_EDUCATION, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  }
);
export const deleteExpertEducation = createAsyncThunk(
  "expert/education/delete",
  async (id) => {
    return await axios
      .delete(`${DELETE_EXPERT_EDUCATION}/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  }
);
export const updateExpertEducation = createAsyncThunk(
  "expert/education/update",
  async (payload) => {
    const id = payload.id;
    delete payload.id;
    payload.type = "" + payload.type;
    payload.specialization_id = "" + payload.specialization_id;
    return await axios
      .patch(`${UPDATE_EXPERT_EDUCATION}/${id}`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  }
);

// EMPLOYMENT
export const createExpertEmployment = createAsyncThunk(
  "expert/employment/create",
  async (payload) => {
    return await axios
      .post(`${SEND_EXPERT_EMPLOYMENT}`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  }
);
export const getExpertEmployment = createAsyncThunk(
  "expert/employment/get",
  async () => {
    return await axios.get(GET_EXPERT_EMPLOYMENT).then((res) => res.data);
  }
);
export const updateExpertEmployment = createAsyncThunk(
  "expert/employment/update",
  async (payload) => {
    const id = payload.id;
    delete payload.id;
    return await axios
      .patch(`${UPDATE_EXPERT_EMPLOYMENT}/${id}`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  }
);
export const deleteExpertEmployment = createAsyncThunk(
  "expert/employment/delete",
  async (id) => {
    return await axios
      .delete(`${DELETE_EXPERT_EMPLOYMENT}/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  }
);

// Scientific degree
export const postExpertScientific = createAsyncThunk(
  "expert/scientific/post",
  async (payload) => {
    return await axios
      .post(SEND_EXPERT_SCIENTIFIC, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  }
);
