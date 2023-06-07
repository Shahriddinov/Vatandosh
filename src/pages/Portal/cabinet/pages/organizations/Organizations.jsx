import "./organizations.scss";
import plusIcon from "../../../../../assets/images/portal/cabinetVolunteer/plusIcon.png";
import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import { btnHandler } from "../../../../../reduxToolkit/orgPageSlice";
import { useOrganizationFetching } from "./hooks/useOrganizationFetching";
import { Spinner } from "../../../../../component";
import OrganizationList from "./components/organizationList/OrganizationList";

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
          {/* <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleSwitchHandler}
          >
            <img src={plusIcon} alt="icon" /> <span>Tadbir</span>
          </motion.button> */}
        </div>

        <div className="container-organizations-inner-bottom">
          <OrganizationList data={allCommunityGet?.data} />
        </div>
      </div>
    </div>
  );
};

export default Organizations;
