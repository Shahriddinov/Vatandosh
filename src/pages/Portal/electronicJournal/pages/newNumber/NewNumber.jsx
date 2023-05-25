import React from "react";

import { NewNumberCard } from "./components";
import { newNumberData } from "../../data";

import "./newNumber.scss";
const NewNumber = () => {
  return (
    <main className="new-number">
      <div className="new-number__container container">
        <div className="new-number__inner">
          <h3 className="new-number__inner_title">СОДЕРЖАНИЕ НОВОГО НОМЕРА</h3>
          <ul className="new-number__inner_list">
            {newNumberData.map((el) => (
              <NewNumberCard {...el} key={el.id} />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default NewNumber;
