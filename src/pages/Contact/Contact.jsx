import { Link } from "react-router-dom";
import Header from "../../component/Layout/Header/Header";
import { MdArrowRight } from "react-icons/md";
import "./Contact.scss";
import flag from '../../assets/images/icons/uzbek-flag.svg';
import { SiMetrodeparis } from 'react-icons/si';
import { BiWalk } from 'react-icons/bi';
import { RiCloseFill } from 'react-icons/ri';
import { useDispatch, useSelector } from "react-redux";
import { sendContact } from "../../reduxToolkit/contactSlice/extraReducer";
import { useRef, useState } from "react";

export default function Contact() {
  const lan = useSelector((state) => state.language.language);
  const dispatch = useDispatch();
  const formRef = useRef();
  const [dataContact, setDataContact] = useState({ name: "", phone: "" });
  const [activeMapNavigationBar, setactiveMapNavigationBar] = useState(true);

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
                <h1 className="contact-desc-title">Bog'lanish</h1>
                <div className="contact-desc-url">
                  <Link to="/">Asosiy sahifa</Link>
                  <MdArrowRight />
                  <span>Bog'lanish</span>
                </div>
              </div>
              <div className="contact-desc-text">
                <p>Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish</p>
              </div>
            </div>
            <div className="contact-action">
              <div className="contact-action-form-wrapper">
                <h2 className="contact-action-title">Форма заявки для связи с нами</h2>
                <form className="contact-action-form" ref={formRef} onSubmit={handleSumbit}>
                  <input className="contact-action-form-nameInput" type="text" placeholder="Ваше имя" minLength={3} maxLength={50} required onChange={(e) => setDataContact((prev) => ({ ...prev, name: e.target.value }))} />
                  <label htmlFor="" className="contact-action-form-numberInput">
                    <img src={flag} alt="" />
                    <input type="tel" placeholder="+998" required pattern="^[0-9\-\+]{9,15}$" onChange={(e) => setDataContact((prev) => ({ ...prev, phone: e.target.value }))} />
                  </label>
                  <textarea name="" id="" className="contact-action-form-areaInput" required placeholder="Qoshimcha ma’lumot" onChange={(e) => setDataContact((prev) => ({ ...prev, text: e.target.value }))}></textarea>
                  <div className="contact-action-form-btn-wrapper">
                    <button className="contact-action-form-btn" type="submit">Отправить</button>
                  </div>
                </form>
              </div>
              <div className="contact-action-address">
                <div className="contact-action-address-item">
                  <span>Адрес</span>
                  <strong>100096. Toshkent sh. Muqimiy ko`chasi 166</strong>
                </div>
                <div className="contact-action-address-item">
                  <span>Часы работы</span>
                  <strong>Понедельник - Пятница 09:00 - 18:00</strong>
                  <strong>Суббота 09:00 - 13:00</strong>
                </div>
                <div className="contact-action-address-item">
                  <span>Контактная информация</span>
                  <a href="tel:+998555022299">+998 (55) 502-22-99</a>
                  <a href="mailto:info@vatandoshlarfondi.uz">info@vatandoshlarfondi.uz</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-map">
          <iframe className="contact-map-iframe" src={`https://yandex.uz/map-widget/v1/-/CCUBAVbA3C?scroll=false&lang=${lan}`} frameBorder={0} allowFullScreen={true}></iframe>
          {
            <div className="contact-map-navigation" style={!activeMapNavigationBar ? { scale: 0 } : null}>
              <RiCloseFill
                className="contact-map-navigation-closeIcon"
                onClick={() => setactiveMapNavigationBar(false)} />
              <div className="contact-map-navigation-title">
                <h3>Muqimiy koʻchasi, 166</h3>
                <p>Toshkent</p>
              </div>
              <div className="contact-map-navigation-marsh">
                <div className="contact-map-navigation-marsh-item">
                  <SiMetrodeparis className="contact-map-navigation-marsh-item-metroIcon" />
                  <span>Novza</span>
                  <a target={"_blank"} href="https://yandex.uz/maps/10335/tashkent/?from=mapframe&ll=69.220824%2C41.294111&mode=routes&rtext=41.292749%2C69.223505~41.295692%2C69.218247&rtt=pd&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTIyNTEzMzU1Ei5Pyrt6YmVraXN0b24sIFRvc2hrZW50LCBNdXFpbWl5IGtvyrtjaGFzaSwgMTY2IgoNvm-KQhXJLiVC&z=17" className="contact-map-navigation-marsh-item-link">
                    <BiWalk className="contact-map-navigation-marsh-item-walkIcon" />
                    <span>610 m</span>
                  </a>
                </div>
                <div className="contact-map-navigation-marsh-item">
                  <SiMetrodeparis className="contact-map-navigation-marsh-item-metroIcon" />
                  <span>Mirzo Ulug'bek</span>
                  <a target={"_blank"} href="https://yandex.uz/maps/10335/tashkent/?from=mapframe&ll=69.217282%2C41.289394&mode=routes&rtext=41.283096%2C69.212793~41.295692%2C69.218247&rtt=pd&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTIyNTEzMzU1Ei5Pyrt6YmVraXN0b24sIFRvc2hrZW50LCBNdXFpbWl5IGtvyrtjaGFzaSwgMTY2IgoNvm-KQhXJLiVC&z=15" className="contact-map-navigation-marsh-item-link">
                    <BiWalk className="contact-map-navigation-marsh-item-walkIcon" />
                    <span>1.87 km</span>
                  </a>
                </div>
                <div className="contact-map-navigation-marsh-item">
                  <SiMetrodeparis className="contact-map-navigation-marsh-item-metroIcon" />
                  <span>Milliy Bog'</span>
                  <a target={"_blank"} href="https://yandex.uz/maps/10335/tashkent/?from=mapframe&ll=69.227127%2C41.299663&mode=routes&rtext=41.304318%2C69.234868~41.295692%2C69.218247&rtt=pd&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTIyNTEzMzU1Ei5Pyrt6YmVraXN0b24sIFRvc2hrZW50LCBNdXFpbWl5IGtvyrtjaGFzaSwgMTY2IgoNvm-KQhXJLiVC&z=14.83" className="contact-map-navigation-marsh-item-link">
                    <BiWalk className="contact-map-navigation-marsh-item-walkIcon" />
                    <span>2.13 km</span>
                  </a>
                </div>
              </div>
              <div className="contact-map-navigation-btns">
                <a target={"_blank"} href="https://yandex.uz/maps/10335/tashkent/house/YkAYdAZoS0EAQFprfX54dHpqZg==/inside/?from=mapframe&ll=69.218247%2C41.295693&tab=inside&z=16">Uydagi tashkilotlar</a>
                <a target={"_blank"} href="https://yandex.uz/maps/10335/tashkent/?feedback=object%2Fedit&ll=69.218247%2C41.295693&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTIyNTEzMzU1Ei5Pyrt6YmVraXN0b24sIFRvc2hrZW50LCBNdXFpbWl5IGtvyrtjaGFzaSwgMTY2IgoNvm-KQhXJLiVC&z=16">Xato haqida xabar berish</a>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  )
}
