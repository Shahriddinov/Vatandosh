import React from "react";

import "./learnMagazines.scss";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";

const LearnMagazines = ({ tips }) => {
  const data = tips.length > 0 && tips[0];

  return (
    <section className="learn-magazines">
      <div className="learn-magazines__container container">
        <div className="learn-magazines__inner">
          <div className="learn-magazines__inner_img">
            <img
              className="img"
              src={`${PORTAL_IMAGE_URL}${data?.image}`}
              alt={data?.title}
            />
          </div>
          <div className="learn-magazines__inner_content">
            <h3 className="learn-magazines__inner_title">{data?.title}</h3>
            <p className="learn-magazines__inner_desc">{data?.content}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMagazines;
