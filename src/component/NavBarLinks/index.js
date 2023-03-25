import { useTranslation } from "react-i18next";

export const NavBarLinks = () => {
  const { t } = useTranslation();
  return [
    {
      title: t("about"),
      links: [
        { title: t("about_items.item1"), url: "/about" },
        { title: t("about_items.item2"), url: "/about/council-trustees" },
      ],
    },
    {
      title: t("citizin"),
      links: [
        {
          title: t("citizin_items.item1"),
          url: "/compatriots/public-associations",
        },
        { title: t("citizin_items.item2"), url: "/category-shows" },
        {
          title: t("citizin_items.item3"),
          url: "/compatriots/public-association-events",
        },
      ],
    },
    {
      title: t("projects"),
      links: [
        { title: t("projects_items.item1"), url: "/projects" },
        { title: t("projects_items.item2"), url: "/projects" },
        { title: t("projects_items.item3"), url: "/projects" },
        { title: t("projects_items.item4"), url: "/projects" },
        { title: t("projects_items.item5"), url: "/projects" },
        { title: t("projects_items.item6"), url: "/projects" },
        { title: t("projects_items.item7"), url: "/projects" },
      ],
    },
    {
      title: t("contects"),
    },
    {
      title: t("information"),
      links: [
        {
          title: t("information_items.item1"),
          url: "/information-service/news",
        },
        { title: t("information_items.item2"), url: "/" },
        { title: t("information_items.item3"), url: "/" },
        { title: t("information_items.item4"), url: "/" },
        { title: t("information_items.item5"), url: "/" },
      ],
    },
    {

      title: t("link"),
      url: "/contact"
    },
  ];
};
