import React from "react";
import "./facilitiesCard.scss";
import { useNavigate } from "react-router-dom";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";

const FacilitiesCard = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="facility_card"
        onClick={() =>
          navigate(`/portal-category/about-uzbekistan/city/${props.id}`)
        }
        style={{ cursor: "pointer" }}
      >
        <div className="facility_card_cover">
          <img
            src={`${PORTAL_IMAGE_URL}${props?.thumbnail}`}
            alt={props?.title}
          />
        </div>
        <p className="facility_card_text">{props?.title}</p>
      </div>
    </>
  );
};

export default FacilitiesCard;
