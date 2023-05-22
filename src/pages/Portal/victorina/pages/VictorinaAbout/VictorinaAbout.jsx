import { useDispatch, useSelector } from "react-redux";
import { NotebookImage } from "../../../../../assets/images/victorina";
import { CouncilImage } from "../../../../../assets/images/volunter";
import ShareFriends from "../../../../../component/ShareFriends/ShareFriends";
import CouncilStatics from "../../../expert/pages/ExpertHome/components/Council/CouncilStatics";
import "./VictorinaAbout.scss";
import { getQuizPage } from "../../../../../reduxToolkit/victorinapage/victorina-page";
import { useEffect } from "react";
import { imageUrl } from "../../../../../services/api/utils";
import VictorinaStatics from "../VictorinaHome/components/VictorinaStatics/VictorinaStatics";

function VictorinaAbout() {
  const dispatch = useDispatch();
  const pageData = useSelector((state) => state.pageSlice.pageData);

  useEffect(() => {
    dispatch(getQuizPage());
  }, []);

  return (
    <div className="about">
      <div className="container">
        <div className="about-top">
          <h3>Victorinalar haqida</h3>
          <span>
            <a href="/portal-category/victorina">Asosiy</a>
            <p>Batafsil</p>
          </span>
        </div>
        <div className="about-page">
          <div className="about-left">
            <img
              className="victorina-images"
              src={`${imageUrl}/${pageData?.image}`}
              alt="error"
            />
            <h3 className="about-title">{pageData?.title}</h3>
            <p className="about-text">{pageData.excerpt}</p>
            <img
              className="victorina-images"
              src={`${imageUrl}/${pageData?.image}`}
              alt="error"
            />
            <p
              className="about-text"
              dangerouslySetInnerHTML={{ __html: pageData.body }}
            />
            <ShareFriends />
          </div>
          <VictorinaStatics pageData={pageData} />
        </div>
      </div>
    </div>
  );
}
export default VictorinaAbout;
