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
import { Spinner } from "../../../../../component";

function ExpertCouncil() {
  const { t } = useTranslation();
  const { navData, navbarUrl } = useOutletContext();

  const {
    expertCount,
    expertCountLoading,
    expertPageLoading,
    expertPage,
    lan,
    expertError,
    communityNewsLoading,
    communityNews,
    expertData,
    loading,
  } = useExpertHome();

  if (
    expertCountLoading ||
    expertPageLoading ||
    communityNewsLoading ||
    loading
  ) {
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

  console.log(expertData);
  return (
    <>
      <div
        className="expert-council"
        style={{
          backgroundImage: `url(${PORTAL_IMAGE_URL}${findExpertHeroPage.image})`,
        }}
      >
        <Navbar navbarUrl={navbarUrl} />
        <Nav navData={navData} />
        <Header headerData={headerData} />
      </div>
      <Council
        expertData={expertData}
        councilData={councilData}
        expertCount={expertCount.slice(0, 5)}
      />
      <Expert expertData={expertData} loading={loading} />
      <News
        communityNews={communityNews?.data}
        url={"/portal-category/community-association/news"}
      />
    </>
  );
}
export default ExpertCouncil;
