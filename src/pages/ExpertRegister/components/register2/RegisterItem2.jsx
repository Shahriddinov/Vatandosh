import "./RegisterItem2.scss";
import "../customStyles.scss";
import pencil from "../../../../assets/images/expert/input-pencil.svg";
import { BsPlusCircleFill } from "react-icons/bs";

export default function RegisterItem2() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form className='registeritem2' onSubmit={handleSubmit}>
      <div className="registeritem2-wrapper registeritem-borderLeft">
        <h3 className="registeritem-title">II. Oliy ma’lumotingiz</h3>
        <div className="registeritem2-form">
          <div className="registeritem2-form-otm">
            <label htmlFor="" className="registeritem-label">
              <p>O‘zbekistonda tahsil olgan OTM</p>
              <div>
                <input type="text" minLength={3} maxLength={30} placeholder={"Kiriting"} />
                <img src={pencil} alt="" />
              </div>
            </label>
            <div className="registeritem2-form-otm-faculty">
              <label htmlFor="" className="registeritem-label">
                <p>Fakulteti</p>
                <div>
                  <input type="text" minLength={3} maxLength={30} placeholder={"Kiriting"} />
                  <img src={pencil} alt="" />
                </div>
              </label>
              <label htmlFor="" className="registeritem-label">
                <p>Mutaxassisligi</p>
                <div>
                  <input type="text" minLength={3} maxLength={30} placeholder={"Kiriting"} />
                  <img src={pencil} alt="" />
                </div>
              </label>
            </div>
          </div>
          <div className="registeritem-addForm"><BsPlusCircleFill /></div>
          <div className="registeritem2-form-otm">
            <label htmlFor="" className="registeritem-label">
              <p>Xorijda tahsil olgan OTM</p>
              <div>
                <input type="text" minLength={3} maxLength={30} placeholder={"Kiriting"} />
                <img src={pencil} alt="" />
              </div>
            </label>
            <div className="registeritem2-form-otm-faculty">
              <label htmlFor="" className="registeritem-label">
                <p>Xorijda fakulteti</p>
                <div>
                  <input type="text" minLength={3} maxLength={30} placeholder={"Kiriting"} />
                  <img src={pencil} alt="" />
                </div>
              </label>
              <label htmlFor="" className="registeritem-label">
                <p>Xorijdagi mutaxassisligi</p>
                <div>
                  <input type="text" minLength={3} maxLength={30} placeholder={"Kiriting"} />
                  <img src={pencil} alt="" />
                </div>
              </label>
            </div>
          </div>
          <div className="registeritem-addForm"><BsPlusCircleFill /></div>
        </div>
      </div>
      <div className="registeritem-btnWrapper">
        <button type="submit" className="registeritem-submitBtn">Keyingisi</button>
      </div>
    </form >
  )
}