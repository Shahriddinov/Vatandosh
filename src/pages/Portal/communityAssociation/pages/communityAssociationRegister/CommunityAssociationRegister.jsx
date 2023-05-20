import "../../../expert/pages/ExpertRegister/ExpertRegister.scss";
import { useState } from "react";
import "./communityAssociationRegister.scss";
import { PageTop } from "../../components";
import { registerPath } from "./data";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CommunityRegister1,
  CommunityRegister2,
  CommunityRegister3,
  CommunityRegister4,
  CommunityRegister5,
} from "./components";
import { useTranslation } from "react-i18next";

const CommunityAssociationRegister = () => {
  const { hash } = useLocation();
  let [activeBarItem, setActiveBarItem] = useState(
    hash ? hash.slice(1) : "application-1"
  );
  const navigation = useNavigate();
  const { t } = useTranslation();

  const handleClick = (url) => {
    setActiveBarItem(url);
    navigation(`/portal-category/community-association/application#${url}`);
  };

  const pageTopData = {
    title: t("communityAssociation.application"),
    pathUrl: [
      {
        id: 1,
        pathUrl: "/portal-category/community-association",
        label: t("communityAssociation.navbar.navbar_link1"),
        active: false,
      },
      {
        id: 2,
        pathUrl: null,
        label: t("communityAssociation.application"),
        active: true,
      },
    ],
  };

  return (
    <main className="community-association-register">
      <div className="container">
        <div className="community-association-register__inner">
          <PageTop pageTopData={pageTopData} />
          <div className="community-association-register__box">
            <div className="expertregister-main">
              <ul className="expertregister-main-bar">
                {registerPath?.map((el) => {
                  return (
                    <li
                      key={el.id}
                      className="expertregister-main-bar-item"
                      onClick={() => handleClick(el.url)}
                    >
                      <div
                        className={
                          activeBarItem === el.url
                            ? "expertregister-main-bar-item-border activeBarItem"
                            : "expertregister-main-bar-item-border"
                        }
                      ></div>
                      <span>{el.label}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="expertregister-main-list">
                <CommunityRegister1
                  activeBarItem={activeBarItem}
                  handleClick={handleClick}
                />
                <CommunityRegister2
                  activeBarItem={activeBarItem}
                  handleClick={handleClick}
                />
                <CommunityRegister3
                  activeBarItem={activeBarItem}
                  handleClick={handleClick}
                />
                <CommunityRegister4
                  activeBarItem={activeBarItem}
                  handleClick={handleClick}
                />
                <CommunityRegister5
                  activeBarItem={activeBarItem}
                  handleClick={handleClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CommunityAssociationRegister;
