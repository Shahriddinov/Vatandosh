import "./RegisterItem1.scss";
import "../customStyles.scss";
import DefaultProfilePic from '../../../../assets/images/icons/profile.svg';
import pencil from "../../../../assets/images/expert/input-pencil.svg";
import { useState } from 'react';

export default function RegisterItem1({ activeBarItem }) {
  const [uploadImg, setuploadImg] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form className={activeBarItem !== 0 ? 'registeritem1 registeritem-scaleHidden' : 'registeritem1 registeritem-scaleActive'} onSubmit={handleSubmit}>
      <div className="registeritem1-wrapper registeritem-borderLeft">
        <h3 className="registeritem-title">I. Shaxsiy ma’lumotingiz</h3>
        <div className="registeritem1-form">
          <div className="registeritem1-form-uploadImg">
            <div className="registeritem1-form-uploadImg-inputs">
              <img src={
                uploadImg ? URL.createObjectURL(uploadImg) : DefaultProfilePic
              } alt="" />
              <label htmlFor="uploadimg" className="registeritem-submitBtn">
                <input id="uploadimg" type="file" accept="image/png, image/gif, image/jpeg, image/jpg" onChange={(e) => setuploadImg(e.target.files[0])} />
                Yangi rasm yuklang
              </label>
              <button onClick={() => setuploadImg(null)}>O‘chirish</button>
            </div>
            <span className="registeritem1-form-uploadImg-desc">JPG, GIF yoki PNG. Maksimal hajmi 800K</span>
          </div>
          <div className="registeritem1-form-input-list">
            <label htmlFor="" className="registeritem-label">
              <p>Familiyasi <span>*</span></p>
              <div>
                <input type="text" minLength={3} maxLength={30} placeholder={"Kiriting"} />
                <img src={pencil} alt="" />
              </div>
            </label>
            <label htmlFor="" className="registeritem-label">
              <p>Ismi <span>*</span></p>
              <div>
                <input type="text" minLength={3} maxLength={30} placeholder={"Kiriting"} />
                <img src={pencil} alt="" />
              </div>
            </label>
            <label htmlFor="" className="registeritem-label">
              <p>Sharifi <span>*</span></p>
              <div>
                <input type="text" minLength={3} maxLength={30} placeholder={"Kiriting"} />
                <img src={pencil} alt="" />
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="registeritem-btnWrapper">
        <button type="submit" className="registeritem-submitBtn">Keyingisi</button>
      </div>
    </form>
  )
}
