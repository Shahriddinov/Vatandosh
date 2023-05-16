import "./ExpertCouncil.scss";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import News from "./components/News/News";
import Council from "./components/Council/Council";
import Expert from "./components/ExpertCouncil/ExpertCouncil";
import { useOutletContext } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import { useTranslation } from "react-i18next";

import { useExpertHome } from "./hooks/useExpertHome";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPortalNews } from "../../../../../reduxToolkit/portalSlices/portalNewsSlice/portalNewsSlice";
import { Spinner } from "../../../../../component";

function ExpertCouncil() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { navData, navbarUrl } = useOutletContext();

  const {
    expertCount,
    expertCountLoading,
    expertPageLoading,
    expertPage,
    lan,
    expertError,
  } = useExpertHome();
  const communityNews = useSelector((store) => store.portalNews.news);
  const communityNewsLoading = useSelector((store) => store.portalNews.loading);

  useEffect(() => {
    dispatch(getPortalNews({ type: "expert", per_page: "3", page: 1 }));
  }, [dispatch]);

  if (expertCountLoading || expertPageLoading) {
    return <Spinner position="full" />;
  } else if (expertError) {
    return <p>{expertError}</p>;
  }
  const findExpertHeroPage = expertPage.find((el) => el.type === 3);
  const findExpertAboutPage = expertPage.find((el) => el.type === 1);

  const headerData = {
    title: findExpertHeroPage[`title_${lan}`],
    subTitle: findExpertHeroPage[`text_${lan}`],
    link: "/portal-category/expert/register",
    btnText: t("expert.register"),
  };

  const councilData = {
    title: findExpertAboutPage[`title_${lan}`],
    desc:
      findExpertAboutPage[`text_${lan}`]?.split(" ")?.slice(0, 25)?.join(" ") +
      "...",
    image: PORTAL_IMAGE_URL + findExpertAboutPage?.image,
    pathUrl: "/portal-category/expert/council-about",
  };

  return (
    <>
      <div
        className="expert-council"
        style={{
          backgroundImage: `url(${PORTAL_IMAGE_URL}${findExpertHeroPage.image})`,
        }}>
        {communityNewsLoading ? <Spinner position={"full"} /> : null}
        <Navbar navbarUrl={navbarUrl} />
        <Nav navData={navData} />
        <Header headerData={headerData} />
      </div>
      <Council councilData={councilData} expertCount={expertCount} />
      <Expert />
      <News
        communityNews={communityNews?.data}
        url={"/portal-category/community-association/news"}
      />
    </>
  );
}
export default ExpertCouncil;
