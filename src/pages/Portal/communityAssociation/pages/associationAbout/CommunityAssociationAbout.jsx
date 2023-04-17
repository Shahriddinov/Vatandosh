import React from "react";
import About from "../../../expert/components/About/About";
import { AboutImg } from "../../../../../assets/images/communityAssociation";
import { CouncilImage2 } from "../../../../../assets/images/expert";
import { useTranslation } from "react-i18next";

const CommunityAssociationAbout = () => {
  const { t } = useTranslation();

  const aboutData = {
    title: t("communityAssociation.community_association_about_title"),
    path: {
      pageHomeUrl: "/portal-category/community-association",
      pageHomeName: t("communityAssociation.navbar.navbar_link1"),
      pageName: t("communityAssociation.detail"),
    },
    img1: AboutImg,
    title2:
      "Xorijda istiqomat qilayotgan vatandoshlar tomonidan tashkil  etilgan jamoat birlashmalari",
    desc1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img2: CouncilImage2,
    desc2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };

  return <About aboutData={aboutData} />;
};

export default CommunityAssociationAbout;
