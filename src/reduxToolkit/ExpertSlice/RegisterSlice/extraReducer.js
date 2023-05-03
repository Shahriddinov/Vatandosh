import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_EXPERT_REGISTER_MENU } from "../../../services/api/utils";

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
  }
);
