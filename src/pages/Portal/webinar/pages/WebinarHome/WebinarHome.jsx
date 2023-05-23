import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Nav from "./components/Nav/Nav";
import WebinarHeader from "./components/Header/Header";
import "./WebinarHome.scss";
import { useTranslation } from "react-i18next";
import Webinar from "../../../../../assets/images/webinar/Vebinarlar.png";
import WebinarCouncil from "./components/WebinarCouncil/WebinarCouncil";
import { CouncilImage } from "../../../../../assets/images/webinar";
import WebinarEvents from "./components/WebinarEvents/WebinarEvents";
import WebinarNews from "./components/WebinarNews/WebinarNews";
import { useDispatch, useSelector } from "react-redux";
import { getPortalNews } from "../../../../../reduxToolkit/portalSlices/portalNewsSlice/portalNewsSlice";
import News from "../../../expert/pages/ExpertHome/components/News/News";
import { getMeetingPage } from "../../../../../reduxToolkit/portalSlices/meetingSlice/extraReducer";
import { Spinner } from "../../../../../component";
import { getWebinarBody } from "../../../../../reduxToolkit/webinar/getwebinarbody";

function WebinarHome() {
  const { navData, navbarUrl } = useOutletContext();
  const { t } = useTranslation();
  const language = useSelector((store) => store.language.language);
  const error = useSelector((state) => state.sliderSlice.error);
  const loading = useSelector((state) => state.sliderSlice.loading);
  const meetingNews = useSelector((store) => store.portalNews.news);
  const meetingNewsLoading = useSelector((store) => store.portalNews.loading);
  const meetingPage = useSelector((store) => store.meetingSlice.pageData);
  const sliderData = useSelector(
    (state) => state.webinarBodySlice.webinarDataBody
  );
  const meetingPageLoading = useSelector(
    (store) => store.meetingSlice.pageLoading
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPortalNews({ type: "webinar", per_page: 3, page: 1 }));
    dispatch(getMeetingPage());
    dispatch(getWebinarBody());
  }, [language]);

  const headerData = {
    title: t("webinar.headerName"),
    subTitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy `,
    link: "/portal-category/webinar",
  };

  const councilData = {
    title: t("webinar.council"),
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: CouncilImage,
    pathUrl: "/portal-category/webinar/webinar-about",
  };

  if (meetingPageLoading || meetingNewsLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="webinar-home">
        <div className="webinar-body">
          <Navbar navbarUrl={navbarUrl} />
          <Nav navData={navData} />
        </div>
        <WebinarHeader
          loading={loading}
          error={error}
          headerData={headerData}
          sliderData={sliderData}
        />
      </div>
      <WebinarCouncil councilData={councilData} meetingPage={meetingPage} />
      <WebinarEvents />
      <News
        communityNews={meetingNews?.data}
        url={"/portal-category/webinar"}
      />
    </div>
  );
}

export default WebinarHome;
