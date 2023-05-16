import React from "react";
import Volunter from "./components/VolunterCouncil/VolunterCouncil";
import "./VolunterHome.scss";
import { useOutletContext } from "react-router-dom";
import Nav from "../../../expert/components/Nav/Nav";
import Navbar from "../../../expert/components/Navbar/Navbar";
import backImg from "../../../../../assets/images/volunter/volunter.png";
import Council from "./components/Council/Council";
import Header from "../../components/Header/Header";
import News from "../../../expert/pages/ExpertHome/components/News/News";
import { Spinner } from "../../../../../component";
import { useVolunteerHomeFetching } from "./hooks/useVolunteerHomeFetching";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";


function VolunterHome() {
  const { navData, navbarUrl } = useOutletContext();
  const {
    VolunteerCountLoading,
    VolunteerCount,
    volunteerPage,
    volunteerPageLoading,
    VolunteerError,
    lan,
    expertError,
    volunteerNews,
    volunteerNewsLoading,
    volunteerNewsError,
    volunteers,
    volunteersLoading,
  } = useVolunteerHomeFetching();
  if (
    VolunteerCountLoading ||
    volunteerPageLoading ||
    volunteerNewsLoading ||
    volunteersLoading
  ) {
    return <Spinner position="full" />;
  } else if (VolunteerError || expertError || volunteerNewsError) {
    return (
      <p>
        {VolunteerError
          ? VolunteerError
          : expertError
          ? expertError
          : volunteerNewsError
          ? volunteerNewsError
          : null}
      </p>
    );
  }


  const findExpertHeroPage = volunteerPage.find((el) => el.type === 4);
  const findExpertAboutPage = volunteerPage.find((el) => el.type === 2);
  const headerData = {
    title: findExpertHeroPage[`title_${lan}`],
    subTitle: findExpertHeroPage[`text_${lan}`],
    link: "/portal-category/volunteer/register",
  };

  const councilData = {
    title: findExpertAboutPage[`title_${lan}`],
    desc:
      findExpertAboutPage[`text_${lan}`]?.split(" ")?.slice(0, 25)?.join(" ") +
      "...",
    image: PORTAL_IMAGE_URL + findExpertAboutPage?.image,
    pathUrl: "/portal-category/volunteer/council-about",
    count: volunteers.total,
  };

  return (
    <>
      <div
        className="volunter-home"
        style={{ backgroundImage: `url(${backImg})` }}
      >
        <Navbar navbarUrl={navbarUrl} />
        <Nav navData={navData} />
        <Header headerData={headerData} />
      </div>
      <Council councilData={councilData} VolunteerCount={VolunteerCount} />
      <Volunter volunteers={volunteers.data} />
      <News communityNews={volunteerNews?.data} />

    </>
  );
}

export default VolunterHome;
