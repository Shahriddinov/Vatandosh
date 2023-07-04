import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/api/axios";

import {
  DELETE_MESSAGE,
  GET_CHAT_DATA,
  POST_COMMUNITY_IMAGE,
} from "../../services/api/utils";

// Get All Chats
export const getAllChats = createAsyncThunk("get/allChats", async () => {
  return await axios.get(`${GET_CHAT_DATA}/chats`).then((res) => res.data);
});

// Get Messages
export const getMessages = createAsyncThunk(
  "get/messages",
  async ({ chat_id, page }) => {
    return await axios
      .get(`${GET_CHAT_DATA}/chat/${chat_id}?per_page=1000&page=${page}`)
      .then((res) => res.data);
  }
);

// Get Files
export const getFiles = createAsyncThunk(
  "get/files",
  async ({ chat_id, page }) => {
    return await axios
      .get(`${GET_CHAT_DATA}/chat/${chat_id}?per_page=1000&type=2&page=${page}`)
      .then((res) => res.data);
  }
);

// Get Links
export const getLinks = createAsyncThunk(
  "get/links",
  async ({ chat_id, page }) => {
    return await axios
      .get(`${GET_CHAT_DATA}/chat/${chat_id}?per_page=1000&type=3&page=${page}`)
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

// Check user
export const checkUser = createAsyncThunk("check/user", async (userId) => {
  return await axios
    .get(`${GET_CHAT_DATA}/check?user_id=${userId}`)
    .then((res) => res.data);
});

// Delete message
export const deleteMessage = createAsyncThunk(
  "delete/message",
  async (messageId) => {
    return await axios
      .post(`${DELETE_MESSAGE}/${messageId}`)
      .then((res) => res.data);
  }
);

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
