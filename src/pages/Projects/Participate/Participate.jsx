import React, { useState, useRef, useEffect } from 'react'
import './participate.scss'
import { useDispatch, useSelector } from 'react-redux';
import { sendFormData } from '../../../reduxToolkit/projectsSlice/extraReducer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { InputLabel } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import PhoneInput from "react-phone-number-input/input"
import Dropzone from 'react-dropzone';
import AddIcon from '../../../assets/images/icons/add-circle.svg'
import Trash from '../../../assets/images/icons/trash.svg'
import ImgIcon from '../../../assets/images/icons/img.svg'
import { changeStatus } from '../../../reduxToolkit/projectsSlice/projectsSlice';

const Participate = (props) => {

    const lng = props.lng
    const t = props.t
    const dispatch = useDispatch();
    const status = useSelector(store => store.formDataSlice.status);

    useEffect(() => {
        if (status === 'succeeded') {
            toast.success('Success Notification !', {
                position: toast.POSITION.TOP_RIGHT
            });
            props.toggleModal()
            dispatch(changeStatus())
        }
    }, [status]);

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

    const handleLinks = (index, value) => {
        setFormData(prevFormData => ({
          ...prevFormData,
          links: [
            ...prevFormData.links.slice(0, index), 
            value, 
            ...prevFormData.links.slice(index + 1)
          ]
        }));
    }

    const handleDrop = (files) => {
        setFormData({ 
            ...formData, 
            images: [...formData.images, ...files] 
        })
    }

    const handleDelete = (index) => {
        const newFiles = [...formData.images]
        newFiles.splice(index, 1)
        setFormData({ 
            ...formData, 
            images: newFiles 
        })
    }

    const fileInputRef = useRef()

    const handleSelectFileClick = (event) => {
        event.preventDefault()
        fileInputRef.current.click()
    }

    const [numInputs, setNumInputs] = useState(0);

    const handleAddInput = () => {
        setNumInputs(numInputs + 1)
        setFormData(prevFormData => ({
            ...prevFormData,
            links: [...prevFormData.links, ''] // Add a new empty link field
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        const data = new FormData()
        data.append("name", formData.name)
        data.append("email", formData.email)
        data.append("phone", formData.phoneNumber)
        data.append("columnName", formData.category)
        data.append("about", formData.aboutParticipant)
        for (var i = 0; i < formData.images.length; i++) {
            data.append('files[]', formData.images[i]);
        }
        data.append("socials", formData.links[0])

        dispatch(sendFormData(data));
    }

    const inputs = [];

    for (let i = 0; i < numInputs; i++) {
        inputs.push(
            <TextField 
                key={i+1}
                id="outlined-basic" 
                label={t("projects_page.form_link")} 
                placeholder=''
                variant="outlined" 
                name="links"
                type="url"
                value={formData.links[i+1]}
                onChange={event => handleLinks(i+1, event.target.value)}
            />
        );
    }

  return (
    <div className="black__overlay">
        <div className="participate__modal">
            <h2>{t("projects_page.form_title")}</h2>
            <form action="" method='post' autoComplete="off" onSubmit={handleSubmit}>
                <div className="form__row">
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
                        label={t("projects_page.form_email")} 
                        variant="outlined" 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form__row">
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
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">{t("projects_page.form_category")} </InputLabel>
                        <Select
                            label={t("projects_page.form_category")} 
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            IconComponent={ExpandMoreIcon}
                            required
                        >
                            <MenuItem value={t("projects_page.item2")}>{t("projects_page.item2")}</MenuItem>
                            <MenuItem value={t("projects_page.item3")}>{t("projects_page.item3")}</MenuItem>
                            <MenuItem value={t("projects_page.item4")}>{t("projects_page.item4")}</MenuItem>
                            <MenuItem value={t("projects_page.item5")}>{t("projects_page.item5")}</MenuItem>
                            <MenuItem value={t("projects_page.item6")}>{t("projects_page.item6")}</MenuItem>
                            <MenuItem value={t("projects_page.item7")}>{t("projects_page.item7")}</MenuItem>
                        </Select>
                    </FormControl>
                </div>
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
                <Dropzone onDrop={handleDrop}>
                    {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()} className={formData.images.length === 0 ? "upload__empty" : "display__none"}>
                        <input {...getInputProps()} ref={fileInputRef}/>
                        {formData.images.length === 0 && <img src={ImgIcon} />}
                        {formData.images.length === 0 && <p>{t("projects_page.form_image")} </p>}
                    </div>
                    )}
                </Dropzone>
                {formData.images.length > 0 && <div className="upload__img">
                    {formData.images.map((file, index) => (
                    <div key={index} className="img__wrapper">
                        <img src={URL.createObjectURL(file)} alt={file.name} className="uploaded__img"/>
                        <button type="button" onClick={() => handleDelete(index)}>
                            <img src={Trash} alt="" />
                            {t("projects_page.form_image_delete")} 
                        </button>
                    </div>
                    ))}
                    <button className='add__img' type="button" onClick={handleSelectFileClick}><img src={AddIcon} /></button>
                </div>}
                <div className="url__wrapper">
                    <TextField 
                            key={0}
                            id="outlined-basic" 
                            label={t("projects_page.form_link")}  
                            placeholder=''
                            variant="outlined" 
                            name="links"
                            type="url"
                            value={formData.links[0]}
                            onChange={event => handleLinks(event.target.getAttribute('key'), event.target.value)}
                            required
                    />
                    {inputs}
                    <button className='add__url' type="button" onClick={handleAddInput}><img src={AddIcon} /></button>
                </div>
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

export default Participate