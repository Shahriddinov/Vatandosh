import "./formComp.scss";
import penSvg from "../../../../../../../../assets/images/portal/privateInformation/pen.svg";
import calendarSvg from "../../../../../../../../assets/images/portal/privateInformation/calendar.svg";

const FormComp = ({ el, inputHandler }) => {
  const countrys = [
    {
      id: 1,
      name: "USA",
      value: "usa",
    },
    {
      id: 1,
      name: "UK",
      value: "uk",
    },
    {
      id: 1,
      name: "Australia",
      value: "australia",
    },
    {
      id: 1,
      name: "France",
      value: "france",
    },
  ];
  return (
    <>
      <div className="jobCont-hl"></div>
      <form className="form-cont">
        <div className="form-cont-left">
          <div className="form-cont-left-fieldCont">
            <label htmlFor="country">
              Ish joyi joylashgan davlat <span>*</span>
            </label>
            <div>
              <select
                id="country"
                value={el.jobLocatedCountry}
                onChange={(e) => inputHandler(e, el.id)}
                name="jobLocatedCountry"
              >
                {countrys.map((el, index) => (
                  <option key={index} value={el.value}>
                    {el.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-cont-left-fieldCont">
            <label htmlFor="position">
              Lavozimi <span>*</span>
            </label>
            <div>
              <input
                type="text"
                name="specialization"
                value={el.specialization}
                onChange={(e) => inputHandler(e, el.id)}
              />
              <img src={penSvg} alt="icon" />
            </div>
          </div>
          <div className="form-cont-left-checkBox">
            <input
              type="checkbox"
              name="currentlyWorking"
              onChange={(e) => inputHandler(e, el.id)}
              value={el.currentlyWorking}
            />
            <span>Hozirda shu sohada ishlayapti</span>
          </div>

          <div className="form-cont-left-fieldCont">
            <label htmlFor="yearOfStart">
              Ish boshlagan yili <span>*</span>
            </label>
            <div>
              <input
                type="date"
                id="yearOfStart"
                name="startDate"
                value={el.startDate}
                onChange={(e) => inputHandler(e, el.id)}
              />
              <img src={calendarSvg} alt="cal" />
            </div>
          </div>
        </div>
        <div className="form-cont-right">
          <div className="form-cont-right-fieldCont">
            <label htmlFor="jobcity">
              Ish joyi joylashgan davlatni mintaqasi yoki shahar <span>*</span>
            </label>
            <div>
              <input
                type="text"
                id="jobcity"
                name="jobLocatedCity"
                value={el.jobLocatedCity}
                onChange={(e) => inputHandler(e, el.id)}
              />
              <img src={penSvg} alt="cal" />
            </div>
          </div>
          <div className="form-cont-right-fieldCont">
            <label htmlFor="jobplace">
              Ish joyi <span>*</span>
            </label>
            <div>
              <input
                type="text"
                id="jobplace"
                name="workPlace"
                value={el.workPlace}
                onChange={(e) => inputHandler(e, el.id)}
              />
              <img src={penSvg} alt="cal" />
            </div>
          </div>

          <div className="form-cont-right-fieldCont">
            <label htmlFor="yearOfEnd">
              Tamomlagan yil <span>*</span>
            </label>
            <div>
              <input
                type="date"
                id="yearOfEnd"
                name="finishDate"
                value={el.finishDate}
                onChange={(e) => inputHandler(e, el.id)}
              />
              <img src={calendarSvg} alt="cal" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormComp;
