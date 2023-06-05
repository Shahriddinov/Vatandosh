import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

import Spinner from "../../../../component/Spinner/Spinner";
import {
  getAllCountries,
  getAllNations,
  registerUser,
} from "../../../../reduxToolkit/authSlice/extraReducer";
import { getCountryCities } from "../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";

import "../../../../assets/style/global.scss";
import "./register.scss";

import DefaultProfilePic from "../../../../assets/images/icons/profile.svg";
import CameraIcon from "../../../../assets/images/icons/camera.svg";
import Checkmark from "../../../../assets/images/icons/check.svg";
import Terms from "../Terms/Terms";

import PhoneInput from "react-phone-number-input/input";

import IconButton from "@mui/material/IconButton";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Autocomplete from "@mui/material/Autocomplete";

const Register = () => {
  const navigate = useNavigate();
  const createCountries = createSelector(
    (state) => state.authSlice.countriesData,
    (countries) => {
      return countries?.map((country) => ({ ...country, label: country.name }));
    }
  );
  const createCities = createSelector(
    (state) => state.community.allCitiesGet,
    (cities) => {
      return cities?.map((city) => ({ ...city, label: city.name }));
    }
  );
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authSlice.registerLoading);
  const loadingNations = useSelector((state) => state.authSlice.nationsLoading);
  const nationsData = useSelector((state) => state.authSlice.nationsData);
  const allCountries = useSelector(createCountries);
  const countryCities = useSelector(createCities);

  const [agree, setAgree] = useState(false);
  const [formData, setFormData] = useState({
    avatar_url: "",
    first_name: "",
    second_name: "",
    last_name: "",
    birth_date: "",
    national_id: "",
    gender: "",
    national_address: "",
    international_location_id: "",
    job_position: "",
    international_address_id: "",
    phone_number: "",
    passport_file: "",
    academic_degree: "",
    scientific_title: "",
    work_experience: "",
    additional_info: "",
    achievements: "",
    family_status: "",
    hobbies: "",
    interests: "",
    opinions_about_uzbekistan: "",
    suggestions_and_recommendations: "",
    timezone: "",
    language: "",
  });

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const fileInputRef = useRef(null);
  const photoInputRef = useRef(null);

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const handlePhotoUploadClick = () => {
    photoInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        avatar_url: selectedFile,
      }));
    }
  };

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      passport_file: selectedFile,
    }));
  };

  const handleFileRemove = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      passport_file: null,
    }));
  };

  const handleCheckbox = () => {
    setAgree(!agree);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("first_name", formData.first_name);
    data.append("second_name", formData.second_name);
    data.append("last_name", formData.last_name);
    data.append("national_address", formData.national_address);
    data.append(
      "international_location_id",
      formData.international_location_id
    );
    data.append("international_address_id", formData.international_address_id);
    data.append("national_id", formData.national_id);
    data.append("birth_date", formData.birth_date);
    data.append("gender", formData.gender);
    data.append("academic_degree", formData.academic_degree);
    data.append("phone_number", formData.phone_number);
    data.append("scientific_title", formData.scientific_title);
    data.append("job_position", formData.job_position);
    data.append("work_experience", formData.work_experience);
    data.append("additional_info", formData.additional_info);
    data.append("achievements", formData.achievements);
    data.append("family_status", formData.family_status);
    data.append("hobbies", formData.hobbies);
    data.append("interests", formData.interests);
    data.append(
      "opinions_about_uzbekistan",
      formData.opinions_about_uzbekistan
    );
    data.append(
      "suggestions_and_recommendations",
      formData.suggestions_and_recommendations
    );
    data.append("timezone", formData.timezone);
    data.append("language", formData.language);
    data.append("avatar_url", formData.avatar_url);
    data.append("passport_file", formData.passport_file);

    dispatch(registerUser(data));
  };

  useEffect(() => {
    dispatch(getAllNations());
    dispatch(getAllCountries());
  }, []);

  if (loading || loadingNations) {
    return <Spinner position="full" />;
  }

  const user = localStorage.getItem("user");

  if (JSON.parse(user).first_name) {
    navigate("/portal-category/cabinet");
  }

  return (
    <div className="container position__relative register__wrapper">
      <div className="left__side__text">
        <h1>Lorem ipsum dolor sit amet consectetur. Mauris sit mauris</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Neque sed ultrices vel orci
          mollis felis ultrices leo. Erat vestibulum amet nibh luctus vitae
          velit vitae vulputate blandit. Malesuada commodo magna sed sem justo
          non convallis. Vestibulum id nunc et morbi lobortis non bibendum arcu
          netus. Eget nisi tincidunt aliquam rutrum nunc feugiat fermentum in
          nisi
        </p>
      </div>
      <div className="registration__form">
        <div className="form__title">
          <h2>Ro'yxatdan O'ting</h2>
          <p>Iltimos ma'lumotlaringizni kiriting</p>
        </div>
        <form
          autoComplete="off"
          method="post"
          className="form"
          onSubmit={handleSubmit}
        >
          <div className="profile__photo" onClick={handlePhotoUploadClick}>
            <div className="profile__img">
              <img
                src={
                  formData.avatar_url === ""
                    ? DefaultProfilePic
                    : URL.createObjectURL(formData.avatar_url)
                }
                alt="user img"
                className={
                  formData.avatar_url === DefaultProfilePic ? "" : "width100"
                }
              />
            </div>
            <div className="upload__photo">
              <img src={CameraIcon} alt="camera icon" />
              <input
                className="input__file"
                ref={photoInputRef}
                type="file"
                id="avatar_url"
                name="avatar_url"
                accept="image/*"
                onChange={handleFileChange}
              ></input>
            </div>
          </div>
          <div className="form__right">
            <div className="input__fields">
              <TextField
                required
                id="outlined-basic"
                name="last_name"
                label="Familiyasi"
                variant="outlined"
                value={formData.last_name}
                onChange={handleInputChange}
              />
              <TextField
                required
                id="outlined-basic"
                name="first_name"
                label="Ismi"
                variant="outlined"
                value={formData.first_name}
                onChange={handleInputChange}
              />
              <TextField
                required
                id="outlined-basic"
                name="second_name"
                label="Otasining ismi"
                variant="outlined"
                value={formData.second_name}
                onChange={handleInputChange}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Tug'ilgan sana"
                  id="dateBorn"
                  value={formData.birth_date}
                  onChange={(date) => {
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      birth_date: date,
                    }));
                  }}
                />
              </LocalizationProvider>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Millati</InputLabel>
                <Select
                  required
                  label="Millati"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="national_id"
                  value={formData.national_id}
                  onChange={handleInputChange}
                  IconComponent={ExpandMoreIcon}
                >
                  {nationsData?.map((nation) => (
                    <MenuItem key={nation?.id} value={nation?.id}>
                      {nation?.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Jinsi</InputLabel>
                <Select
                  required
                  label="Jinsi"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  IconComponent={ExpandMoreIcon}
                >
                  <MenuItem value="1">Erkak</MenuItem>
                  <MenuItem value="2">Ayol</MenuItem>
                </Select>
              </FormControl>
              <TextField
                required
                id="outlined-basic"
                label="O'zbekistondagi manzilingiz"
                variant="outlined"
                name="national_address"
                value={formData.national_address}
                onChange={handleInputChange}
              />
              <Autocomplete
                required
                disablePortal
                id={formData.international_location_id}
                options={allCountries ? allCountries : []}
                onChange={(event, value) => {
                  if (value) {
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      international_location_id: value.id.toString(),
                    }));
                    dispatch(getCountryCities({ location_id: value.id }));
                  }
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Xorijiy davlat" />
                )}
              />
              <Autocomplete
                required
                disablePortal
                id={formData.international_address_id}
                options={countryCities ? countryCities : []}
                onChange={(event, value) => {
                  if (value) {
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      international_address_id: value.id.toString(),
                    }));
                    console.log(value.id);
                  }
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Xorijdagi manzil" />
                )}
              />
              <TextField
                required
                id="outlined-basic"
                label="Faoliyat turi"
                variant="outlined"
                name="job_position"
                value={formData.job_position}
                onChange={handleInputChange}
              />
              <TextField
                required
                id="outlined-basic"
                label="Telefon raqamingiz"
                variant="outlined"
                name="phone_number"
                value={formData.phone_number}
                InputProps={{
                  inputComponent: PhoneInput,
                  inputProps: {
                    defaultCountry: "US",
                    value: formData.phone_number,
                    onChange: (value) => {
                      setFormData((prevFormData) => ({
                        ...prevFormData,
                        phone_number: value,
                      }));
                    },
                  },
                }}
                autoComplete="off"
              />
              <TextField
                label="Pasport nusxasi (ixtiyoriy)"
                value={
                  formData.passport_file ? formData.passport_file.name : ""
                }
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={
                        !formData.passport_file
                          ? handleUploadButtonClick
                          : handleFileRemove
                      }
                    >
                      {!formData.passport_file ? (
                        <UploadFileIcon />
                      ) : (
                        <DeleteIcon />
                      )}
                      <input
                        className="input__file"
                        ref={fileInputRef}
                        type="file"
                        id="passport_file"
                        name="passport_file"
                        onChange={handleFileSelect}
                        accept="application/pdf, image/*"
                      />
                    </IconButton>
                  ),
                }}
                disabled={true}
              />
            </div>
            <div className="termsCheck">
              <div className="checkbox" onClick={handleCheckbox}>
                {agree ? (
                  <div className="checked">
                    <img src={Checkmark} alt="" />
                  </div>
                ) : (
                  <div className="unchechecked" />
                )}
              </div>
              <p>
                Ro'yxatdan otish davomida{" "}
                <span onClick={toggleModal}>Foydalanish shartlari</span> bilan
                tanishib chiqdim va shaxsiy ma’lumotlarimdan foydalanilishiga
                roziman
              </p>
            </div>
            <button className={`submit ${agree ? "active" : ""}`} type="submit">
              Saqlash
            </button>
          </div>
        </form>
      </div>
      {modal && (
        <Terms toggleModal={toggleModal} handleCheckbox={handleCheckbox} />
      )}
    </div>
  );
};

export default Register;
