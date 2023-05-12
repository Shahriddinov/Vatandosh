import { useTranslation } from "react-i18next";
import aboutUsIcon from "../../assets/images/navMenuIcons/aboutNav/aboutUsIcon.svg";
import managementIcon from "../../assets/images/navMenuIcons/aboutNav/managementIcon.svg";
import botIcon from "../../assets/images/navMenuIcons/aboutNav/botIcon.svg";
import mainRoutesIcon from "../../assets/images/navMenuIcons/aboutNav/mainRoutesIcon.svg";

//
import PublicCompatriotsProjectsIcon from "../../assets/images/navMenuIcons/countryMan/PublicCompatriotsProjectsIcon.svg";
import paIcon from "../../assets/images/navMenuIcons/countryMan/publicAssociationsIcon.svg";
import publicEventsIcon from "../../assets/images/navMenuIcons/countryMan/publicEventsIcon.svg";
//
import allProjectsIcon from "../../assets/images/navMenuIcons/projects/allProjectsIcon.svg";
//
import newsIcon from "../../assets/images/navMenuIcons/informationService/newsIcon.svg";
import eventsIcon from "../../assets/images/navMenuIcons/informationService/eventsIcon.svg";
import mediaIcon from "../../assets/images/navMenuIcons/informationService/mediaIcon.svg";
import graphIcon from "../../assets/images/navMenuIcons/informationService/graphIcon.svg";
import coountryManIcon from "../../assets/images/navMenuIcons/informationService/countryManIcon.svg";
import { useSelector } from "react-redux";
import { baseServerUrl } from "../../services/api/utils";
import { createSelector } from "reselect";

export const NavBarLinks = () => {
  const lan = useSelector((state) => state.language.language);
  const projectsMenuData = createSelector(
    (state) => state.singleSlice.projectsData,

    (data) => {
      return data.map((item) => ({
        title: item[`menu_${lan}`],
        url: `/projects/columns?=${item?.id}`,
        icon: null,
        img: `${baseServerUrl + "/" + item?.logo}`,
      }));
    }
  );
  const projectsMenu = useSelector(projectsMenuData);
  const { t } = useTranslation();
  return [
    {
      title: t("about"),
      links: [
        { title: t("about_items.item1"), url: "/about", icon: aboutUsIcon },
        {
          title: t("about_items.item3"),
          url: "/about/management",
          icon: managementIcon,
        },
        {
          title: t("about_items.item2"),
          url: "/about/council-trustees",
          icon: botIcon,
        },
        {
          title: t("about_items.item4"),
          url: "/about/direction",
          icon: mainRoutesIcon,
        },
      ],
    },
    {
      title: t("citizin"),
      links: [
        {
          title: t("citizin_items.item1"),
          url: "/compatriots/public-associations",
          icon: paIcon,
        },
        {
          title: t("citizin_items.item2"),
          url: "/compatriots/categoryshows",
          icon: PublicCompatriotsProjectsIcon,
        },
        {
          title: t("citizin_items.item3"),
          url: "/compatriots/publicevents",
          icon: publicEventsIcon,
        },
      ],
    },
    {
      title: t("projects"),
      links: [
        {
          title: t("projects_items.item1"),
          url: "/projects",
          icon: allProjectsIcon,
        },
        ...projectsMenu,
      ],
    },
    {
      title: t("contects"),
    },
    // {
    //   title: t("contects"),
    // },
    {
      title: t("information"),
      links: [
        {
          title: t("information_items.item1"),
          url: "/information-service/news",
          icon: newsIcon,
        },
        {
          title: t("information_items.item2"),
          url: "/information-service/events",
          icon: eventsIcon,
        },
        {
          title: t("information_items.item3"),
          url: "/information-service/mediateka",
          icon: mediaIcon,
        },
        {
          title: t("information_items.item4"),
          url: "/information-service/infographics",
          icon: graphIcon,
        },
        {
          title: t("information_items.item5"),
          url: "/portal-category/electronic-journal",
          icon: coountryManIcon,
        },
      ],
    },
    {
      title: t("link"),
      url: "/contact",
    },
    // {
    //   title: t("link"),
    //   url: "/contact",
    // },
  ];
};
