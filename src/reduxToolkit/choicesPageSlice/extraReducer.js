import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_QUIZZES, GET_QUIZ_BYID } from "../../services/api/utils";

export const getAllQuizData = createAsyncThunk(
  "/api/quiz-list/quizzes",
  async ({ status, paginate }) => {
    return await axios({
      url: GET_QUIZZES,
      method: "GET",
      params: {
        status,
        paginate,
      },
    }).then((res) => res.data);
  }
);

export const getQuizDataById = createAsyncThunk(
  "/quiz-list/quiz/{id}",
  async (id) => {
    return await axios({
      url: `${GET_QUIZ_BYID}/${id}`,
      method: "GET",
    }).then((res) => res.data);
  }
);
