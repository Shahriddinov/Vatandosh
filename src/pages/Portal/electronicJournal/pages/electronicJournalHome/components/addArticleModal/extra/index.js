import { toast } from "react-toastify";
import axios from "../../../../../../../../services/api/axios";
import {
  POST_COMMUNITY_IMAGE,
  POST_MAGAZINE_ARTICLE,
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

export const inputValueChange = ({ key, value, setData }) => {
  console.log(key, value);
  if (key !== "upload") {
    setData((prev) => ({ ...prev, [key]: value }));
  } else {
    axios({
      url: POST_COMMUNITY_IMAGE,
      method: "POST",
      data: {
        image: value,
        folder: "journal",
      },
      headers: {
        "Content-Type": "multipart/form-data;",
      },
    })
      .then((res) => {
        toast.success("File uploaded!", options);
        setData((prev) => ({ ...prev, [key]: res.data.path }));
      })
      .catch((e) => {
        toast.error("File not loaded!", options);
      });
  }
};

export const createArticle = ({
  data,
  setData,
  setFileSending,
  handleClose,
}) => {
  setFileSending(true);
  axios({
    url: POST_MAGAZINE_ARTICLE,
    method: "POST",
    data,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      toast.success("success sending !", options);
      setData({ full_name: "", text: "", upload: "" });
    })
    .catch((e) => {
      toast.error("error sending !", options);
    })
    .finally(() => {
      handleClose();
      setFileSending(false);
    });
};
