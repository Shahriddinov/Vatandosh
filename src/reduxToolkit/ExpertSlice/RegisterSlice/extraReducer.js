import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  GET_EXPERT_REGISTER_MENU,
  SEND_EXPERT_EDUCATION,
  SEND_EXPERT_REGISTER,
} from "../../../services/api/utils";

const token = localStorage.getItem("token");

export const getExpertRegisterMenu = createAsyncThunk(
  "expert/register/menu",
  async () => {
    return await axios.get(GET_EXPERT_REGISTER_MENU).then((res) => res.data);
  }
);

export const postExpertRegister1 = createAsyncThunk(
  "expert/register1/post",
  async (payload) => {
    console.log(payload);
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

export const postExpertRegister2 = createAsyncThunk(
  "expert/register2/post",
  async (payload) => {
    console.log(payload);
    return await axios
      .post(SEND_EXPERT_EDUCATION, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  }
);
