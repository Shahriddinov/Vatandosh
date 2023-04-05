import "../customStyles.scss";
import scripka from "../../../../assets/images/expert/scripka-icon.svg";

export default function RegisterItem4({ activeBarItem }) {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form className={activeBarItem !== 3 ? 'registeritem4 registeritem-scaleHidden' : 'registeritem4 registeritem-scaleActive'} onSubmit={handleSubmit}>
      <div className="registeritem4-wrapper registeritem-borderLeft">
        <h3 className="registeritem-title">IV. Ilmiy faoliyatingiz</h3>
        <div className="registeritem-form">
          <div className="registeritem-flexbox">
            <label htmlFor="" className="registeritem-label">
              <p>Ilmiy darajasi <span>*</span></p>
              <div>
                <input required type="text" minLength={3} maxLength={100} placeholder={"Kiriting"} />
              </div>
            </label>
            <label htmlFor="" className="registeritem-label">
              <p>Ilmiy unvoni <span>*</span></p>
              <div>
                <input required type="text" minLength={3} maxLength={100} placeholder={"Kiriting"} />
              </div>
            </label>
          </div>
          <label htmlFor="" className="registeritem-label">
            <p>Ilmiy maqola mavzusi; <span>*</span></p>
            <div>
              <input required type="text" minLength={3} maxLength={100} placeholder={"Kiriting"} />
            </div>
          </label>
          <div className="registeritem-flexbox">
            <label htmlFor="" className="registeritem-label">
              <p>Chop etilgan jurnal nomi<span>*</span></p>
              <div>
                <input required type="text" minLength={3} maxLength={50} placeholder={"Kiriting"} />
              </div>
            </label>
            <label htmlFor="" className="registeritem-label">
              <p>Chop etilgan sana <span>*</span></p>
              <div>
                <input required type="date" placeholder={"Kiriting"} />
              </div>
            </label>
          </div>
          <div className="registeritem-flexbox">
            <label htmlFor="" className="registeritem-label">
              <p>Maqola havolasi <span>*</span></p>
              <div>
                <input required type="text" minLength={3} maxLength={50} placeholder={"Kiriting"} />
              </div>
            </label>
            <label htmlFor="" className="registeritem-label">
              <p>Maqola  fayli<span>*</span></p>
              <label htmlFor="registeritem-label-fileinput" required>
                <input required id="registeritem-label-fileinput" className="registeritem-label-fileinput" type="file" placeholder={"Kiriting"} />
                <p>Fayl yuklang</p>
                <img src={scripka} alt="" />
              </label>
            </label>
          </div>
          <label htmlFor="" className="registeritem-label">
            <p>Asosiy ilmiy qiziqish yo‘nalishlari<span>*</span></p>
            <div>
              <input required type="text" minLength={3} maxLength={50} placeholder={"Kiriting"} />
            </div>
            <ul className="registeritem-interest-list">
              <li>Global governance</li>
              <li>International trade and development</li>
            </ul>
          </label>
        </div>
      </div>
      <div className="registeritem-btnWrapper">
        <button type="submit" className="registeritem-submitBtn">Keyingisi</button>
      </div>
    </form>
  )
}