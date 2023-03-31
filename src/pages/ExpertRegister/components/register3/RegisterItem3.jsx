import "../customStyles.scss";
import pencil from "../../../../assets/images/expert/input-pencil.svg";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import { BsPlusCircleFill } from "react-icons/bs";


export default function RegisterItem3({ activeBarItem }) {
  const [age, setAge] = useState('');

  const [checked, setChecked] = useState(false);

  const handleChangeCheckbox = (event) => {
    setChecked(event.target.checked);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form className={activeBarItem !== 2 ? 'registeritem3 registeritem-scaleHidden' : 'registeritem3 registeritem-scaleActive'} onSubmit={handleSubmit}>
      <div className="registeritem3-wrapper registeritem-borderLeft">
        <h3 className="registeritem-title">III. Mehnat faoliyatigiz</h3>
        <div className="registeritem-form">
          <div className="registeritem-flexbox">
            <label htmlFor="" className="registeritem-label">
              <p>Ish joyi joylashgan davlat<span>*</span></p>
              <FormControl style={{ padding: 0 }} >
                <Select className="registeritem-select"
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value={10}>AQSH</MenuItem>
                  <MenuItem value={20}>GERMANIYA</MenuItem>
                  <MenuItem value={30}>ITALIYA</MenuItem>
                </Select>
              </FormControl>
            </label>
            <label htmlFor="" className="registeritem-label">
              <p>Ish joyi joylashgan davlatni mintaqasi yoki shahar<span>*</span></p>
              <div>
                <input type="text" minLength={3} maxLength={200} placeholder={"Kiriting"} />
              </div>
            </label>
          </div>
          <label htmlFor="" className="registeritem-label">
            <p>Lavozimi</p>
            <div>
              <input type="text" minLength={3} maxLength={50} placeholder={"Kiriting"} />
              <img src={pencil} alt="" />
            </div>
          </label>
          <label htmlFor="" className="registeritem-label">
            <p>Ish joyi<span>*</span></p>
            <div>
              <input type="text" minLength={3} maxLength={100} placeholder={"Kiriting"} />
              <img src={pencil} alt="" />
            </div>
          </label>
          <div className="registeritem-checkbox">
            <Checkbox
              checked={checked}
              onChange={handleChangeCheckbox}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <p>Hozirda shu sohada ishlayapti</p>
          </div>
          <div className="registeritem-flexbox">
            <label htmlFor="" className="registeritem-label">
              <p>Ish boshlagan yili<span>*</span></p>
              <div>
                <input type="date" minLength={3} maxLength={100} placeholder={"Kiriting"} />
              </div>
            </label>
            <label htmlFor="" className="registeritem-label">
              <p>Tamomlagan yil<span>*</span></p>
              <div>
                <input type="date" minLength={3} maxLength={30} placeholder={"Kiriting"} />
              </div>
            </label>
          </div>
          <div className="registeritem-addForm"><BsPlusCircleFill /></div>
        </div>
      </div>
      <div className="registeritem-btnWrapper">
        <button type="submit" className="registeritem-submitBtn">Keyingisi</button>
      </div>
    </form>
  )
}