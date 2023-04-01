import React, { useState, useRef } from 'react'
import './participate.scss'

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PhoneInput from "react-phone-number-input/input";
import Dropzone from 'react-dropzone';
import AddIcon from '../../../assets/images/icons/add-circle.svg'
import Trash from '../../../assets/images/icons/trash.svg'
import ImgIcon from '../../../assets/images/icons/img.svg'

const Participate = (props) => {

    const lng = props.lng
    const t = props.t

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        category: '',
        aboutParticipant: '',
        images: [],
        links: [],
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
    };

    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleDrop = (files) => {
        setUploadedFiles([...uploadedFiles, ...files]);
    };

    const handleDelete = (index) => {
        const newFiles = [...uploadedFiles];
        newFiles.splice(index, 1);
        setUploadedFiles(newFiles);
    };

    const fileInputRef = useRef();

    const handleSelectFileClick = (event) => {
        event.preventDefault();
        fileInputRef.current.click();
    };

    const [numInputs, setNumInputs] = useState(0);

    const handleAddInput = () => {
        setNumInputs(numInputs + 1);
    };

    const inputs = [];

    for (let i = 0; i < numInputs; i++) {
        inputs.push(
            <TextField 
                id="outlined-basic" 
                label="Ijtimoiy tarmoqdagi sahifalaringiz" 
                placeholder=''
                variant="outlined" 
                name="links"
                type="url"
                value={formData.links}
                onChange={handleInputChange}
            />
        );
    }

  return (
    <div className="black__overlay">
        <div className="participate__modal">
            <h2>{t("projects_page.form_title")}</h2>
            <form action="" method='post' autoComplete="off">
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
                    <div {...getRootProps()} className={uploadedFiles.length === 0 ? "upload__empty" : "display__none"}>
                        <input {...getInputProps()} ref={fileInputRef}/>
                        {uploadedFiles.length === 0 && <img src={ImgIcon} />}
                        {uploadedFiles.length === 0 && <p>{t("projects_page.form_image")} </p>}
                    </div>
                    )}
                </Dropzone>
                {uploadedFiles.length > 0 && <div className="upload__img">
                    {uploadedFiles.map((file, index) => (
                    <div key={index} className="img__wrapper">
                        <img src={URL.createObjectURL(file)} alt={file.name} className="uploaded__img"/>
                        <button onClick={() => handleDelete(index)}>
                            <img src={Trash} alt="" />
                            {t("projects_page.form_image_delete")} 
                        </button>
                    </div>
                    ))}
                    <button className='add__img' onClick={handleSelectFileClick}><img src={AddIcon} /></button>
                </div>}
                <div className="url__wrapper">
                    <TextField 
                            id="outlined-basic" 
                            label={t("projects_page.form_link")}  
                            placeholder=''
                            variant="outlined" 
                            name="links"
                            type="url"
                            value={formData.links}
                            onChange={handleInputChange}
                            required
                    />
                    {inputs}
                    <button className='add__url' onClick={handleAddInput}><img src={AddIcon} /></button>
                </div>
                <div className="form__buttons">
                    <button className='cancel__button' onClick={props.toggleModal}>{t("projects_page.form_cancel")}</button>
                    <button className='submit__button' type="submit">{t("projects_page.form_submit")}</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Participate