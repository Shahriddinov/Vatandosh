import ExpertTitle from "../../../expert/components/ExpertTitle/ExpertTitle";
import "../../../expert/pages/ExpertRegister/ExpertRegister.scss";
import { useState } from "react";
import RegisterItem1 from "../../../expert/pages/ExpertRegister/components/register1/RegisterItem1";
import RegisterItem2 from "../../../expert/pages/ExpertRegister/components/register2/RegisterItem2";
import RegisterItem3 from "../../../expert/pages/ExpertRegister/components/register3/RegisterItem3";
import RegisterItem4 from "../../../expert/pages/ExpertRegister/components/register4/RegisterItem4";
import RegisterItem5 from "../../../expert/pages/ExpertRegister/components/register5/RegisterItem5";
import Volunteer from "./components/volunteer/Volunteer";
import { useSelector } from "react-redux";
import Spinner from "../../../../../component/Spinner/Spinner";

export default function VolunterRegister() {
  let [activeBarItem, setactiveBarItem] = useState(0);
  const url = [
    { title: "Asosiy", url: "/portal-category/volunter" },
    { title: "Ariza berish", url: "/portal-category/volunter/register" },
  ];

  const { volunteerActivityLoading } = useSelector(
    (state) => state.volunteerSlice
  );

  return (
    <>
      <main className="expertregister">
        {volunteerActivityLoading ? <Spinner position={"full"} /> : null}
        <div className="container">
          <ExpertTitle title={"Ariza berish"} url={url} />
          <div className="expertregister-main">
            <ul className="expertregister-main-bar">
              {[
                "Shaxsiy ma’lumotingiz",
                "Oliy ma’lumotingiz",
                "Mehnat faoliyatingiz",
                "Ilmiy faoliyatingiz",
                "Taklifingiz",
                "Volonyorlik faoliyati",
              ].map((el, index) => {
                return (
                  <li
                    key={index}
                    className="expertregister-main-bar-item"
                    onClick={() => setactiveBarItem(index)}
                  >
                    <div
                      className={
                        activeBarItem === index
                          ? "expertregister-main-bar-item-border activeBarItem"
                          : "expertregister-main-bar-item-border"
                      }
                    ></div>
                    <span>{el}</span>
                  </li>
                );
              })}
            </ul>
            <div className="expertregister-main-list">
              <RegisterItem1
                activeBarItem={activeBarItem}
                setActiveBarItem={setactiveBarItem}
              />
              <RegisterItem2
                activeBarItem={activeBarItem}
                setActiveBarItem={setactiveBarItem}
              />
              <RegisterItem3
                activeBarItem={activeBarItem}
                setActiveBarItem={setactiveBarItem}
              />
              <RegisterItem4
                activeBarItem={activeBarItem}
                setactiveBarItem={setactiveBarItem}
              />
              <RegisterItem5 activeBarItem={activeBarItem} />
              <Volunteer activeBarItem={activeBarItem} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
