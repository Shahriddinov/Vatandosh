import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

import Spinner from "../../../../component/Spinner/Spinner";
import {
  getAllNations,
  registerUser,
} from "../../../../reduxToolkit/authSlice/extraReducer";
import { getLocation } from "../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";

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
  const createCountries = createSelector(
    (state) => state.community.locationGet,
    (countries) => {
      return countries.map((country) => ({ ...country, label: country.name }));
    }
  );
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authSlice.registerLoading);
  const registerData = useSelector((state) => state.authSlice.registerData);
  const loadingNations = useSelector((state) => state.authSlice.nationsLoading);
  const nationsData = useSelector((state) => state.authSlice.nationsData);
  const loadingCountries = useSelector(
    (state) => state.community.locationGetLoading
  );
  const allCountries = useSelector(createCountries);

  const [agree, setAgree] = useState(false);
  const [formData, setFormData] = useState({
    avatar_url: DefaultProfilePic,
    first_name: "",
    second_name: "",
    last_name: "",
    birth_date: "",
    national_id: null,
    gender: "",
    address: "",
    location_id: null,
    job_position: "",
    achievements: "",
    hobbies: "",
    passport_file: null,
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
    setFormData((prevFormData) => ({
      ...prevFormData,
      avatar_url: URL.createObjectURL(selectedFile),
    }));
  };

  const handleFileSelect = () => {
    const selectedFile = fileInputRef.current.files[0];
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
    dispatch(registerUser(formData));
    console.log(formData);
  };

  useEffect(() => {
    dispatch(getAllNations());
    dispatch(getLocation());
  }, []);

  if (loading || loadingNations || loadingCountries) {
    return <Spinner position="full" />;
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
                src={formData.avatar_url}
                alt="user picture"
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
                id="profilephoto"
                name="profilephoto"
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
                  {nationsData.map((nation) => (
                    <MenuItem key={nation.id} value={nation.id}>
                      {nation.name}
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
                  <MenuItem value={"male"}>Erkak</MenuItem>
                  <MenuItem value={"female"}>Ayol</MenuItem>
                </Select>
              </FormControl>
              <TextField
                required
                id="outlined-basic"
                label="O'zbekistondagi manzilingiz"
                variant="outlined"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
              <Autocomplete
                required
                disablePortal
                id={formData.location_id}
                options={allCountries}
                onChange={(event, value) => {
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    location_id: value.id,
                  }));
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Xorijiy davlat" />
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
                label="Xorijdagi manzil"
                variant="outlined"
                name="achievements"
                value={formData.achievements}
                onChange={handleInputChange}
              />
              <TextField
                required
                id="outlined-basic"
                label="Telefon raqamingiz"
                variant="outlined"
                name="hobbies"
                value={formData.hobbies}
                InputProps={{
                  inputComponent: PhoneInput,
                  inputProps: {
                    defaultCountry: "US",
                    value: formData.hobbies,
                    onChange: (value) => {
                      setFormData((prevFormData) => ({
                        ...prevFormData,
                        hobbies: value,
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
                        id="document"
                        name="document"
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
