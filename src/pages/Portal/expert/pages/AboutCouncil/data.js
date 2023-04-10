import { t } from "i18next";
import {
  CouncilImage,
  CouncilImage2,
} from "../../../../../assets/images/expert";

export const aboutData = {
  title: t("expert.councildetail"),
  path: {
    pageHomeUrl: "/portal-category/expert",
    pageHomeName: t("expert.main"),
    pageName: t("expert.detail"),
  },
  img1: CouncilImage,
  title2: t("expert.counciltitle"),
  desc1:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  img2: CouncilImage2,
  desc2:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
};
