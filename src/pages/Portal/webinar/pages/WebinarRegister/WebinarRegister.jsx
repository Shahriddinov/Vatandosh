import { useState } from "react";
import { ExpertTitle } from "../../../expert/components";
import "./WebinarRegister.scss";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import "../../../expert/pages/ExpertRegister/ExpertRegister.scss";
import RegisterTwo from "./components/RegisterTwo/RegisterTwo";
import RegisterOne from "./components/RegisterOne/RegisterOne";

export default function WebinarRegister() {
  let [activeBarItem, setactiveBarItem] = useState(0);
  console.log(activeBarItem);
  const { t } = useTranslation();
  const url = [
    { title: t("expert.main"), url: "/portal-category/webinar" },
    { title: t("projects_page.participate_btn"), url: "" },
  ];
  return (
    <main className="expertregister">
      <div className="container">
        <ExpertTitle title={t("projects_page.participate_btn")} url={url} />
        <div className="expertregister-main">
          <ul className="expertregister-main-bar">
            {[t("expert.reg1"), t("expert.reg5")].map((el, index) => {
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
            <RegisterOne
              activeBarItem={activeBarItem}
              setActiveBarItem={setactiveBarItem}
            />
            <RegisterTwo activeBarItem={activeBarItem} />
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}
