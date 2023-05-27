import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/api/axios";

import { GET_CHAT_DATA, POST_COMMUNITY_IMAGE } from "../../services/api/utils";

// Get All Chats
export const getAllChats = createAsyncThunk("get/allChats", async () => {
  return await axios.get(`${GET_CHAT_DATA}/chats`).then((res) => res.data);
});

// Get Messages
export const getMessages = createAsyncThunk(
  "get/messages",
  async ({ chat_id, chat_type, page }) => {
    return await axios
      .get(
        `${GET_CHAT_DATA}/chat/${chat_id}?per_page=1000&type=${chat_type}&page=${page}`
      )
      .then((res) => res.data);
  }
);

// Send Message
export const sendMessage = createAsyncThunk("send/message", async (payload) => {
  return await axios
    .post(`${GET_CHAT_DATA}/send`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data);
});

// Leave Group
export const leaveGroup = createAsyncThunk("leave/group", async (payload) => {
  return await axios
    .post(`${GET_CHAT_DATA}/left`, payload)
    .then((res) => res.data);
});

// Create url for chat media

export const getMediaUrl = createAsyncThunk("getMedia", async (data) => {
  return await axios({
    url: POST_COMMUNITY_IMAGE,
    method: "POST",
    data: data,
    headers: {
      "Content-Type":
        "multipart/form-data; boundary=<calculated when request is sent>",
      accept: "*/*",
    },
  }).then((res) => res.data);
});
