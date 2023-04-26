import React, { useState, useRef, useEffect } from 'react'
import './suggest.scss'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TextField from '@mui/material/TextField'
import PhoneInput from "react-phone-number-input/input"

const Suggest = (props) => {

    const lng = props.lng
    const t = props.t
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        category: '',
        aboutParticipant: '',
        images: [],
        links: [''],
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

  return (
    <div className="black__overlay">
        <div className="participate__modal">
            <h2>{t("projects_page.form_title")}</h2>
            <form action="" method='post' autoComplete="off" onSubmit={handleSubmit}>
                <TextField 
                    id="outlined-basic" 
                    label={t("projects_page.form_name")} 
                    variant="outlined" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
                <TextField 
                    id="outlined-basic" 
                    label={t("projects_page.form_phone")} 
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
                        id="outlined-multiline-flexible"
                        label={t("projects_page.form_about")}  
                        variant="outlined" 
                        name="aboutParticipant"
                        value={formData.aboutParticipant}
                        onChange={handleInputChange}
                        multiline
                        maxRows={4}
                        required
                />
                <div className="form__buttons">
                    <button className='cancel__button' type="button" onClick={props.toggleModal}>{t("projects_page.form_cancel")}</button>
                    <button className='submit__button' type="submit">{t("projects_page.form_submit")}</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    </div>
  )
}

export default Suggest