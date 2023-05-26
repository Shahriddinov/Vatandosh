import React from "react";

import { NewNumberCard } from "./components";

import "./newNumber.scss";
import { useNewNumber } from "./hooks/useNewNumber";
import { Spinner } from "../../../../../component";
const NewNumber = () => {
  const { error, aboutLoading, about } = useNewNumber();

  if (aboutLoading) return <Spinner position="full" />;
  else if (error) return <p>{error}</p>;

  return (
    <main className="new-number">
      <div className="new-number__container container">
        <div className="new-number__inner">
          <h3 className="new-number__inner_title">СОДЕРЖАНИЕ НОВОГО НОМЕРА</h3>
          <ul className="new-number__inner_list">
            {about.map((el) => (
              <NewNumberCard {...el} key={el.id} />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default NewNumber;
