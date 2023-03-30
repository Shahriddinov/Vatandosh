import "./RegisterItem5.scss";
import "../customStyles.scss";
import DefaultProfilePic from '../../../../assets/images/icons/profile.svg';
import pencil from "../../../../assets/images/expert/input-pencil.svg";
import { useState } from 'react';

export default function RegisterItem5() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form className='registeritem1' onSubmit={handleSubmit}>
      <div className="registeritem1-wrapper registeritem-borderLeft">
        <h3 className="registeritem-title">V. Taklifingiz</h3>
        <div className="registeritem1-form"></div>
      </div>
    </form>
  )
}