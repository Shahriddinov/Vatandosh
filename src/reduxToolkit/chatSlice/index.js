import { createSlice } from "@reduxjs/toolkit";

import {
  checkUser,
  getAllChats,
  getMediaUrl,
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

  mediaUrlLoading: false,
  mediaUrl: null,

  checkLoading: false,
  checkUser: null,

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
      })
      .addCase(leaveGroup.rejected, (state, action) => {
        state.leaveLoading = false;
        state.errors = action.error.message;
      });

    // Check User
    build
      .addCase(checkUser.pending, (state) => {
        state.checkLoading = true;
      })
      .addCase(checkUser.fulfilled, (state, action) => {
        state.checkLoading = false;
        state.checkUser = action.payload;
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.checkLoading = false;
        state.errors = action.error.message;
      });

    // Get media Url
    build
      .addCase(getMediaUrl.pending, (state) => {
        state.mediaUrlLoading = true;
      })
      .addCase(getMediaUrl.fulfilled, (state, action) => {
        state.mediaUrlLoading = false;
        state.mediaUrl = action.payload;
      })
      .addCase(getMediaUrl.rejected, (state, action) => {
        state.mediaUrlLoading = false;
        state.mediaUrl = action.error.message;
      });
  },
});

export default chatSlice.reducer;
