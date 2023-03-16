import React, { useState, useRef } from 'react'
import Select from '@mui/material/Select'
import '../../../../assets/style/global.scss'
import './register.scss'
import DefaultProfilePic from '../../../../assets/images/icons/profile.svg'
import CameraIcon from '../../../../assets/images/icons/camera.svg'
import UploadIcon from '../../../../assets/images/icons/upload.svg'
import Checkmark from '../../../../assets/images/icons/check.svg'
import ChevronDown from '../../../../assets/images/icons/chevrondown.svg'
import Star from '../../../../assets/images/icons/star.svg'
import Canlendar from '../../../../assets/images/icons/calendar.svg'
import Terms from '../Terms/Terms'

const Register = () => {

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
        phoneNumber: '+1',
        passportCopy: null,
        agree: false
    });

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)  
    }

    const fileInputRef = useRef(null);
    const photoInputRef = useRef(null);
    const genderSelectorRef = useRef(null);
    const countrySelectorRef = useRef(null);
    const nationalitySelectorRef = useRef(null);
    const datePickerRef = useRef(null);
    
    const handleUploadButtonClick = () => {
        fileInputRef.current.click();
    };

    const handlePhotoUploadClick = () => {
        photoInputRef.current.click();
    };

    const handleGenderSelector = () => {
        genderSelectorRef.current.click();
    };

    const handleCountrySelector = () => {
        countrySelectorRef.current.click();
    };

    const handleNationalitySelector = () => {
        nationalitySelectorRef.current.click();
    };

    const handleDatePicker = () => {
        datePickerRef.current.click();
    };
    
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        console.log(selectedFile)
        setFormData((prevFormData) => ({
            ...prevFormData,
            profilePhoto: URL.createObjectURL(selectedFile),
        }));
      };
    
    const handleFileSelect = () => {
        const selectedFile = fileInputRef.current.files[0];
        console.log(selectedFile);
        setFormData((prevFormData) => ({
            ...prevFormData,
            passportCopy: selectedFile,
        }));
    };

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
        // do something with the form data, e.g. send it to a server
    };

    return (
        <div className='container position__relative'>
            <div className="registration__form">
                <div className="form__title">
                    <h2>Ro'yxatdan O'ting</h2>
                    <p>Iltimos ma'lumotlaringizni kiriting</p>
                </div>
                <form autoComplete="off" method="post" action="" className='form'>
                    <div className="profile__photo">
                        <div className="profile__img">
                            <img src={formData.profilePhoto} alt="" className={formData.profilePhoto === DefaultProfilePic ? '' : 'width100'}/>
                        </div>
                        <div className="upload__photo" onClick={handlePhotoUploadClick}>
                            <img src={CameraIcon} alt="" />
                            <input 
                                className='input__file'
                                ref={photoInputRef}
                                type="file" 
                                id="profilephoto" 
                                name="profilephoto" 
                                onChange={handleFileChange}
                            >
                            </input>
                        </div>
                    </div>
                    <div className="form__right">
                        <div className="input__fields">
                            <div className="input position__relative">
                                <label htmlFor="familyName">Familiyasi</label>
                                <input
                                    type="text"
                                    id="familyName"
                                    name="familyName"
                                    value={formData.familyName}
                                    onChange={handleInputChange}
                                    spellCheck="false"
                                    required
                                />
                                <img src={Star} alt="" className='required__star'/>
                            </div>
                            <div className="input">
                                <label htmlFor="firstName">Ismi</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    spellCheck="false"
                                />
                            </div>
                            <div className="input">
                                <label htmlFor="middleName">Otasining ismi</label>
                                <input
                                    type="text"
                                    id="middleName"
                                    name="middleName"
                                    value={formData.middleName}
                                    onChange={handleInputChange}
                                    spellCheck="false"
                                />
                            </div>
                            <div className="input position__relative">
                                <label htmlFor="dateBorn">Tug'ilgan sana</label>
                                <input
                                    ref={datePickerRef}
                                    type="date"
                                    id="dateBorn"
                                    name="dateBorn"
                                    value={formData.dateBorn}
                                    onChange={handleInputChange}
                                />
                                <button className="select" type='button'>
                                    <img src={Canlendar} alt="" onClick={() => { document.getElementById("date-picker").click(); }}/>
                                </button>
                            </div>
                            <div className="input position__relative">
                                <label htmlFor="nationality">Millati</label>
                                <select
                                    id="nationality"
                                    name="nationality"
                                    value={formData.nationality}
                                    onChange={handleInputChange}
                                >
                                    <option value="" ref={nationalitySelectorRef}></option>
                                    <option value="uzbek">O'zbek</option>
                                    <option value="tajik">Tojik</option>
                                    <option value="karakalpak">Qoraqalpoq</option>
                                    <option value="kazakh">Qozoq</option>
                                    <option value="kyrgyz">Qirg'iz</option>
                                </select>
                                <button className="select" type='button'>
                                    <img src={ChevronDown} alt="" onClick={handleNationalitySelector}/>
                                </button>
                            </div>
                            <div className="input position__relative">
                                <label htmlFor="gender">Jinsi</label>
                                <select
                                    ref={genderSelectorRef}
                                    id="gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                >
                                    <option value=""></option>
                                    <option value="male">Erkak</option>
                                    <option value="female">Ayol</option>
                                </select>
                                <button className="select" type='button' onClick={handleGenderSelector}>
                                    <img src={ChevronDown} alt="" />
                                </button>
                            </div>
                            <div className="input">
                                <label htmlFor="address">O'zbekistondagi manzilingiz</label>
                                <textarea
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="input position__relative">
                                <label htmlFor="livingCountry">Xorijiy davlat</label>
                                <select
                                    ref={countrySelectorRef}
                                    id='livingCountry'
                                    name="livingCountry"
                                    value={formData.livingCountry}
                                    onChange={handleInputChange}
                                    >
                                    <option value="" className='option'></option>
                                    <option value="male">Uzbekistan</option>
                                    <option value="female">USA</option>
                                    <option value="other">Canada</option>
                                </select>
                                <button className="select" type='button' onClick={handleCountrySelector}>
                                    <img src={ChevronDown} alt="" />
                                </button>
                            </div>
                            <div className="input">
                                <label htmlFor="job">Faoliyat turi</label>
                                <input
                                    type="text"
                                    id="job"
                                    name="job"
                                    value={formData.job}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="input position__relative">
                                <label htmlFor="jobAddress">Manzil</label>
                                <textarea
                                    id="jobAddress"
                                    name="jobAddress"
                                    value={formData.jobAddress}
                                    onChange={handleInputChange}
                                    required
                                />
                                <img src={Star} alt="" className='required__star'/>
                            </div>
                            <div className="input">
                                <label htmlFor="phoneNumber">Telefon raqamingiz</label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="input position__relative">
                                <label htmlFor="document">Pasportingiz nusxasini joylang</label>
                                <p>{formData.passportCopy ? formData.passportCopy.name : ''}</p>
                                <input 
                                    className='input__file'
                                    ref={fileInputRef}
                                    type="file" 
                                    id="document" 
                                    name="document" 
                                    onChange={handleFileSelect}
                                    accept= "application/pdf, image/*"
                                >
                                </input>
                                <button className="upload" type='button' onClick={handleUploadButtonClick}>
                                    <img src={UploadIcon} alt="" />
                                </button>
                            </div>
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