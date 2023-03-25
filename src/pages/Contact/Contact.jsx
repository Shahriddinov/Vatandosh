import { Link } from "react-router-dom";
import Header from "../../component/Layout/Header/Header";
import { MdArrowRight } from "react-icons/md";
import "./Contact.scss";
import flag from '../../assets/images/icons/uzbek-flag.svg';
import { FaLocationArrow } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { sendContact } from "../../reduxToolkit/contactSlice/extraReducer";
import { useRef, useState } from "react";

export default function Contact() {
  const dispatch = useDispatch();
  const formRef = useRef();
  const [dataContact, setDataContact] = useState({ name: "", phone: "" });

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
          <a className="contact-map-navigation" href="https://goo.gl/maps/FNqgiPrRzpRgjN3K6">
            <FaLocationArrow />
            Найти кампус
          </a>
        </div>
      </div>
    </>
  )
}
