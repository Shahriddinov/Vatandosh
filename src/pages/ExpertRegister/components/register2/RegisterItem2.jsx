import "./RegisterItem2.scss";
import "../customStyles.scss";
import pencil from "../../../../assets/images/expert/input-pencil.svg";
import { BsPlusCircleFill } from "react-icons/bs";
import { useState } from "react";

export default function RegisterItem2({ activeBarItem }) {
  const [data1, setData1] = useState([{ id: 1, otm: "", faculti: "", job: "" }])

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (obj) => {
    setData1(prev => prev.map(item => {
      if (obj.id === item.id) {
        return obj
      }
      return item
    }))
  }

  console.log(data1);
  return (
    <form className={activeBarItem !== 1 ? 'registeritem2 registeritem-scaleHidden' : 'registeritem2 registeritem-scaleActive'} onSubmit={handleSubmit}>
      <div className="registeritem2-wrapper registeritem-borderLeft">
        <h3 className="registeritem-title">II. Oliy ma’lumotingiz</h3>
        <div className="registeritem-form">
          {
            data1.map(el => (
              <div className="registeritem2-form-otm">
                <label htmlFor="" className="registeritem-label">
                  <p>O‘zbekistonda tahsil olgan OTM</p>
                  <div>
                    <input
                      type="text"
                      value={el.otm}
                      minLength={3}
                      maxLength={30}
                      placeholder={"Kiriting"}
                      onChange={(e) => handleChange({ ...el, otm: e.target.value.trim() })}
                    />
                    <img src={pencil} alt="" />
                  </div>
                </label>
                <div className="registeritem-flexbox">
                  <label htmlFor="" className="registeritem-label">
                    <p>Fakulteti</p>
                    <div>
                      <input
                        type="text"
                        minLength={3}
                        value={el.faculti}
                        maxLength={30}
                        placeholder={"Kiriting"}
                        onChange={(e) => handleChange({ ...el, faculti: e.target.value.trim() })}
                      />
                      <img src={pencil} alt="" />
                    </div>
                  </label>
                  <label htmlFor="" className="registeritem-label">
                    <p>Mutaxassisligi</p>
                    <div>
                      <input
                        type="text"
                        minLength={3}
                        value={el.job}
                        maxLength={30}
                        placeholder={"Kiriting"}
                        onChange={(e) => handleChange({ ...el, job: e.target.value.trim() })}
                      />
                      <img src={pencil} alt="" />
                    </div>
                  </label>
                </div>
              </div>
            ))
          }
          <div className="registeritem-addForm" onClick={() => setData1(prev => ([...prev, { id: Date.now(), otm: "", faculti: "", job: "" }]))}><BsPlusCircleFill /></div>
          <div className="registeritem2-form-otm">
            <label htmlFor="" className="registeritem-label">
              <p>Xorijda tahsil olgan OTM</p>
              <div>
                <input type="text" minLength={3} maxLength={30} placeholder={"Kiriting"} />
                <img src={pencil} alt="" />
              </div>
            </label>
            <div className="registeritem-flexbox">
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