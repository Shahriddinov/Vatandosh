import React from "react";
import { WebinarOne } from "../../../../../../../assets/images/webinar";
import "./WebinarHeader.scss";

function WebinarHeader() {
  return (
    <div className="webinarheader">
      <div className="container">
        <div className="webinarheader-left">
          <div className="webinarheader-list">
            <img src={WebinarOne} alt="" className="webinar-img" />
          </div>
          <div className="webinarheader-right">
            <h5>Выпуск: 01.02.2022</h5>
            <h2>Vatandosh jurnalining yanvar oyidagi soni</h2>
            <h6>О журнале</h6>
            <p>
              Based on an original new story by J.K. Rowling, Jack Thorne and
              John Tiffany, a new play by Jack Thorne, Harry Potter and the
              Cursed Child is the eighth story in the Harry Potter series and
              the first official Harry Potter story to be presented on stage.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebinarHeader;
