import { Spinner } from "../../../../../component";
import About from "../../components/About/About";
import { t } from "i18next";
import { useAboutCouncil } from "./hooks/useAboutCouncil";
import { isJson } from "../../../../../extra";

function AboutCouncil() {
  const {
    expertCount,
    expertCountLoading,
    data,
    communityNews,
    communityNewsLoading,
    error,
    expertAssociationsId,
  } = useAboutCouncil();
  const json = isJson(data?.images);
  const aboutData = {
    title: t("expert.councildetail"),
    path: {
      pageHomeUrl: "/portal-category/expert",
      pageHomeName: t("expert.main"),
      pageName: t("expert.detail"),
    },
    img1: json ? JSON.parse(data?.images)[0] : data?.image,
    title1: data?.title,
    desc1: data?.text,
    images: data?.images,
    id: data?.id,
  };

  if (expertCountLoading || communityNewsLoading) {
    return <Spinner position="full" />;
  } else if (error) {
    return <p>{error}</p>;
  }

  const newsData = communityNews?.data?.filter(
    (el) => el?.expert_association_id === expertAssociationsId * 1
  );

  return (
    <div>
      <About
        aboutData={aboutData}
        expertCount={expertCount}
        newsData={newsData}
      />
    </div>
  );
}
export default AboutCouncil;
