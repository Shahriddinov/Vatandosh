import { useState } from "react";
import "./card.scss";

// libarary
import { motion } from "framer-motion";

// icons
import minusIcon from "../../../../../../../../assets/images/choose/minusIcon.svg";
import trashIcon from "../../../../../../../../assets/images/choose/trashIcon.svg";
import plusIcon from "../../../../../../../../assets/images/choose/plusIcon.svg";
import { useSelector } from "react-redux";
import { MySelect } from "../../../../../../communityAssociation/pages/communityAssociationRegister/components";
import { cabinetEducationDataChange, deleteCabinetEducation } from "../extra";
import { useTranslation } from "react-i18next";

const Card = ({ el, data, setData, dispatch }) => {
  const { t } = useTranslation();
  const { specialization } = useSelector((state) => state.expertRegisterSlice);
  const [btnToggle, setBtnToggle] = useState(false);

  const deleteHandler = () => deleteCabinetEducation(el.id, dispatch);

  const handleChange = ({ key, value }) =>
    cabinetEducationDataChange({ key, value, data, el, setData });

  const findSpecialization = specialization?.find(
    (item) => item.id === el?.specialization_id
  );

  return (
    <motion.div
      animate={{ height: !btnToggle ? "auto" : "70px" }}
      className="card-container"
    >
      <div className="card-container-hl"></div>
      <div className="card-container-header-cont">
        <h1>{el.institution}</h1>
        <div>
          <motion.img
            onClick={() => setBtnToggle((prev) => !prev)}
            whileTap={{ scale: 0.9 }}
            src={btnToggle ? plusIcon : minusIcon}
            alt="plusMinusIcons"
          />
          <motion.img
            onClick={deleteHandler}
            whileTap={{ scale: 0.9 }}
            src={trashIcon}
            alt="trashIcon"
          />
        </div>
      </div>

      <div className="card-container-inputWrapper1">
        <label htmlFor="univercity">
          {t("private-information.educatedAbroad")}
        </label>
        <div>
          <input
            type="text"
            id="univercity"
            name="univercity"
            onChange={(evt) =>
              handleChange({ key: "institution", value: evt.target.value })
            }
            value={el?.institution}
            placeholder="Kiriting"
          />
        </div>
      </div>

      <div className="card-container-inputWrapper2">
        <div className="card-container-inputWrapper2-wrapper">
          <label htmlFor="faculty">
            {" "}
            {t("private-information.abroadFaculty")}
          </label>
          <div>
            <input
              type="text"
              id="faculty"
              name="faculty"
              onChange={(evt) =>
                handleChange({ key: "faculty", value: evt.target.value })
              }
              value={el?.faculty}
              placeholder="Kiriting"
            />
          </div>
        </div>
        <div className="card-container-inputWrapper2-select">
          <MySelect
            value={findSpecialization ? findSpecialization?.label : ""}
            handleChange={handleChange}
            data={specialization}
            text={t("private-information.spacialty")}
            valueKey={"specialization_id"}
          />
          {/* <label htmlFor="specialty">Xorijdagi mutaxassisligi</label>
          <div>
            <select name="specialty" id="specialty" onChange={changeHandler}>
              {obj.specialties.map((each, id) => (
                <option key={id} value={each}>
                  {each}
                </option>
              ))}
            </select>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
