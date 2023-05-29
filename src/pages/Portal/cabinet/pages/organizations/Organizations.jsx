import "./organizations.scss";
import plusIcon from "../../../../../assets/images/portal/cabinetVolunteer/plusIcon.png";
import flagIcon from "../../../../../assets/images/portal/cabinetVolunteer/flag.png";
import bodyIcon from "../../../../../assets/images/portal/cabinetVolunteer/bodyIcon.png";
import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import { btnHandler } from "../../../../../reduxToolkit/orgPageSlice";
import { useOrganizationFetching } from "./hooks/useOrganizationFetching";
import { Spinner } from "../../../../../component";
import OrganizationList from "./components/organizationList/OrganizationList";

const fakeData = [
  {
    id: 1,
    flag: flagIcon,
    country: "Kirgizistan",
    text: "Botken viloyati Leylek tumanidagi o‘zbek milliy madaniyat markazi",
    channel: bodyIcon,
    count: 10,
  },
  {
    id: 2,
    flag: flagIcon,
    country: "Kirgizistan",
    text: "Botken viloyati Leylek tumanidagi o‘zbek milliy madaniyat markazi",
    channel: bodyIcon,
    count: 5,
  },
  {
    id: 3,
    flag: flagIcon,
    country: "Kirgizistan",
    text: "Botken viloyati Leylek tumanidagi o‘zbek milliy madaniyat markazi",
    channel: bodyIcon,
    count: 2,
  },
  {
    id: 4,
    flag: flagIcon,
    country: "Kirgizistan",
    text: "Botken viloyati Leylek tumanidagi o‘zbek milliy madaniyat markazi",
    channel: bodyIcon,
    count: 7,
  },
  {
    id: 5,
    flag: flagIcon,
    country: "Kirgizistan",
    text: "Botken viloyati Leylek tumanidagi o‘zbek milliy madaniyat markazi",
    channel: bodyIcon,
    count: 56,
  },
];

const Organizations = () => {
  const btnToggle = useSelector((state) => state.orgPageSlice.btnToggle);
  const dispatch = useDispatch();

  const {
    allCommunityGet,
    allCommunityGetLoading,
    error,
    allRegionsGetLoading,
  } = useOrganizationFetching();

  const toggleSwitchHandler = () => {
    dispatch(btnHandler());
  };

  if (allCommunityGetLoading || allRegionsGetLoading) {
    return <Spinner position="full" />;
  } else if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container-organizations">
      <div className="container-organizations-inner">
        <div className="container-organizations-inner-top">
          <span>Участие в общественных организациях</span>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleSwitchHandler}
          >
            <img src={plusIcon} alt="icon" /> <span>Tadbir</span>
          </motion.button>
        </div>

        <div className="container-organizations-inner-bottom">
          <OrganizationList data={allCommunityGet?.data} />
        </div>
      </div>
    </div>
  );
};

export default Organizations;
