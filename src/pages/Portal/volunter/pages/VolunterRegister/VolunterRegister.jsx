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
import { useTranslation } from "react-i18next";

export default function VolunterRegister() {
  const { t } = useTranslation();
  let [activeBarItem, setactiveBarItem] = useState(0);
  const url = [
    { title: t("expert.main"), url: "/portal-category/volunter" },
    {
      title: t("communityAssociation.application"),
      url: "/portal-category/volunter/register",
    },
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
                t("expert.reg1"),
                t("expert.reg2"),
                t("expert.reg3"),
                t("expert.reg4"),
                t("voluntery.reg5"),
              ].map((el, index) => {
                return (
                  <li
                    key={index}
                    className="expertregister-main-bar-item"
                    onClick={() => setactiveBarItem(index)}>
                    <div
                      className={
                        activeBarItem === index
                          ? "expertregister-main-bar-item-border activeBarItem"
                          : "expertregister-main-bar-item-border"
                      }></div>
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
              <Volunteer activeBarItem={activeBarItem + 1} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
