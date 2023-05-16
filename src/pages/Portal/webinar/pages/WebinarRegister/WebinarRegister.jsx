import "../../../expert/pages/ExpertRegister/components/register1/RegisterItem1.scss";
import "../../../expert/pages/ExpertRegister/components/customStyles.scss";
import DefaultProfilePic from "../../../../../assets/images/icons/profile.svg";
import pencil from "../../../../../assets/images/expert/input-pencil.svg";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ExpertTitle } from "../../../expert/components";
import "./WebinarRegister.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { meetingCreate } from "../../../../../reduxToolkit/portalSlices/meetingSlice/extraReducer";
import { ToastContainer, toast } from "react-toastify";
import { changeStatus } from "../../../../../reduxToolkit/portalSlices/meetingSlice/meetingSlice";

export default function WebinarRegister() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [uploadImg, setuploadImg] = useState(null);
  const [data, setData] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const status = useSelector((store) => store.meetingSlice.status);

  useEffect(() => {
    if (status === "succeeded") {
      toast.success("So'rovingiz qabul qilindi!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        navigate("/portal-category/webinar");
        dispatch(changeStatus());
      }, 5000);
    }
  }, [status]);

  const [formData, setFormData] = useState({
    first_name: "",
    second_name: "",
    last_name: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const url = [
    { title: t("expert.main"), url: "/portal-category/expert" },
    { title: t("projects_page.participate_btn"), url: "" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("first_name", formData.first_name);
    data.append("second_name", formData.second_name);
    data.append("last_name", formData.last_name);
    data.append("phone", formData.phone);
    data.append("email", formData.email);
    data.append("img", uploadImg);

    dispatch(meetingCreate({ data, id }));
  };

  return (
    <main className="webinar-register">
      <div className="container">
        <ExpertTitle title={t("projects_page.participate_btn")} url={url} />
        <form className="registeritem1" onSubmit={handleSubmit}>
          <div className="registeritem1-wrapper">
            <div className="registeritem1-form">
              <div className="registeritem1-form-uploadImg">
                <div className="registeritem1-form-uploadImg-inputs">
                  <img
                    src={
                      uploadImg
                        ? URL.createObjectURL(uploadImg)
                        : DefaultProfilePic
                    }
                    alt=""
                  />
                  <label htmlFor="uploadimg" className="registeritem-submitBtn">
                    <input
                      required
                      id="uploadimg"
                      name="uploadimg"
                      type="file"
                      accept="image/png, image/gif, image/jpeg, image/jpg"
                      onChange={(e) => setuploadImg(e.target.files[0])}
                    />
                    {t("expert.uploadnew")}
                  </label>
                  <button onClick={() => setuploadImg(null)}>
                    {t("expert.delete")}
                  </button>
                </div>
                <span className="registeritem1-form-uploadImg-desc">
                  {t("expert.uploaddesc")}
                </span>
              </div>
              <div className="webinar-ragister-input-list">
                <label htmlFor="" className="registeritem-label">
                  <p>
                    {t("expert.name")} <span>*</span>
                  </p>
                  <div>
                    <input
                      required
                      type="text"
                      minLength={3}
                      maxLength={30}
                      placeholder={t("expert.inputplaceholder")}
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleInputChange}
                    />
                    <img src={pencil} alt="" />
                  </div>
                </label>
                <label htmlFor="" className="registeritem-label">
                  <p>
                    {t("expert.surname")} <span>*</span>
                  </p>
                  <div>
                    <input
                      required
                      type="text"
                      minLength={3}
                      maxLength={30}
                      placeholder={t("expert.inputplaceholder")}
                      name="second_name"
                      value={formData.second_name}
                      onChange={handleInputChange}
                    />
                    <img src={pencil} alt="" />
                  </div>
                </label>
                <label htmlFor="" className="registeritem-label">
                  <p>{t("expert.secondname")}</p>
                  <div>
                    <input
                      required
                      type="text"
                      minLength={3}
                      maxLength={30}
                      placeholder={t("expert.inputplaceholder")}
                      name="fathers_name"
                      value={formData.last_name}
                      onChange={handleInputChange}
                    />
                    <img src={pencil} alt="" />
                  </div>
                </label>
              </div>
              <div className="webinar-register-inputList">
                <label htmlFor="" className="registeritem-label">
                  <p>
                    {t("webinar.tel")} <span>*</span>
                  </p>
                  <div>
                    <input
                      required
                      type="tel"
                      minLength={3}
                      maxLength={30}
                      placeholder={t("expert.inputplaceholder")}
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleInputChange}
                    />
                    <img src={pencil} alt="" />
                  </div>
                </label>
                <label htmlFor="" className="registeritem-label">
                  <p>
                    {t("webinar.email")} <span>*</span>
                  </p>
                  <div>
                    <input
                      required
                      type="email"
                      minLength={3}
                      maxLength={30}
                      placeholder={t("expert.inputplaceholder")}
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <img src={pencil} alt="" />
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="registeritem-btnWrapper">
            <button type="submit" className="registeritem-submitBtn">
              {t("expert.nextbtn")}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </main>
  );
}
