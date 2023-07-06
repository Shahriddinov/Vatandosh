import React, { useRef, useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import ChatDocs from "../chatDocs/ChatDocs";
import ChatLinks from "../chatLinks/ChatLinks";

import "./privateMessages.scss";

import Spinner from "../../../../../../../component/Spinner/Spinner";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";
import { MessagesContext } from "../../../../../../../App";
import {
  deleteMessage,
  getFiles,
  getLinks,
  getMediaUrl,
  getMessages,
  sendMessage,
} from "../../../../../../../reduxToolkit/chatSlice/extraReducer";
import { ChooseMember } from "../../Chat";
import { useTranslation } from "react-i18next";
import LeftIcon from "../../../../../../../assets/images/cabinet/left.png";

const PrivateMessages = ({
  showMessages,
  activeUser,
  setShowDocs,
  showDocs,
  setShowLinks,
  showLinks,
  activePage,
  privateChatRoomId,
  userData,
  setActiveChat,
  setShowGroupMessages,
  setActiveGroup,
  setShowMessages,
  setActiveUser,
}) => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const sendRef = useRef();
  const messagesRef = useRef();
  const uploadRef = useRef();
  const [show, setShow] = useState(true);
  const [sendMessageData, setSendMessageData] = useState({
    user_id: null,
    message: "",
    type: null,
    file: null,
  });
  const [sendFile, setSendFile] = useState(null);
  const { messages } = useContext(MessagesContext);
  const { chooseMember } = useContext(ChooseMember);

  const messagesLoading = useSelector(
    (state) => state.chatSlice.messagesLoading
  );
  const messagesData = useSelector((state) => state.chatSlice.messagesData);
  const mediaUrl = useSelector((state) => state.chatSlice.mediaUrl);
  const filesData = useSelector((state) => state.chatSlice.filesData);
  const linksData = useSelector((state) => state.chatSlice.linksData);
  const user = JSON.parse(localStorage.getItem("user"));
  const { t } = useTranslation();

  const handleChange = (input) => {
    setSendFile(input.target.files);

    if (input.target.value.length >= 2) {
      sendRef.current.style.pointerEvents = "all";
      sendRef.current.style.cursor = "pointer";
      sendRef.current.style.opacity = 1;

      if (input.target.files) {
        const formData = new FormData();

        formData.append("image", input.target.files[0]);
        formData.append("folder", "chat");

        dispatch(getMediaUrl(formData));

        inputRef.current.value = input.target.files[0].name;
      } else {
        setSendMessageData({
          ...sendMessageData,
          message: input.target.value,
        });
      }
    } else {
      sendRef.current.style.pointerEvents = "none";
      sendRef.current.style.opacity = 0.5;
    }
  };

  const handleClick = (type) => {
    if (type === "docs") {
      setShowDocs(!showDocs);
      setShowLinks(false);
    } else {
      setShowLinks(!showLinks);
      setShowDocs(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let mess;

    if (sendFile && mediaUrl) {
      mess = {
        message: mediaUrl.path,
        user_id: privateUser.id,
        type: 2,
        file: sendFile[0].name,
      };
    } else if (sendMessageData.message.slice(0, 4) === "http") {
      mess = {
        ...sendMessageData,
        user_id: privateUser.id,
        type: 3,
      };
    } else {
      mess = {
        ...sendMessageData,
        user_id: privateUser.id,
        type: 1,
      };
    }

    setSendMessageData(mess);

    dispatch(sendMessage(mess));

    inputRef.current.value = "";

    sendRef.current.style.pointerEvents = "none";
    sendRef.current.style.opacity = 0.5;
  };

  const handleDelete = (id) => {
    if (window.confirm(t("delete_message"))) {
      dispatch(deleteMessage(id));
      dispatch(
        getMessages({
          chat_id: privateChatRoomId,
          page: activePage,
        })
      );
    }
  };

  useEffect(() => {
    if (showDocs || showLinks) {
      setShow(false);
    } else {
      setShow(true);
    }

    if (showMessages) {
      if (showDocs || showLinks) {
        messagesRef.current.style.height = "calc(100% - 120px)";
      } else {
        messagesRef.current.style.height = "calc(100% - 190px)";
      }
    }
  }, [showDocs, showLinks]);

  useEffect(() => {
    if (showMessages) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [showMessages, activeUser, showDocs, showLinks, messages]);

  useEffect(() => {
    if (privateChatRoomId) {
      dispatch(
        getFiles({
          chat_id: privateChatRoomId,
          page: activePage,
        })
      );

      dispatch(
        getLinks({
          chat_id: privateChatRoomId,
          page: activePage,
        })
      );
    }
  }, [sendMessageData, activeUser]);

  let privateUser;

  if (chooseMember) {
    privateUser = chooseMember;
  } else {
    privateUser =
      messagesData &&
      messagesData?.users?.find((el) => el.id !== user.user_id.id);
  }

  const handleClick1 = () => {
    setActiveChat("private");
    setShowMessages(false);
    setShowGroupMessages(false);
    setActiveGroup(null);
    setActiveUser(null);
  };

  return (
    <div
      className={`private-message ${
        activeUser ? "private-message__block" : "private-message__none"
      }`}
    >
      {messagesData && showMessages ? (
        <div className="private-message__messages-header">
          <div className="private-message__left" onClick={handleClick1}>
            <img src={LeftIcon} alt="LeftIcon" />
          </div>
          <div className="private-message__picture">
            {privateUser.avatar ? (
              <img
                src={`${PORTAL_IMAGE_URL}${privateUser.avatar}`}
                alt="user"
              />
            ) : (
              privateUser.name.split(" ")[0] + privateUser.name.split(" ")[1]
            )}
          </div>
          <div className="private-message__name-status">
            {privateUser ? (
              <>
                <h4>{privateUser.name}</h4>
                {!privateUser.last_online_at ? (
                  <p>{t("Cabinet.user_online")}</p>
                ) : (
                  <p>
                    {t("Cabinet.last_seen")}{" "}
                    {privateUser.last_online_at.split(" ")[1].split(":")[0] +
                      ":" +
                      privateUser.last_online_at.split(" ")[1].split(":")[1]}
                  </p>
                )}
              </>
            ) : null}
          </div>
          <div
            className="private-message__docs"
            onClick={() => handleClick("docs")}
          >
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 0.5C8 0.223858 7.77614 0 7.5 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H12C14.2091 20 16 18.2091 16 16V8.5C16 8.22386 15.7761 8 15.5 8H13C10.2386 8 8 5.76142 8 3V0.5ZM15.2195 6C15.552 6 15.7909 5.67893 15.6312 5.3873C15.4956 5.13969 15.3245 4.91032 15.1213 4.70711L11.2929 0.87868C11.0897 0.675463 10.8603 0.504412 10.6127 0.368804C10.3211 0.209086 10 0.448045 10 0.780548V3C10 4.65685 11.3431 6 13 6H15.2195ZM5 7C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9H6C6.55228 9 7 8.55228 7 8C7 7.44772 6.55228 7 6 7H5ZM4 12C4 11.4477 4.44772 11 5 11H11C11.5523 11 12 11.4477 12 12C12 12.5523 11.5523 13 11 13H5C4.44772 13 4 12.5523 4 12ZM4 16C4 15.4477 4.44772 15 5 15H11C11.5523 15 12 15.4477 12 16C12 16.5523 11.5523 17 11 17H5C4.44772 17 4 16.5523 4 16Z"
                fill="#065EA9"
              />
            </svg>
          </div>
          <div
            className="private-message__links"
            onClick={() => handleClick("links")}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M14.4763 0.0586605C14.0974 0.132879 13.5544 0.308661 13.2458 0.468817C12.6364 0.773504 12.4216 0.964911 10.4021 2.98054C8.44895 4.92975 8.43723 4.94147 8.43723 5.10163C8.43723 5.37897 8.51926 5.41804 9.16379 5.46491C9.81223 5.51179 10.1872 5.5821 10.738 5.76569C11.0036 5.85554 11.1833 5.8946 11.2458 5.87897C11.3083 5.86335 11.8904 5.31257 12.7341 4.47663C13.531 3.68366 14.1989 3.05085 14.3005 2.99225C14.9529 2.61725 15.7693 2.62897 16.3747 3.01569C16.6247 3.17194 16.9607 3.54304 17.0857 3.79694C17.3005 4.23444 17.3474 4.78132 17.2068 5.24616C17.0661 5.71491 17.0466 5.73835 14.6404 8.1485C13.0896 9.70319 12.2693 10.4962 12.1247 10.586C11.7849 10.7891 11.5114 10.8673 11.113 10.8751C10.5466 10.8829 10.2263 10.7618 9.69114 10.336C9.32395 10.043 9.1091 9.961 8.70676 9.961C7.68332 9.961 7.07395 11.0157 7.55442 11.9454C7.58957 12.0118 7.71067 12.1563 7.82004 12.2696C8.5427 12.9766 9.47629 13.4258 10.5036 13.5587C11.0739 13.629 11.9997 13.5391 12.5779 13.3516C12.9529 13.2344 13.5661 12.9063 13.9021 12.6524C14.0661 12.5274 15.281 11.3399 16.6052 10.0118C18.613 7.99616 19.0505 7.54304 19.238 7.25397C19.5154 6.8321 19.738 6.3321 19.8708 5.8321C19.9685 5.47663 19.9763 5.39069 19.9763 4.66804C19.9763 3.94538 19.9685 3.85944 19.8708 3.50397C19.4216 1.8321 18.156 0.566473 16.4958 0.128973C16.1755 0.0469418 16.0075 0.0274105 15.4489 0.0156918C14.9724 0.00787926 14.6989 0.019598 14.4763 0.0586605Z"
                fill="#065EA9"
              />
              <path
                d="M8.30102 6.44929C7.56273 6.54695 6.69945 6.89461 6.10961 7.33601C5.92602 7.47664 4.82836 8.54695 3.39477 9.98445C0.781485 12.6094 0.715078 12.6876 0.386953 13.4454C0.125235 14.043 0.0353909 14.4571 0.0119534 15.1563C-0.0114841 15.8555 0.0471096 16.2891 0.242422 16.8555C0.39086 17.2969 0.500235 17.5118 0.773672 17.9298C1.46117 18.9688 2.50414 19.6641 3.75805 19.9259C4.1018 19.9962 4.25023 20.004 4.80492 19.9884C5.53148 19.9688 5.96117 19.879 6.52758 19.6329C7.28148 19.3087 7.3557 19.2462 9.5432 17.0704C11.5549 15.0665 11.5627 15.0587 11.5627 14.9024C11.5627 14.6251 11.4807 14.5821 10.8362 14.5352C10.1916 14.4884 9.82445 14.418 9.24633 14.2344C8.98461 14.1485 8.7932 14.1055 8.73852 14.1212C8.69164 14.1368 8.01977 14.7774 7.24633 15.543C6.44555 16.3399 5.76586 16.9844 5.6643 17.0391C4.29711 17.8165 2.61742 16.7891 2.70727 15.2384C2.7268 14.8399 2.83227 14.5235 3.02367 14.2462C3.09789 14.1329 4.19555 13.0118 5.45727 11.754C7.8557 9.35945 7.87914 9.33992 8.34789 9.19929C8.66039 9.10554 8.9807 9.08992 9.29711 9.15632C9.6682 9.23445 9.91039 9.35554 10.2737 9.64851C10.637 9.94148 10.8948 10.043 11.2698 10.043C11.8166 10.043 12.2659 9.7657 12.4846 9.28914C12.6409 8.94539 12.6448 8.51961 12.4924 8.19539C12.2893 7.75789 11.6955 7.25398 10.9573 6.8907C10.1213 6.48445 9.21898 6.33601 8.30102 6.44929Z"
                fill="#065EA9"
              />
            </svg>
          </div>
        </div>
      ) : null}

      {showMessages ? (
        <div className="private-message__messages-body" ref={messagesRef}>
          <ChatDocs
            docsData={filesData}
            setShowDocs={setShowDocs}
            showDocs={showDocs}
          />
          <ChatLinks
            linksData={linksData}
            setShowLinks={setShowLinks}
            showLinks={showLinks}
          />
          {activeUser || chooseMember ? (
            <div
              className={`private-message__messages-container ${
                show ? "show-messages" : ""
              }`}
            >
              {messages?.map((message) => {
                const userId = user.user_id ? user.user_id.id : user.id;
                return message ? (
                  message.user.id !== userId ? (
                    <div
                      key={message.id}
                      className="private-message__received-container"
                    >
                      <div className="private-message__received-user">
                        <img
                          src={`${PORTAL_IMAGE_URL}${
                            message.user.avatar
                              ? message.user.avatar
                              : message.user.name[0]
                          }`}
                          alt="user"
                        />
                      </div>
                      <div className="private-message__received-details">
                        <p className="private-message__received-message">
                          {message?.type === 2 ? (
                            <a
                              href={`${PORTAL_IMAGE_URL}${message?.message}`}
                              target="_blank"
                              download
                            >
                              <svg
                                width="16"
                                height="20"
                                viewBox="0 0 16 20"
                                fill="none"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8 0.5C8 0.223858 7.77614 0 7.5 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H12C14.2091 20 16 18.2091 16 16V8.5C16 8.22386 15.7761 8 15.5 8H13C10.2386 8 8 5.76142 8 3V0.5ZM15.2195 6C15.552 6 15.7909 5.67893 15.6312 5.3873C15.4956 5.13969 15.3245 4.91032 15.1213 4.70711L11.2929 0.87868C11.0897 0.675463 10.8603 0.504412 10.6127 0.368804C10.3211 0.209086 10 0.448045 10 0.780548V3C10 4.65685 11.3431 6 13 6H15.2195ZM5 7C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9H6C6.55228 9 7 8.55228 7 8C7 7.44772 6.55228 7 6 7H5ZM4 12C4 11.4477 4.44772 11 5 11H11C11.5523 11 12 11.4477 12 12C12 12.5523 11.5523 13 11 13H5C4.44772 13 4 12.5523 4 12ZM4 16C4 15.4477 4.44772 15 5 15H11C11.5523 15 12 15.4477 12 16C12 16.5523 11.5523 17 11 17H5C4.44772 17 4 16.5523 4 16Z"
                                  fill="#065EA9"
                                />
                              </svg>
                              {message?.file.split(".")[0].slice(0, 20) +
                                "." +
                                message?.message.split("/")[1].split(".")[1]}
                            </a>
                          ) : message?.type === 3 ? (
                            <a
                              href={`${message?.message}`}
                              style={{ textDecoration: "underline" }}
                              target="_black"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <path
                                  d="M14.4763 0.0586605C14.0974 0.132879 13.5544 0.308661 13.2458 0.468817C12.6364 0.773504 12.4216 0.964911 10.4021 2.98054C8.44895 4.92975 8.43723 4.94147 8.43723 5.10163C8.43723 5.37897 8.51926 5.41804 9.16379 5.46491C9.81223 5.51179 10.1872 5.5821 10.738 5.76569C11.0036 5.85554 11.1833 5.8946 11.2458 5.87897C11.3083 5.86335 11.8904 5.31257 12.7341 4.47663C13.531 3.68366 14.1989 3.05085 14.3005 2.99225C14.9529 2.61725 15.7693 2.62897 16.3747 3.01569C16.6247 3.17194 16.9607 3.54304 17.0857 3.79694C17.3005 4.23444 17.3474 4.78132 17.2068 5.24616C17.0661 5.71491 17.0466 5.73835 14.6404 8.1485C13.0896 9.70319 12.2693 10.4962 12.1247 10.586C11.7849 10.7891 11.5114 10.8673 11.113 10.8751C10.5466 10.8829 10.2263 10.7618 9.69114 10.336C9.32395 10.043 9.1091 9.961 8.70676 9.961C7.68332 9.961 7.07395 11.0157 7.55442 11.9454C7.58957 12.0118 7.71067 12.1563 7.82004 12.2696C8.5427 12.9766 9.47629 13.4258 10.5036 13.5587C11.0739 13.629 11.9997 13.5391 12.5779 13.3516C12.9529 13.2344 13.5661 12.9063 13.9021 12.6524C14.0661 12.5274 15.281 11.3399 16.6052 10.0118C18.613 7.99616 19.0505 7.54304 19.238 7.25397C19.5154 6.8321 19.738 6.3321 19.8708 5.8321C19.9685 5.47663 19.9763 5.39069 19.9763 4.66804C19.9763 3.94538 19.9685 3.85944 19.8708 3.50397C19.4216 1.8321 18.156 0.566473 16.4958 0.128973C16.1755 0.0469418 16.0075 0.0274105 15.4489 0.0156918C14.9724 0.00787926 14.6989 0.019598 14.4763 0.0586605Z"
                                  fill="#065EA9"
                                />
                                <path
                                  d="M8.30102 6.44929C7.56273 6.54695 6.69945 6.89461 6.10961 7.33601C5.92602 7.47664 4.82836 8.54695 3.39477 9.98445C0.781485 12.6094 0.715078 12.6876 0.386953 13.4454C0.125235 14.043 0.0353909 14.4571 0.0119534 15.1563C-0.0114841 15.8555 0.0471096 16.2891 0.242422 16.8555C0.39086 17.2969 0.500235 17.5118 0.773672 17.9298C1.46117 18.9688 2.50414 19.6641 3.75805 19.9259C4.1018 19.9962 4.25023 20.004 4.80492 19.9884C5.53148 19.9688 5.96117 19.879 6.52758 19.6329C7.28148 19.3087 7.3557 19.2462 9.5432 17.0704C11.5549 15.0665 11.5627 15.0587 11.5627 14.9024C11.5627 14.6251 11.4807 14.5821 10.8362 14.5352C10.1916 14.4884 9.82445 14.418 9.24633 14.2344C8.98461 14.1485 8.7932 14.1055 8.73852 14.1212C8.69164 14.1368 8.01977 14.7774 7.24633 15.543C6.44555 16.3399 5.76586 16.9844 5.6643 17.0391C4.29711 17.8165 2.61742 16.7891 2.70727 15.2384C2.7268 14.8399 2.83227 14.5235 3.02367 14.2462C3.09789 14.1329 4.19555 13.0118 5.45727 11.754C7.8557 9.35945 7.87914 9.33992 8.34789 9.19929C8.66039 9.10554 8.9807 9.08992 9.29711 9.15632C9.6682 9.23445 9.91039 9.35554 10.2737 9.64851C10.637 9.94148 10.8948 10.043 11.2698 10.043C11.8166 10.043 12.2659 9.7657 12.4846 9.28914C12.6409 8.94539 12.6448 8.51961 12.4924 8.19539C12.2893 7.75789 11.6955 7.25398 10.9573 6.8907C10.1213 6.48445 9.21898 6.33601 8.30102 6.44929Z"
                                  fill="#065EA9"
                                />
                              </svg>
                              {message?.message.slice(0, 40)}
                            </a>
                          ) : (
                            message?.message
                          )}
                        </p>
                        <span>
                          {message.created_at
                            .split("T")[1]
                            .split(".")[0]
                            .split(":")[0] +
                            ":" +
                            message.created_at
                              .split("T")[1]
                              .split(".")[0]
                              .split(":")[1]}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div
                      key={message.id}
                      className="private-message__sent-container"
                    >
                      <div className="private-message__sent-details">
                        <div className="private-message__delete-message">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 12 12"
                            fill="none"
                            onClick={() => handleDelete(message?.id)}
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.5 3.5C1.5 3.22386 1.72386 3 2 3H10C10.2761 3 10.5 3.22386 10.5 3.5C10.5 3.77614 10.2761 4 10 4H2C1.72386 4 1.5 3.77614 1.5 3.5Z"
                              fill="#BD3232"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5 5.125C5.20711 5.125 5.375 5.29289 5.375 5.5V8.5C5.375 8.70711 5.20711 8.875 5 8.875C4.79289 8.875 4.625 8.70711 4.625 8.5V5.5C4.625 5.29289 4.79289 5.125 5 5.125Z"
                              fill="#BD3232"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7 5.125C7.20711 5.125 7.375 5.29289 7.375 5.5V8.5C7.375 8.70711 7.20711 8.875 7 8.875C6.79289 8.875 6.625 8.70711 6.625 8.5V5.5C6.625 5.29289 6.79289 5.125 7 5.125Z"
                              fill="#BD3232"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.46888 3.12632C2.67527 3.10912 2.85653 3.26249 2.87373 3.46888L3.37373 9.46888C3.37459 9.47924 3.37502 9.48963 3.37502 9.50002C3.37502 9.66578 3.44087 9.82475 3.55808 9.94196C3.67529 10.0592 3.83426 10.125 4.00002 10.125H8.00002C8.16578 10.125 8.32475 10.0592 8.44196 9.94196C8.55917 9.82475 8.62502 9.66578 8.62502 9.50002C8.62502 9.48963 8.62545 9.47924 8.62632 9.46888L9.12632 3.46888C9.14352 3.26249 9.32477 3.10912 9.53116 3.12632C9.73756 3.14352 9.89093 3.32477 9.87373 3.53116L9.37492 9.51685C9.37053 9.87544 9.22619 10.2184 8.97229 10.4723C8.71443 10.7302 8.3647 10.875 8.00002 10.875H4.00002C3.63535 10.875 3.28561 10.7302 3.02775 10.4723C2.77386 10.2184 2.62951 9.87544 2.62512 9.51685L2.12632 3.53116C2.10912 3.32477 2.26249 3.14352 2.46888 3.12632Z"
                              fill="#BD3232"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5 1.875C4.96685 1.875 4.93505 1.88817 4.91161 1.91161C4.88817 1.93505 4.875 1.96685 4.875 2V3.5C4.875 3.70711 4.70711 3.875 4.5 3.875C4.29289 3.875 4.125 3.70711 4.125 3.5V2C4.125 1.76794 4.21719 1.54538 4.38128 1.38128C4.54538 1.21719 4.76794 1.125 5 1.125H7C7.23206 1.125 7.45462 1.21719 7.61872 1.38128C7.78281 1.54538 7.875 1.76794 7.875 2V3.5C7.875 3.70711 7.70711 3.875 7.5 3.875C7.29289 3.875 7.125 3.70711 7.125 3.5V2C7.125 1.96685 7.11183 1.93505 7.08839 1.91161C7.06495 1.88817 7.03315 1.875 7 1.875H5Z"
                              fill="#BD3232"
                            />
                          </svg>
                          <p className="private-message__sent-message">
                            {message?.type === 2 ? (
                              <a
                                href={`${PORTAL_IMAGE_URL}${message?.message}`}
                                target="_blank"
                                download
                              >
                                <svg
                                  width="16"
                                  height="20"
                                  viewBox="0 0 16 20"
                                  fill="none"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8 0.5C8 0.223858 7.77614 0 7.5 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H12C14.2091 20 16 18.2091 16 16V8.5C16 8.22386 15.7761 8 15.5 8H13C10.2386 8 8 5.76142 8 3V0.5ZM15.2195 6C15.552 6 15.7909 5.67893 15.6312 5.3873C15.4956 5.13969 15.3245 4.91032 15.1213 4.70711L11.2929 0.87868C11.0897 0.675463 10.8603 0.504412 10.6127 0.368804C10.3211 0.209086 10 0.448045 10 0.780548V3C10 4.65685 11.3431 6 13 6H15.2195ZM5 7C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9H6C6.55228 9 7 8.55228 7 8C7 7.44772 6.55228 7 6 7H5ZM4 12C4 11.4477 4.44772 11 5 11H11C11.5523 11 12 11.4477 12 12C12 12.5523 11.5523 13 11 13H5C4.44772 13 4 12.5523 4 12ZM4 16C4 15.4477 4.44772 15 5 15H11C11.5523 15 12 15.4477 12 16C12 16.5523 11.5523 17 11 17H5C4.44772 17 4 16.5523 4 16Z"
                                    fill="#fff"
                                  />
                                </svg>
                                {message?.file.split(".")[0].slice(0, 20) +
                                  "." +
                                  message?.message.split("/")[1].split(".")[1]}
                              </a>
                            ) : message?.type === 3 ? (
                              <a
                                href={`${message?.message}`}
                                style={{ textDecoration: "underline" }}
                                target="_black"
                              >
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <path
                                    d="M14.4763 0.0586605C14.0974 0.132879 13.5544 0.308661 13.2458 0.468817C12.6364 0.773504 12.4216 0.964911 10.4021 2.98054C8.44895 4.92975 8.43723 4.94147 8.43723 5.10163C8.43723 5.37897 8.51926 5.41804 9.16379 5.46491C9.81223 5.51179 10.1872 5.5821 10.738 5.76569C11.0036 5.85554 11.1833 5.8946 11.2458 5.87897C11.3083 5.86335 11.8904 5.31257 12.7341 4.47663C13.531 3.68366 14.1989 3.05085 14.3005 2.99225C14.9529 2.61725 15.7693 2.62897 16.3747 3.01569C16.6247 3.17194 16.9607 3.54304 17.0857 3.79694C17.3005 4.23444 17.3474 4.78132 17.2068 5.24616C17.0661 5.71491 17.0466 5.73835 14.6404 8.1485C13.0896 9.70319 12.2693 10.4962 12.1247 10.586C11.7849 10.7891 11.5114 10.8673 11.113 10.8751C10.5466 10.8829 10.2263 10.7618 9.69114 10.336C9.32395 10.043 9.1091 9.961 8.70676 9.961C7.68332 9.961 7.07395 11.0157 7.55442 11.9454C7.58957 12.0118 7.71067 12.1563 7.82004 12.2696C8.5427 12.9766 9.47629 13.4258 10.5036 13.5587C11.0739 13.629 11.9997 13.5391 12.5779 13.3516C12.9529 13.2344 13.5661 12.9063 13.9021 12.6524C14.0661 12.5274 15.281 11.3399 16.6052 10.0118C18.613 7.99616 19.0505 7.54304 19.238 7.25397C19.5154 6.8321 19.738 6.3321 19.8708 5.8321C19.9685 5.47663 19.9763 5.39069 19.9763 4.66804C19.9763 3.94538 19.9685 3.85944 19.8708 3.50397C19.4216 1.8321 18.156 0.566473 16.4958 0.128973C16.1755 0.0469418 16.0075 0.0274105 15.4489 0.0156918C14.9724 0.00787926 14.6989 0.019598 14.4763 0.0586605Z"
                                    fill="#fff"
                                  />
                                  <path
                                    d="M8.30102 6.44929C7.56273 6.54695 6.69945 6.89461 6.10961 7.33601C5.92602 7.47664 4.82836 8.54695 3.39477 9.98445C0.781485 12.6094 0.715078 12.6876 0.386953 13.4454C0.125235 14.043 0.0353909 14.4571 0.0119534 15.1563C-0.0114841 15.8555 0.0471096 16.2891 0.242422 16.8555C0.39086 17.2969 0.500235 17.5118 0.773672 17.9298C1.46117 18.9688 2.50414 19.6641 3.75805 19.9259C4.1018 19.9962 4.25023 20.004 4.80492 19.9884C5.53148 19.9688 5.96117 19.879 6.52758 19.6329C7.28148 19.3087 7.3557 19.2462 9.5432 17.0704C11.5549 15.0665 11.5627 15.0587 11.5627 14.9024C11.5627 14.6251 11.4807 14.5821 10.8362 14.5352C10.1916 14.4884 9.82445 14.418 9.24633 14.2344C8.98461 14.1485 8.7932 14.1055 8.73852 14.1212C8.69164 14.1368 8.01977 14.7774 7.24633 15.543C6.44555 16.3399 5.76586 16.9844 5.6643 17.0391C4.29711 17.8165 2.61742 16.7891 2.70727 15.2384C2.7268 14.8399 2.83227 14.5235 3.02367 14.2462C3.09789 14.1329 4.19555 13.0118 5.45727 11.754C7.8557 9.35945 7.87914 9.33992 8.34789 9.19929C8.66039 9.10554 8.9807 9.08992 9.29711 9.15632C9.6682 9.23445 9.91039 9.35554 10.2737 9.64851C10.637 9.94148 10.8948 10.043 11.2698 10.043C11.8166 10.043 12.2659 9.7657 12.4846 9.28914C12.6409 8.94539 12.6448 8.51961 12.4924 8.19539C12.2893 7.75789 11.6955 7.25398 10.9573 6.8907C10.1213 6.48445 9.21898 6.33601 8.30102 6.44929Z"
                                    fill="#fff"
                                  />
                                </svg>
                                {message?.message.slice(0, 40)}
                              </a>
                            ) : (
                              message?.message
                            )}
                          </p>
                        </div>
                        <span>
                          {message.created_at
                            .split("T")[1]
                            .split(".")[0]
                            .split(":")[0] +
                            ":" +
                            message.created_at
                              .split("T")[1]
                              .split(".")[0]
                              .split(":")[1]}
                        </span>
                      </div>
                      <div className="private-message__sent-user">
                        <img
                          src={`${PORTAL_IMAGE_URL}${
                            user.avatar_url ? user.avatar_url : user.avatar
                          }`}
                          alt="user"
                        />
                      </div>
                    </div>
                  )
                ) : null;
              })}
            </div>
          ) : (
            <p className="private-message__no-user">
              {t("Cabinet.start_chat")}
            </p>
          )}
          {messagesLoading && (
            <div className="private-message__loading">
              <Spinner />
            </div>
          )}
        </div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <div
          className={`private-message__messages-bottom ${
            (showMessages && show) || chooseMember ? "show-bottom" : ""
          }`}
        >
          <svg
            className="private-message__file"
            width="11"
            height="22"
            viewBox="0 0 11 22"
            fill="none"
            onClick={() => uploadRef.current.click()}
          >
            <path
              d="M9.5 5V16.5C9.5 18.71 7.71 20.5 5.5 20.5C3.29 20.5 1.5 18.71 1.5 16.5V4C1.5 2.62 2.62 1.5 4 1.5C5.38 1.5 6.5 2.62 6.5 4V14.5C6.5 15.05 6.05 15.5 5.5 15.5C4.95 15.5 4.5 15.05 4.5 14.5V5H3V14.5C3 15.88 4.12 17 5.5 17C6.88 17 8 15.88 8 14.5V4C8 1.79 6.21 0 4 0C1.79 0 0 1.79 0 4V16.5C0 19.54 2.46 22 5.5 22C8.54 22 11 19.54 11 16.5V5H9.5Z"
              fill="#065EA9"
            />
          </svg>
          <input
            ref={uploadRef}
            onChange={(e) => handleChange(e)}
            type="file"
            name="file"
            className="group-message__file-upload"
            accept="application/pdf,application/msword,
            application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          />
          <button className="private-message__send" ref={sendRef}>
            <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
              <path
                d="M0.674959 15.5L18.1666 8L0.674959 0.5L0.666626 6.33333L13.1666 8L0.666626 9.66667L0.674959 15.5Z"
                fill="white"
              />
            </svg>
          </button>
          <input
            ref={inputRef}
            onChange={(e) => handleChange(e)}
            type="text"
            className="private-message__send-message"
            placeholder="Type message..."
          />
        </div>
      </form>
    </div>
  );
};

export default PrivateMessages;
