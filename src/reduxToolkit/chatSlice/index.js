import { createSlice } from "@reduxjs/toolkit";

import {
  getAllChats,
  getMessages,
  leaveGroup,
  sendMessage,
} from "./extraReducer";

const initialState = {
  allChatLoading: true,
  allChatsData: null,

  messagesLoading: false,
  messagesData: null,

  sendLoading: false,
  sendMessage: null,
  sendMessageStatus: null,

  leaveLoading: false,
  leaveData: null,

  errors: null,
};

const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    // Get Groups
    build
      .addCase(getAllChats.pending, (state) => {
        state.allChatLoading = true;
      })
      .addCase(getAllChats.fulfilled, (state, action) => {
        state.allChatLoading = false;
        state.allChatsData = action.payload;
      })
      .addCase(getAllChats.rejected, (state, action) => {
        state.allChatLoading = false;
        state.errors = action.error.message;
      });

    // Get Messages
    build
      .addCase(getMessages.pending, (state) => {
        state.messagesLoading = true;
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.messagesLoading = false;
        state.messagesData = action.payload;
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.messagesLoading = false;
        state.errors = action.error.message;
      });

    // Send Message
    build
      .addCase(sendMessage.pending, (state) => {
        state.sendLoading = true;
        state.sendMessageStatus = null;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.sendLoading = false;
        state.sendMessage = action.payload;
        state.sendMessageStatus = "success";
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.sendLoading = false;
        state.sendMessageStatus = "error";
        state.errors = action.error.message;
      });

    // Leave Group
    build
      .addCase(leaveGroup.pending, (state) => {
        state.leaveLoading = true;
      })
      .addCase(leaveGroup.fulfilled, (state, action) => {
        state.leaveLoading = false;
        state.leaveData = action.payload;
        console.log(action.payload);
      })
      .addCase(leaveGroup.rejected, (state, action) => {
        state.leaveLoading = false;
        state.errors = action.error.message;
      });
  },
});

export default chatSlice.reducer;
