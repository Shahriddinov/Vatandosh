import React from "react";
import { useSelector } from "react-redux";
import {
  Blazon,
  Flag,
  MobilePhone,
  Music,
} from "../../../../../../../assets/images";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MobileCenter = () => {
  const contactData = useSelector(
    (state) => state.contactSlice.contactData.data
  );
  return (
    <div className="header-sideBar-navlinks">
      <div className="header-sideBar-connection">
        <a
          href={`tel: ${contactData?.phone}`}
          className="header-sideBar-connection-item"
        >
          <img src={MobilePhone} alt="phone" />
          <span>0800-120-55 55</span>
        </a>
        <a
          href={`mailto: ${contactData?.email}`}
          className="header-sideBar-connection-item"
        >
          <HiOutlineMail className="header-sideBar-connection-item-icon" />
          <span>info@Vatandoshlar</span>
        </a>
        <div className="header-sideBar-connection-action">
          <Link to="/flag">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Flag}
              className="header-sideBar-connection-action-img"
              alt="flag"
            />
          </Link>
          <Link to="/coat">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Blazon}
              className="header-sideBar-connection-action-img"
              alt="blazon"
            />
          </Link>
          <Link to="/anthem">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Music}
              className="header-sideBar-connection-action-img"
              alt="music"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileCenter;
