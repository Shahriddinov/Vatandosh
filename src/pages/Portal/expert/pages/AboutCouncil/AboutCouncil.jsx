import { Spinner } from "../../../../../component";
import About from "../../components/About/About";
import { t } from "i18next";
import { useAboutCouncil } from "./hooks/useAboutCouncil";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";

function AboutCouncil() {
  const {
    expertCount,
    expertCountLoading,
    expertPageLoading,
    expertPage,
    lan,
    expertError,
  } = useAboutCouncil();

  if (expertCountLoading || expertPageLoading) {
    return <Spinner position="full" />;
  } else if (expertError) {
    return <p>{expertError}</p>;
  }
  const findExpertAboutPage = expertPage?.find((el) => el.type === 1);

  const aboutData = {
    title: t("expert.councildetail"),
    path: {
      pageHomeUrl: "/portal-category/expert",
      pageHomeName: t("expert.main"),
      pageName: t("expert.detail"),
    },
    img1: PORTAL_IMAGE_URL + findExpertAboutPage?.image,
    title2: findExpertAboutPage[`title_${lan}`],
    desc1: findExpertAboutPage[`text_${lan}`],
  };

  return (
    <div>
      <About aboutData={aboutData} expertCount={expertCount} />
    </div>
  );
}
export default AboutCouncil;
