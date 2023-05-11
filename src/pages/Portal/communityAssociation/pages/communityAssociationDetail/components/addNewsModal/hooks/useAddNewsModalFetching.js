import axios from "../../../../../../../../../src/services/api/axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  POST_COMMUNITY_IMAGE,
  POST_COMMUNITY_NEWS_CREATE,
} from "../../../../../../../../services/api/utils";
const options = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

export const useAddNewsModalFetching = (id, toast, handleClose) => {
  const [data, setData] = useState({
    title: "",
    content: "",
    community_id: id,
    attachments: [],
    videoLink: "",
  });
  const { t } = useTranslation();
  const [imageFetchData, setImageFetchData] = useState({
    loading: true,
    error: null,
    imgPath: "",
    loadingNews: true,
  });

  const ImageUpload = (data) => {
    const formData = new FormData();
    formData.append("folder", "community-news");
    formData.append("image", data.image);
    setImageFetchData((prev) => ({ ...prev, loading: true }));
    axios({
      method: "POST",
      url: POST_COMMUNITY_IMAGE,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data;",
      },
    })
      .then((res) => {
        setData((prev) => ({
          ...prev,
          attachments: [...prev.attachments, res.data],
        }));
        setImageFetchData((prev) => ({ ...prev, imgPath: res.data }));
      })
      .catch((e) => {
        console.log(e.message);
        setImageFetchData((prev) => ({ ...prev, error: e.message }));
      })
      .finally(() => {
        setImageFetchData((prev) => ({ ...prev, loading: false }));
      });
  };

  const handleChangeApplication1 = ({ key, value }) => {
    if (value !== undefined) {
      setData((prev) => ({
        ...prev,
        [key]:
          key === "images"
            ? [...prev.images, { id: Date.now(), imgUrl: value }]
            : value,
      }));
    }
  };

  const handleClick = (path) => {
    setData((prev) => ({
      ...prev,
      attachments: prev.images.filter((el) => el.path !== path),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();

    const postData = {
      title: data.title,
      content: data.content,
      community_id: id,
      attachments: data.attachments.map((el) => el.path),
    };

    setImageFetchData((prev) => ({ ...prev, loadingNews: true }));
    axios({
      method: "POST",
      url: POST_COMMUNITY_NEWS_CREATE,
      data: postData,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        toast.success("success sending !", options);
      })
      .catch((e) => {
        console.log(e.message);
        setImageFetchData((prev) => ({ ...prev, error: e.message }));
        toast.success("error sending !", options);
      })
      .finally(() => {
        setImageFetchData((prev) => ({ ...prev, loadingNews: false }));
      });

    setData({
      title: "",
      content: "",
      community_id: "",
      attachments: [],
      videoLink: "",
    });
  };

  return {
    data,
    handleChangeApplication1,
    handleClick,
    ImageUpload,
    handleSubmit,
    t,
  };
};
