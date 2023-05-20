import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ChatDocs from "../chatDocs/ChatDocs";
import ChatLinks from "../chatLinks/ChatLinks";
import Spinner from "../../../../../../../component/Spinner/Spinner";
import { sendMessage } from "../../../../../../../reduxToolkit/chatSlice/extraReducer";

import "./groupsMessages.scss";

import userImg from "../../../../../../../assets/images/cabinet/user.png";
import GroupMembers from "../groupMembers/GroupMembers";

const GroupsMessages = ({
  groupData,
  showGroupMessages,
  activeGroup,
  setShowDocs,
  showDocs,
  setShowLinks,
  showLinks,
  setShowMembers,
  showMembers,
}) => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const sendRef = useRef();
  const messagesRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(true);
  const [sendMessageData, setSendMessageData] = useState({
    chat_room_id: null,
    message: "",
    type: null,
  });

  const messagesLoading = useSelector(
    (state) => state.chatSlice.messagesLoading
  );
  const messagesData = useSelector((state) => state.chatSlice.messagesData);
  const sendMessageStatus = useSelector(
    (state) => state.chatSlice.sendMessageStatus
  );

  const messages = [
    {
      id: 1,
      user_id: 1,
      message_time: "20:00 PM",
      message:
        "Lorem1 ipsum dolor sit amet consectetur adipisicing elit. Id, veniam! Eos repellat excepturi repellendus quo.",
    },
    {
      id: 2,
      user_id: 6,
      message_time: "20:03 PM",
      message:
        "Lorem6 ipsum dolor sit amet consectetur adipisicing elit. Id, veniam! Eos repellat excepturi repellendus quo.",
    },
    {
      id: 3,
      user_id: 1,
      message_time: "20:06 PM",
      message:
        "Lorem1 ipsum dolor sit amet consectetur adipisicing elit. Id, veniam! Eos repellat excepturi repellendus quo.",
    },
    {
      id: 4,
      user_id: 3,
      message_time: "20:10 PM",
      message:
        "Lorem3 ipsum dolor sit amet consectetur adipisicing elit. Id, veniam! Eos repellat excepturi repellendus quo.",
    },
    {
      id: 5,
      user_id: 6,
      message_time: "20:12 PM",
      message:
        "Lorem6 ipsum dolor sit amet consectetur adipisicing elit. Id, veniam! Eos repellat excepturi repellendus quo.",
    },
    {
      id: 6,
      user_id: 2,
      message_time: "21:00 PM",
      message:
        "Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Id, veniam! Eos repellat excepturi repellendus quo.",
    },
    {
      id: 7,
      user_id: 5,
      message_time: "21:10 PM",
      message:
        "Lorem5 ipsum dolor sit amet consectetur adipisicing elit. Id, veniam! Eos repellat excepturi repellendus quo.",
    },
    {
      id: 8,
      user_id: 5,
      message_time: "21:20 PM",
      message:
        "Lorem5 ipsum dolor sit amet consectetur adipisicing elit. Id, veniam! Eos repellat excepturi repellendus quo.",
    },
    {
      id: 9,
      user_id: 4,
      message_time: "21:21 PM",
      message:
        "Lorem4 ipsum dolor sit amet consectetur adipisicing elit. Id, veniam! Eos repellat excepturi repellendus quo.",
    },
  ];

  const docs = [
    { id: 1, name: "Group Ekspertlar1 kengashi guruhi.pdf" },
    { id: 2, name: "Group Ekspertlar2 kengashi guruhi.pdf" },
    { id: 3, name: "Group Ekspertlar3 kengashi guruhi.pdf" },
    { id: 4, name: "Group Ekspertlar4 kengashi guruhi.pdf" },
    { id: 5, name: "Group Ekspertlar5 kengashi guruhi.pdf" },
    { id: 6, name: "Group Ekspertlar6 kengashi guruhi.pdf" },
    { id: 7, name: "Group Ekspertlar7 kengashi guruhi.pdf" },
    { id: 8, name: "Group Ekspertlar8 kengashi guruhi.pdf" },
    { id: 9, name: "Group Ekspertlar9 kengashi guruhi.pdf" },
    { id: 10, name: "Group Ekspertlar10 kengashi guruhi.pdf" },
  ];

  const links = [
    { id: 1, url: "https://Group Ekspertlar1 kengashi guruhi.link" },
    { id: 2, url: "https://Group Ekspertlar2 kengashi guruhi.link" },
    { id: 3, url: "https://Group Ekspertlar3 kengashi guruhi.link" },
    { id: 4, url: "https://Group Ekspertlar4 kengashi guruhi.link" },
    { id: 5, url: "https://Group Ekspertlar5 kengashi guruhi.link" },
    { id: 6, url: "https://Group Ekspertlar6 kengashi guruhi.link" },
    { id: 7, url: "https://Group Ekspertlar7 kengashi guruhi.link" },
    { id: 8, url: "https://Group Ekspertlar8 kengashi guruhi.link" },
    { id: 9, url: "https://Group Ekspertlar9 kengashi guruhi.link" },
    { id: 10, url: "https://Group Ekspertlar10 kengashi guruhi.link" },
    { id: 11, url: "https://Group Ekspertlar11 kengashi guruhi.link" },
    { id: 12, url: "https://Group Ekspertlar12 kengashi guruhi.link" },
    { id: 13, url: "https://Group Ekspertlar13 kengashi guruhi.link" },
    { id: 14, url: "https://Group Ekspertlar14 kengashi guruhi.link" },
    { id: 15, url: "https://Group Ekspertlar15 kengashi guruhi.link" },
  ];

  const handleChange = (input) => {
    if (input.target.value !== "") {
      sendRef.current.style.pointerEvents = "all";
      sendRef.current.style.cursor = "pointer";
      sendRef.current.style.opacity = 1;

      setSendMessageData({ ...sendMessageData, message: input.target.value });
    } else {
      sendRef.current.style.pointerEvents = "none";
      sendRef.current.style.opacity = 0.5;
    }
  };

  const handleClick = (type) => {
    setShowModal(!showModal);

    if (type === "docs") {
      setShowDocs(!showDocs);
      setShowLinks(false);
      setShowMembers(false);
    } else if (type === "links") {
      setShowLinks(!showLinks);
      setShowDocs(false);
      setShowMembers(false);
    } else {
      setShowMembers(!showMembers);
      setShowLinks(false);
      setShowDocs(false);
    }
  };

  const handleSend = () => {
    setSendMessageData({
      ...sendMessageData,
      chat_room_id: groupData.group.chat_room_id,
      type: 1,
    });

    dispatch(
      sendMessage({
        ...sendMessageData,
        chat_room_id: groupData.group.chat_room_id,
        type: 1,
      })
    );

    inputRef.current.value = "";
  };

  useEffect(() => {
    if (showDocs || showLinks || showMembers) {
      setShow(false);
    } else {
      setShow(true);
    }

    if (messagesRef.current) {
      if (showDocs || showLinks || showMembers) {
        messagesRef.current.style.height = "calc(100% - 120px)";
      } else {
        messagesRef.current.style.height = "calc(100% - 190px)";
      }
    }
  }, [showDocs, showLinks, showMembers]);

  useEffect(() => {
    // console.log(messagesRef.current);
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
      // console.log("Working: ", messagesRef.current.scrollTop);
    }

    // console.log("group: ", activeGroup);
  }, [
    showGroupMessages,
    activeGroup,
    showDocs,
    showLinks,
    showMembers,
    sendMessageStatus,
  ]);

  if (messagesLoading) {
    return <Spinner position="full" />;
  }

  return (
    <div className="group-message">
      {groupData ? (
        <div className="group-message__messages-header">
          <div className="group-message__picture">{groupData.groupImg}</div>
          <div className="group-message__name-status">
            <h4>{groupData.group.name}</h4>
            {groupData.group.online_count > 0 ? (
              <p>
                {groupData.group.users_count} ta a'zo,{" "}
                {groupData.group.online_count} ta online
              </p>
            ) : (
              <p>{groupData.group.users_count} ta a'zo</p>
            )}
          </div>
          <div className="group-message__extra-functions">
            <div
              className="group-message__three-dots"
              onClick={() => setShowModal(!showModal)}
            >
              <svg width="4" height="18" viewBox="0 0 4 18" fill="none">
                <path
                  d="M2 4C2.39556 4 2.78224 3.8827 3.11114 3.66294C3.44004 3.44318 3.69639 3.13082 3.84776 2.76537C3.99914 2.39992 4.03874 1.99778 3.96157 1.60982C3.8844 1.22186 3.69392 0.865492 3.41421 0.585787C3.13451 0.306082 2.77814 0.115601 2.39018 0.0384303C2.00222 -0.0387401 1.60009 0.000866562 1.23463 0.152242C0.869182 0.303617 0.556825 0.559962 0.337062 0.88886C0.117299 1.21776 1.07779e-06 1.60444 1.07779e-06 2C1.07779e-06 2.53043 0.210715 3.03914 0.585788 3.41421C0.960861 3.78929 1.46957 4 2 4ZM2 14C1.60444 14 1.21776 14.1173 0.888861 14.3371C0.559963 14.5568 0.303617 14.8692 0.152242 15.2346C0.000866562 15.6001 -0.0387401 16.0022 0.0384303 16.3902C0.115601 16.7781 0.306083 17.1345 0.585788 17.4142C0.865493 17.6939 1.22186 17.8844 1.60982 17.9616C1.99778 18.0387 2.39992 17.9991 2.76537 17.8478C3.13082 17.6964 3.44318 17.44 3.66294 17.1111C3.8827 16.7822 4 16.3956 4 16C4 15.4696 3.78929 14.9609 3.41421 14.5858C3.03914 14.2107 2.53043 14 2 14ZM2 7C1.60444 7 1.21776 7.1173 0.888861 7.33706C0.559963 7.55682 0.303617 7.86918 0.152242 8.23463C0.000866562 8.60009 -0.0387401 9.00222 0.0384303 9.39018C0.115601 9.77814 0.306083 10.1345 0.585788 10.4142C0.865493 10.6939 1.22186 10.8844 1.60982 10.9616C1.99778 11.0387 2.39992 10.9991 2.76537 10.8478C3.13082 10.6964 3.44318 10.44 3.66294 10.1111C3.8827 9.78224 4 9.39556 4 9C4 8.46957 3.78929 7.96086 3.41421 7.58579C3.03914 7.21071 2.53043 7 2 7Z"
                  fill="#065EA9"
                />
              </svg>
            </div>
            <div
              className={`group-message__modal ${
                showModal ? "show-modal" : ""
              }`}
            >
              <div
                className="group-message__chat-icon"
                onClick={() => {
                  setShowModal(!showModal);
                  setShowDocs(false);
                  setShowLinks(false);
                  setShowMembers(false);
                }}
              >
                <svg width="22" height="21" viewBox="0 0 22 21" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 0.25C2.82436 0.25 0.25 2.82436 0.25 6V18.9194C0.25 20.3868 1.94738 21.2026 3.09322 20.2859L5.92069 18.0239C6.14233 17.8466 6.41772 17.75 6.70156 17.75H16C19.1756 17.75 21.75 15.1756 21.75 12V6C21.75 2.82436 19.1756 0.25 16 0.25H6ZM6.0498 10.2998C6.74016 10.2998 7.2998 9.74016 7.2998 9.0498C7.2998 8.35945 6.74016 7.7998 6.0498 7.7998C5.35945 7.7998 4.7998 8.35945 4.7998 9.0498C4.7998 9.74016 5.35945 10.2998 6.0498 10.2998ZM12.2998 9.0498C12.2998 9.74016 11.7402 10.2998 11.0498 10.2998C10.3594 10.2998 9.7998 9.74016 9.7998 9.0498C9.7998 8.35945 10.3594 7.7998 11.0498 7.7998C11.7402 7.7998 12.2998 8.35945 12.2998 9.0498ZM16.0498 10.2998C16.7402 10.2998 17.2998 9.74016 17.2998 9.0498C17.2998 8.35945 16.7402 7.7998 16.0498 7.7998C15.3594 7.7998 14.7998 8.35945 14.7998 9.0498C14.7998 9.74016 15.3594 10.2998 16.0498 10.2998Z"
                    fill="#065EA9"
                  />
                </svg>
                <span>Chat</span>
              </div>
              <div
                className="group-message__docs"
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
                <span>Docs</span>
              </div>
              <div
                className="group-message__links"
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
                <span>Links</span>
              </div>
              <div
                className="group-message__members"
                onClick={() => handleClick("members")}
              >
                <svg width="22" height="17" viewBox="0 0 22 17" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.307 14.9195C19.3614 14.9267 19.4159 14.9341 19.4703 14.9417L19.7438 14.9801C20.9346 15.1472 22 14.2396 22 13.058V12.1562C22 11.3112 21.4592 10.5573 20.649 10.2731C19.7129 9.94474 18.7466 9.73092 17.7711 9.63168C18.789 10.3676 19.4203 11.5593 19.4203 12.8594V13.979C19.4203 14.3042 19.3809 14.619 19.307 14.9195ZM15.1811 8.43204C15.5868 8.59951 16.0324 8.69206 16.5 8.69206C18.3813 8.69206 19.9064 7.19399 19.9064 5.34603C19.9064 3.49807 18.3813 2 16.5 2C16.4443 2 16.3889 2.00131 16.3338 2.00391C16.6759 2.73253 16.8671 3.54606 16.8671 4.40426C16.8671 5.98076 16.2219 7.40657 15.1811 8.43204Z"
                    fill="#065EA9"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.07387 14.9195C3.01942 14.9267 2.96499 14.9341 2.91058 14.9417L2.63707 14.9801C1.44625 15.1472 0.380836 14.2396 0.380836 13.058V12.1562C0.380836 11.3112 0.92166 10.5573 1.73185 10.2731C2.66791 9.94474 3.63427 9.73092 4.60979 9.63168C3.59191 10.3676 2.96057 11.5593 2.96057 12.8594V13.979C2.96057 14.3042 2.99992 14.619 3.07387 14.9195ZM7.19971 8.43204C6.79406 8.59951 6.34845 8.69206 5.88084 8.69206C3.99952 8.69206 2.47442 7.19399 2.47442 5.34603C2.47442 3.49807 3.99952 2 5.88084 2C5.93657 2 5.992 2.00131 6.04707 2.00391C5.70496 2.73253 5.51377 3.54606 5.51377 4.40426C5.51377 5.98076 6.15896 7.40657 7.19971 8.43204Z"
                    fill="#065EA9"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.3671 4.40426C15.3671 2.10992 13.5071 0.25 11.2128 0.25C8.91848 0.25 7.05856 2.10992 7.05856 4.40426C7.05856 6.69859 8.91848 8.55851 11.2128 8.55851C13.5071 8.55851 15.3671 6.69859 15.3671 4.40426Z"
                    fill="#065EA9"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.15298 10.5215C9.425 9.35288 13.0006 9.35288 16.2727 10.5215C17.2607 10.8743 17.9203 11.8103 17.9203 12.8594V13.979C17.9203 15.446 16.621 16.5729 15.1687 16.3654L14.8351 16.3178C12.4325 15.9745 9.99318 15.9745 7.59049 16.3178L7.25693 16.3654C5.80468 16.5729 4.50537 15.446 4.50537 13.979V12.8594C4.50537 11.8103 5.16492 10.8743 6.15298 10.5215Z"
                    fill="#065EA9"
                  />
                </svg>
                <span>Members</span>
              </div>
              <div
                className="group-message__logout"
                onClick={() => setShowModal(!showModal)}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 0H9C11.2091 0 13 1.79086 13 4V9.25L6 9.25C5.58579 9.25 5.25 9.58579 5.25 10C5.25 10.4142 5.58579 10.75 6 10.75L13 10.75V16C13 18.2091 11.2091 20 9 20H4C1.79086 20 0 18.2091 0 16V14V6V4C0 1.79086 1.79086 0 4 0ZM13 10.75H17.1893L15.4697 12.4697C15.1768 12.7626 15.1768 13.2374 15.4697 13.5303C15.7626 13.8232 16.2374 13.8232 16.5303 13.5303L18.8232 11.2374C19.5066 10.554 19.5066 9.44598 18.8232 8.76256L16.5303 6.46967C16.2374 6.17678 15.7626 6.17678 15.4697 6.46967C15.1768 6.76256 15.1768 7.23744 15.4697 7.53033L17.1893 9.25H13V10.75Z"
                    fill="#EB5757"
                  />
                </svg>
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="group-message__messages-body" ref={messagesRef}>
        <ChatDocs docsData={docs} showDocs={showDocs} />
        <ChatLinks linksData={links} showLinks={showLinks} />
        <GroupMembers members={messagesData?.users} showMembers={showMembers} />
        {activeGroup ? (
          <div
            className={`group-message__messages-container ${
              show ? "show-messages" : ""
            }`}
          >
            {messagesData?.messages.data.map((message) =>
              message.user_id === activeGroup ? (
                <div
                  key={message.id}
                  className="group-message__received-container"
                >
                  <div className="group-message__received-user">
                    {groupData && <img src={groupData.groupImg.props.src} />}
                  </div>
                  <div className="group-message__received-details">
                    <p className="group-message__received-message">
                      {message.message}
                    </p>
                    <span>
                      {message.created_at.split("T")[1].split(".")[0]}
                    </span>
                  </div>
                </div>
              ) : (
                <div key={message.id} className="group-message__sent-container">
                  <div className="group-message__sent-details">
                    <p className="group-message__sent-message">
                      {message.message}
                    </p>
                    <span>{message.message_time}</span>
                  </div>
                  <div className="group-message__sent-user">
                    <img src={userImg} alt="user" />
                  </div>
                </div>
              )
            )}
          </div>
        ) : (
          <p className="group-message__no-group">
            Select a chat to start messaging
          </p>
        )}
      </div>
      <div
        className={`group-message__messages-bottom ${
          showGroupMessages && show ? "show" : ""
        }`}
      >
        <svg
          className="group-message__file"
          width="11"
          height="22"
          viewBox="0 0 11 22"
          fill="none"
        >
          <path
            d="M9.5 5V16.5C9.5 18.71 7.71 20.5 5.5 20.5C3.29 20.5 1.5 18.71 1.5 16.5V4C1.5 2.62 2.62 1.5 4 1.5C5.38 1.5 6.5 2.62 6.5 4V14.5C6.5 15.05 6.05 15.5 5.5 15.5C4.95 15.5 4.5 15.05 4.5 14.5V5H3V14.5C3 15.88 4.12 17 5.5 17C6.88 17 8 15.88 8 14.5V4C8 1.79 6.21 0 4 0C1.79 0 0 1.79 0 4V16.5C0 19.54 2.46 22 5.5 22C8.54 22 11 19.54 11 16.5V5H9.5Z"
            fill="#065EA9"
          />
        </svg>
        <div className="group-message__send" ref={sendRef} onClick={handleSend}>
          <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
            <path
              d="M0.674959 15.5L18.1666 8L0.674959 0.5L0.666626 6.33333L13.1666 8L0.666626 9.66667L0.674959 15.5Z"
              fill="white"
            />
          </svg>
        </div>
        <input
          ref={inputRef}
          onChange={(e) => handleChange(e)}
          type="text"
          className="group-message__send-message"
          placeholder="Type message..."
        />
      </div>
    </div>
  );
};

export default GroupsMessages;
