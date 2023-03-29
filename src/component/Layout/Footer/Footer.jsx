import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import "./Footer";
import FooterBottom from "../../footerBottom/FooterBottom";
import { getContact } from "../../../reduxToolkit/contactSlice/extraReducer";

import logoImg from "../../../assets/images/icons/logo.png";

import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import ContactUs from "../../ContactUs/ContactUs";

const Footer = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const contactData = useSelector(
    (state) => state.contactSlice.contactData
  );

  useEffect(() => {
    dispatch(getContact());
  }, []);

  return (
   <>
     <ContactUs/>
     <div className="footer">
       <div className="footer_card container">
         <div className="footer-information">
           <div className="footer-top">
             <div className="company-logo">
               <img src={logoImg} alt="logo" />
               <p>{t("footerFund")}</p>
             </div>
             <div className="footer-menu-right">
               <div className="footer-menu">
                 <ul>
                   <li>
                     <a href="#">{t("footerAbout")}</a>
                   </li>
                   <li>
                     <a href="#">{t("footerCompatriots")}</a>
                   </li>
                   <li>
                     <a href="#">{t("footerProjects")}</a>
                   </li>
                   <li>
                     <a href="#">{t("footerSelections")}</a>
                   </li>
                   <li>
                     <a href="#">{t("footerService")}</a>
                   </li>
                   <li>
                     <a href="#">{t("footerContact")}</a>
                   </li>
                 </ul>
               </div>
               <div className="footer-menu">
                 <ul>
                   <li>
                     <a href="#">{t("footerFamily")}</a>
                   </li>
                   <li>
                     <a href="#">{t("footerSport")}</a>
                   </li>
                   <li>
                     <a href="#">{t("footerYoung")}</a>
                   </li>
                   <li>
                     <a href="#">{t("footerPrecious")}</a>
                   </li>
                   <li>
                     <a href="#">{t("footerOverseaDish")}</a>
                   </li>
                   <li>
                     <a href="#">{t("footerOverseaOrganization")}</a>
                   </li>
                 </ul>
               </div>
               <div className="footer-right">
                 <h5>{t("footerOurContacts")}</h5>
                 <p>
                   <FiPhone />{" "}
                   <a href={`tel: ${contactData?.phone}`}>
                     {contactData?.phone}
                   </a>
                 </p>
                 <p>
                   <HiOutlineMail />{" "}
                   <a href={`mailto: ${contactData?.email}`}>
                     {contactData?.email}
                   </a>
                 </p>
                 <div className="icons">
                   <a href={contactData?.facebook}>
                     <FaFacebookF />
                   </a>
                   <a href={contactData?.twitter}>
                     <FaTwitter />
                   </a>
                   <a href={contactData?.instagram}>
                     <RiInstagramFill />
                   </a>
                 </div>
               </div>
             </div>
           </div>
           <FooterBottom />
         </div>
       </div>
     </div>
   </>
  );
};

export default Footer;
