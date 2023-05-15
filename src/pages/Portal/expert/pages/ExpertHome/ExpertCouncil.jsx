import "./ExpertCouncil.scss";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import News from "./components/News/News";
import Council from "./components/Council/Council";
import Expert from "./components/ExpertCouncil/ExpertCouncil";
import { useOutletContext } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import backImg from "../../../../../assets/images/expert/bgexpert.png";
import { CouncilImage } from "../../../../../assets/images/expert";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPortalNews } from "../../../../../reduxToolkit/portalSlices/portalNewsSlice/portalNewsSlice";
import { Spinner } from "../../../../../component";

function ExpertCouncil() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { navData, navbarUrl } = useOutletContext();
  const headerData = {
    title: t("expert.headertitle"),
    subTitle: t("expert.headersubtitle"),
    link: "/portal-category/expert/register",
    btnText: t("expert.register"),
  };

  const councilData = {
    title: t("expert.counciltitle"),
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised...",
    image: CouncilImage,
    pathUrl: "/portal-category/expert/council-about",
  };

  const communityNews = useSelector((store) => store.portalNews.news);
  const communityNewsLoading = useSelector((store) => store.portalNews.loading);

  useEffect(() => {
    dispatch(getPortalNews({ type: "expert", per_page: "3", page: 1 }));
  }, [dispatch]);

  return (
    <>
      <div
        className="expert-council"
        style={{ backgroundImage: `url(${backImg})` }}
      >
        {communityNewsLoading ? <Spinner position={"full"} /> : null}
        <Navbar navbarUrl={navbarUrl} />
        <Nav navData={navData} />
        <Header headerData={headerData} />
      </div>
      <Council councilData={councilData} />
      <Expert />
      <News
        communityNews={communityNews?.data}
        url={"/portal-category/community-association/news"}
      />
    </>
  );
}
export default ExpertCouncil;
