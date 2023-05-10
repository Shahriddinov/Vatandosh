import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "../../../../../../../assets/images/communityAssociation";

const CommunityPageTop = ({ pageTopData }) => {
  return (
    <div className="page-top">
      <h3 className="page-top__title">{pageTopData?.title}</h3>

      <ul className="page-top__breadcrumb">
        {pageTopData?.pathUrl.map((path) => (
          <Fragment key={path.id}>
            {!path.active ? (
              <li className="page-top__breadcrumb_item">
                <Link className="page-top__breadcrumb_link" to={path?.pathUrl}>
                  {path.label}
                </Link>
                <img
                  className="page-top__arrow"
                  src={ArrowRight}
                  alt="breadcrumb line"
                />
              </li>
            ) : (
              <li
                className="page-top__breadcrumb_item page-top__breadcrumb_item_active"
                aria-current="page"
              >
                {path.label}
              </li>
            )}
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default CommunityPageTop;
