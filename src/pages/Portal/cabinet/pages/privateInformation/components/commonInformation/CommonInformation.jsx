import "./commonInfomation.scss";
import UserIcon from "../../../../../../../assets/images/cabinet/default.png";
import { useCommonInformationFetching } from "./hooks/useCommonInformationFetching";
import Spinner from "../../../../../../../component/Spinner/Spinner";
import { useTranslation } from "react-i18next";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";
import {
  commonInformationDataChange,
  commonInformationDataSubmit,
} from "./extra";
import { FormList } from "./components";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

const CommonInformation = () => {
  const {
    locationData,
    locationLoading,
    allCitiesGetLoading,
    allCitiesGet,
    userLoading,
    nationsData,
    data,
    setData,
    dispatch,
  } = useCommonInformationFetching();

  if (locationLoading || userLoading || allCitiesGetLoading) {
    return <Spinner />;
  }

  const handleChange = ({ key, value }) =>
    commonInformationDataChange({ setData, dispatch, key, value });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    commonInformationDataSubmit({ evt, dispatch, data, setData });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="commonInformation-cont">
        <div className="commonInformation-cont-inner">
          <div className="commonInformation-cont-inner-imgbtns">
            <img
              src={
                typeof data.avatar_url === "string"
                  ? `${PORTAL_IMAGE_URL}${data.avatar_url}`
                  : data.avatar_url !== null
                  ? URL.createObjectURL(data.avatar_url)
                  : UserIcon
              }
              alt="userImg"
            />
            <div>
              <label htmlFor="uploadImg">Yangi rasm yuklang </label>
              <input
                type="file"
                id="uploadImg"
                onChange={(evt) =>
                  handleChange({
                    key: "avatar_url",
                    value: evt.target.files[0],
                  })
                }
              />
            </div>
            <button
              className="commonInformation-cont-inner-imgbtns-btn2"
              onClick={(evt) =>
                handleChange({
                  key: "avatar_url",
                  value: null,
                })
              }
            >
              O‘chirish
            </button>
          </div>
          <p>JPG, GIF yoki PNG. Maksimal hajmi 800K</p>
        </div>

        <div className="commonInformation-cont-formCont">
          <form
            className="commonInformation-cont-formCont-form"
            onSubmit={(evt) => handleSubmit(evt)}
          >
            <FormList
              data={data}
              handleChange={handleChange}
              locationData={locationData}
              allCitiesGet={allCitiesGet}
              nationsData={nationsData}
            />

            <button
              className="commonInformation-cont-formCont-form-btn"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CommonInformation;