import React from "react";
import "./country.scss";
import { PageTop } from "../../components";
import { ArrowRight } from "../../../../../assets/images/communityAssociation";
import { IoTerminal } from "react-icons/io5";

const Country = () => {
  const pageTopData = {
    title: "Qirgʻiziston",
    pathUrl: [
      {
        id: 1,
        pathUrl: "/portal-category/community-association",
        label: "Asosiy",
        active: false,
      },
      {
        id: 2,
        pathUrl: null,
        label: "Qirgʻiziston",
        active: true,
      },
    ],
  };

  const data = [
    { id: 1, text: "Qirgʼiziston-Oʼzbekiston doʼstlik jamiyati" },
    {
      id: 2,
      text: "Qirg‘iziston Respublikasi o‘zbek milliy madaniyat markazi",
    },
    {
      id: 3,
      text: "Osh viloyati Ozbek milliy-madaniy markazi",
    },
    {
      id: 4,
      text: "Botken viloyati Leylek tumanidagi o‘zbek milliy madaniyat markazi",
    },
    {
      id: 5,
      text: "O‘sh shahar o‘zbek milliy markazi” jamoat birlashmasi",
    },
  ];
  return (
    <div className="community-association-country">
      <div className="community-association-country__container container">
        <div className="community-association-country__inner">
          <PageTop pageTopData={pageTopData} />

          <ul className="community-association-country__list">
            {data.map((item) => (
              <li className="community-association-country__item" key={item.id}>
                <span className="community-association-country__item--text">
                  {item.id}.{item.text}
                </span>
                <img
                  className="community-association-country__icon"
                  src={ArrowRight}
                  alt="Arrow right"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Country;
