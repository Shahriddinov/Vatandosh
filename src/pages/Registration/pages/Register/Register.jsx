import React, { useState, useRef, useEffect } from 'react'

import '../../../../assets/style/global.scss'
import './register.scss'

import DefaultProfilePic from '../../../../assets/images/icons/profile.svg'
import CameraIcon from '../../../../assets/images/icons/camera.svg'
import Checkmark from '../../../../assets/images/icons/check.svg'
import Terms from '../Terms/Terms'

import PhoneInput from "react-phone-number-input/input";

import IconButton from '@mui/material/IconButton';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';

const Register = () => {

    const countries = ['AQSH','Avstraliya','BAA','Daniya','Estoniya','Ekvador','Finlandiya','Italya','Ispaniya','Latviya','Mongoliya','Namimbiya','Portugaliya','Saudiya Arabistoni','Ummon','Vengriya','Xorvatiya',''];

    const [formData, setFormData] = useState({
        profilePhoto: DefaultProfilePic,
        familyName: '',
        firstName: '',
        middleName: '',
        dateBorn: '',
        nationality: '',
        gender: '',
        address: '',
        livingCountry: '',
        job: '',
        jobAddress: '',
        phoneNumber: '',
        passportCopy: null,
        agree: false
    });

    useEffect(() => {
        const svgElements = document.querySelectorAll('.MuiSvgIcon-root');
    }, []);

    const [modal, setModal] = useState(false)
    const [disableTyping, setDisableTyping] = useState(false);

    const toggleModal = () => {
        setModal(!modal)  
    }

    const fileInputRef = useRef(null);
    const photoInputRef = useRef(null);
    const countrySelectorRef = useRef(null);
    
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
            profilePhoto: URL.createObjectURL(selectedFile),
        }));
      };
    
    const handleFileSelect = () => {
        const selectedFile = fileInputRef.current.files[0];
        setFormData((prevFormData) => ({
            ...prevFormData,
            passportCopy: selectedFile,
        }));
    };

    const handleFileRemove = () => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            passportCopy: null,
        }));
    }

    const handleCheckbox = () => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            agree: !formData.agree,
        }));
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
        console.log(formData)
        // do something with the form data, e.g. send it to a server
    };

    return (
        <div className='container position__relative'>
            <div className="registration__form">
                <div className="form__title">
                    <h2>Ro'yxatdan O'ting</h2>
                    <p>Iltimos ma'lumotlaringizni kiriting</p>
                </div>
                <form autoComplete="off" method="post" action="" className='form' onSubmit={handleSubmit}>
                    <div className="profile__photo" onClick={handlePhotoUploadClick}>
                        <div className="profile__img">
                            <img src={formData.profilePhoto} alt="" className={formData.profilePhoto === DefaultProfilePic ? '' : 'width100'}/>
                        </div>
                        <div className="upload__photo">
                            <img src={CameraIcon} alt="" />
                            <input 
                                className='input__file'
                                ref={photoInputRef}
                                type="file" 
                                id="profilephoto" 
                                name="profilephoto" 
                                accept="image/*"
                                onChange={handleFileChange}
                            >
                            </input>
                        </div>
                    </div>
                    <div className="form__right">
                        <div className="input__fields">
                            <TextField 
                                required
                                id="outlined-basic" 
                                name="familyName"
                                label="Familiyasi" 
                                variant="outlined" 
                                value={formData.familyName}
                                onChange={handleInputChange}
                            />
                            <TextField 
                                id="outlined-basic" 
                                name="firstName"
                                label="Ismi" 
                                variant="outlined" 
                                value={formData.firstName}
                                onChange={handleInputChange}
                            />
                            <TextField 
                                id="outlined-basic" 
                                name="middleName"
                                label="Otasining ismi" 
                                variant="outlined" 
                                value={formData.middleName}
                                onChange={handleInputChange}
                            />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker 
                                        label="Tug'ilgan sana"
                                        id="dateBorn"
                                        value={formData.dateBorn}
                                        onChange={(date) => {
                                            setFormData((prevFormData) => ({
                                            ...prevFormData,
                                            dateBorn: date,
                                            }));
                                        }}
                                    />
                            </LocalizationProvider>
                            <FormControl>
                                <InputLabel id="demo-simple-select-label">Millati</InputLabel>
                                <Select
                                    label="Millati"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="nationality"
                                    value={formData.nationality}
                                    onChange={handleInputChange}
                                    IconComponent={ExpandMoreIcon}
                                >
                                    <MenuItem value={'uzbek'}>O'zbek</MenuItem>
                                    <MenuItem value={'tajik'}>Tojik</MenuItem>
                                    <MenuItem value={'kyrgyz'}>Qirg'iz</MenuItem>
                                    <MenuItem value={'karakalpak'}>Qoraqalpoq</MenuItem>
                                    <MenuItem value={'kazakh'}>Qozoq</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel id="demo-simple-select-label">Jinsi</InputLabel>
                                <Select
                                    label="Jinsi"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                    IconComponent={ExpandMoreIcon}
                                >
                                    <MenuItem value={'male'}>Erkak</MenuItem>
                                    <MenuItem value={'female'}>Ayol</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField 
                                id="outlined-basic" 
                                label="O'zbekistondagi manzilingiz" 
                                variant="outlined" 
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={countries}
                                value={formData.livingCountry}
                                onChange={(event, value) => {
                                    setFormData((prevFormData) => ({
                                    ...prevFormData,
                                    livingCountry: value,
                                    }));
                                }}
                                renderInput={(params) => <TextField {...params} label="Xorijiy Davlat"/>}
                            />
                            <TextField 
                                id="outlined-basic" 
                                label="Faoliyat turi" 
                                variant="outlined" 
                                name="job"
                                value={formData.job}
                                onChange={handleInputChange}
                            />
                            <TextField 
                                id="outlined-basic" 
                                label="Manzil" 
                                variant="outlined" 
                                name="jobAddress"
                                value={formData.jobAddress}
                                onChange={handleInputChange}
                                required
                            />
                            <TextField 
                                id="outlined-basic" 
                                label="Telefon raqamingiz" 
                                variant="outlined" 
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                InputProps={{
                                    inputComponent: PhoneInput,
                                    inputProps: {
                                        defaultCountry: "US",
                                        value: formData.phoneNumber,
                                        onChange: (value) => {
                                            setFormData((prevFormData) => ({
                                                ...prevFormData,
                                                phoneNumber: value,
                                            }));
                                        }
                                    },
                                }}
                                autoComplete='off'
                            />
                            <TextField
                                label="Pasportingiz nusxasini joylang"
                                value={formData.passportCopy ? formData.passportCopy.name : ''}
                                InputProps={{
                                    endAdornment:  (
                                    <IconButton onClick={!formData.passportCopy ? handleUploadButtonClick : handleFileRemove}>
                                        {!formData.passportCopy ? <UploadFileIcon /> : <DeleteIcon />}
                                        <input 
                                            className='input__file'
                                            ref={fileInputRef}
                                            type="file" 
                                            id="document" 
                                            name="document" 
                                            onChange={handleFileSelect}
                                            accept= "application/pdf, image/*"
                                        />
                                    </IconButton>
                                    ),
                                }}
                                disabled={true}
                            />
                        </div>  
                        <div className="termsCheck">
                            <div className="checkbox" onClick={handleCheckbox}>
                                {formData.agree ? 
                                    <div className="checked">
                                        <img src={Checkmark} alt="" />
                                    </div>
                                    :
                                    <div className="unchechecked" />
                                }
                            </div>
                            <p>Ro'yxatdan otish davomida <span onClick={toggleModal}>Foydalanish shartlari</span> bilan tanishib chiqdim va shaxsiy ma’lumotlarimdan foydalanilishiga roziman</p>
                        </div>
                        <button className='submit' type='submit'>Saqlash</button>
                    </div>  
                </form>
            </div>
            {modal && <Terms toggleModal={toggleModal} handleCheckbox={handleCheckbox}/>}
        </div>
    )
}

export default Register