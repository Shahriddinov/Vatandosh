import { Link } from "react-router-dom";
import Header from "../../component/Layout/Header/Header";
import { MdArrowRight } from "react-icons/md";
import "./Contact.scss";
import { SiMetrodeparis } from "react-icons/si";
import { BiWalk } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  getContact,
  sendContact,
} from "../../reduxToolkit/contactSlice/extraReducer";
import { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-number-input";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const lan = useSelector((state) => state.language.language);
  const dispatch = useDispatch();
  const formRef = useRef();
  const [dataContact, setDataContact] = useState({ name: "", phone: "" });
  const [activeMapNavigationBar, setactiveMapNavigationBar] = useState(true);
  const contactData = useSelector((state) => state.contactSlice?.contactData);
  const { t } = useTranslation();

  console.log(contactData);

  useEffect(() => {
    dispatch(getContact());
  }, []);

  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(sendContact(dataContact));
    formRef.current.reset();
  };

  return (
    <>
      <Header />
      <div className="contact">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-desc">
              <div className="contact-desc-title-url">
                <h1 className="contact-desc-title">
                  {t("contactPage.contactUs")}
                </h1>
                <div className="contact-desc-url">
                  <Link to="/">{t("mainPage")}</Link>
                  <MdArrowRight />
                  <span>{t("contactPage.contactUs")}</span>
                </div>
              </div>
              <div className="contact-desc-text">
                <p>{t("aboutPage.section1.ptext")}</p>
              </div>
            </div>
            <div className="contact-action">
              <div className="contact-action-form-wrapper">
                <h2 className="contact-action-title">
                  {t("contactPage.appForm")}
                </h2>
                <form
                  className="contact-action-form"
                  ref={formRef}
                  onSubmit={handleSumbit}
                >
                  <input
                    className="contact-action-form-nameInput"
                    type="text"
                    placeholder={t("contactPage.yourName")}
                    minLength={3}
                    maxLength={50}
                    required
                    onChange={(e) =>
                      setDataContact((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                  />
                  <PhoneInput
                    className="contact-action-form-numberInput"
                    placeholder={t("contactPage.yourNumber")}
                    value={dataContact.phone}
                    onChange={(e) =>
                      setDataContact((prev) => ({ ...prev, phone: e?.value }))
                    }
                  />
                  <textarea
                    name=""
                    id=""
                    className="contact-action-form-areaInput"
                    required
                    placeholder={t("contactPage.addInfo")}
                    onChange={(e) =>
                      setDataContact((prev) => ({
                        ...prev,
                        text: e.target.value,
                      }))
                    }
                  ></textarea>
                  <div className="contact-action-form-btn-wrapper">
                    <button className="contact-action-form-btn" type="submit">
                      {t("contactPage.send")}
                    </button>
                  </div>
                </form>
              </div>
              {contactData ? (
                <div className="contact-action-address">
                  <div className="contact-action-address-item">
                    <span>{t("contactPage.address")}</span>
                    <strong>{contactData[`address_${lan}`]}</strong>
                  </div>
                  <div className="contact-action-address-item">
                    <span>{t("contactPage.workingHours")}</span>
                    <strong>{contactData[`openinghours_${lan}`]}</strong>
                  </div>
                  <div className="contact-action-address-item">
                    <span>{t("contactPage.contactInfo")}</span>
                    <a href={`tel:${contactData.phone}`}>{contactData.phone}</a>
                    <a href={`mailto:${contactData.email}`}>
                      {contactData.email}
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="contact-map">
          <iframe
            className="contact-map-iframe"
            src={`https://yandex.uz/map-widget/v1/-/CCUBAVbA3C?scroll=false&lang=${lan}`}
            frameBorder={0}
            allowFullScreen={true}
          ></iframe>
          {
            <div
              className="contact-map-navigation"
              style={!activeMapNavigationBar ? { scale: 0 } : null}
            >
              <RiCloseFill
                className="contact-map-navigation-closeIcon"
                onClick={() => setactiveMapNavigationBar(false)}
              />
              <div className="contact-map-navigation-title">
                <h3>Muqimiy koʻchasi, 166</h3>
                <p>Toshkent</p>
              </div>
              <div className="contact-map-navigation-marsh">
                <div className="contact-map-navigation-marsh-item">
                  <SiMetrodeparis className="contact-map-navigation-marsh-item-metroIcon" />
                  <span>Novza</span>
                  <a
                    target={"_blank"}
                    href="https://yandex.uz/maps/10335/tashkent/?from=mapframe&ll=69.220824%2C41.294111&mode=routes&rtext=41.292749%2C69.223505~41.295692%2C69.218247&rtt=pd&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTIyNTEzMzU1Ei5Pyrt6YmVraXN0b24sIFRvc2hrZW50LCBNdXFpbWl5IGtvyrtjaGFzaSwgMTY2IgoNvm-KQhXJLiVC&z=17"
                    className="contact-map-navigation-marsh-item-link"
                  >
                    <BiWalk className="contact-map-navigation-marsh-item-walkIcon" />
                    <span>610 m</span>
                  </a>
                </div>
                <div className="contact-map-navigation-marsh-item">
                  <SiMetrodeparis className="contact-map-navigation-marsh-item-metroIcon" />
                  <span>Mirzo Ulug'bek</span>
                  <a
                    target={"_blank"}
                    href="https://yandex.uz/maps/10335/tashkent/?from=mapframe&ll=69.217282%2C41.289394&mode=routes&rtext=41.283096%2C69.212793~41.295692%2C69.218247&rtt=pd&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTIyNTEzMzU1Ei5Pyrt6YmVraXN0b24sIFRvc2hrZW50LCBNdXFpbWl5IGtvyrtjaGFzaSwgMTY2IgoNvm-KQhXJLiVC&z=15"
                    className="contact-map-navigation-marsh-item-link"
                  >
                    <BiWalk className="contact-map-navigation-marsh-item-walkIcon" />
                    <span>1.87 km</span>
                  </a>
                </div>
                <div className="contact-map-navigation-marsh-item">
                  <SiMetrodeparis className="contact-map-navigation-marsh-item-metroIcon" />
                  <span>Milliy Bog'</span>
                  <a
                    target={"_blank"}
                    href="https://yandex.uz/maps/10335/tashkent/?from=mapframe&ll=69.227127%2C41.299663&mode=routes&rtext=41.304318%2C69.234868~41.295692%2C69.218247&rtt=pd&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTIyNTEzMzU1Ei5Pyrt6YmVraXN0b24sIFRvc2hrZW50LCBNdXFpbWl5IGtvyrtjaGFzaSwgMTY2IgoNvm-KQhXJLiVC&z=14.83"
                    className="contact-map-navigation-marsh-item-link"
                  >
                    <BiWalk className="contact-map-navigation-marsh-item-walkIcon" />
                    <span>2.13 km</span>
                  </a>
                </div>
              </div>
              <div className="contact-map-navigation-btns">
                <a
                  target={"_blank"}
                  href="https://yandex.uz/maps/10335/tashkent/house/YkAYdAZoS0EAQFprfX54dHpqZg==/inside/?from=mapframe&ll=69.218247%2C41.295693&tab=inside&z=16"
                >
                  {t("contactPage.houseOrg")}
                </a>
                <a
                  target={"_blank"}
                  href="https://yandex.uz/maps/10335/tashkent/?feedback=object%2Fedit&ll=69.218247%2C41.295693&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTIyNTEzMzU1Ei5Pyrt6YmVraXN0b24sIFRvc2hrZW50LCBNdXFpbWl5IGtvyrtjaGFzaSwgMTY2IgoNvm-KQhXJLiVC&z=16"
                >
                  {t("contactPage.warnUs")}
                </a>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  );
}
