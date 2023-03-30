import "./ExpertRegister.scss";
import { Link } from 'react-router-dom'
import Header from "../../component/Layout/Header/Header";
import { MdArrowRight } from "react-icons/md";
import { useState } from "react";
import RegisterItem1 from "./components/register1/RegisterItem1";
import RegisterItem2 from "./components/register2/RegisterItem2";
import RegisterItem3 from "./components/register3/RegisterItem3";
import RegisterItem4 from "./components/register4/RegisterItem4";
import RegisterItem5 from "./components/register5/RegisterItem5";

export default function ExpertRegister() {
  const [activeBarItem, setactiveBarItem] = useState(0);

  return (
    <>
      <Header />
      <main className='expertregister'>
        <div className="container">
          <div className="expertregister-title">
            <h1 className="expertregister-title-text">Ro‘yxatdan o‘tish</h1>
            <div className="expertregister-title-url">
              <Link to={"/"}>Asosiy</Link>
              <MdArrowRight />
              <span>Ro‘yxatdan o‘tish</span>
            </div>
          </div>
          <div className="expertregister-main">
            <ul className="expertregister-main-bar">
              {
                ["Shaxsiy ma’lumotingiz", "Oliy ma’lumotingiz", "Mehnat faoliyatingiz", "Ilmiy faoliyatingiz", "Taklifingiz"].map((el, index) => {
                  return <li key={index} className="expertregister-main-bar-item"
                    onClick={() => setactiveBarItem(index)}>
                    <div className={activeBarItem === index ? "expertregister-main-bar-item-border activeBarItem" : "expertregister-main-bar-item-border"}></div>
                    <span>{el}</span>
                  </li>
                })
              }
            </ul>
            <div className="expertregister-main-list">
              {/* <RegisterItem1 /> */}
              <RegisterItem2 />
              {/* <RegisterItem3 />
              <RegisterItem4 />
              <RegisterItem5 /> */}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
