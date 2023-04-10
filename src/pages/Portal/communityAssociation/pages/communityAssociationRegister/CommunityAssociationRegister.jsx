import "../../../expert/pages/ExpertRegister/ExpertRegister.scss";
import { useState } from "react";
import "./communityAssociationRegister.scss";
import { PageTop } from "../../components";
import { registerPageTopData as pageTopData, registerPath } from "./data";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CommunityRegister1,
  CommunityRegister2,
  CommunityRegister3,
  CommunityRegister4,
  CommunityRegister5,
} from "./components";

const CommunityAssociationRegister = () => {
  const { hash } = useLocation();
  let [activeBarItem, setactiveBarItem] = useState(
    hash ? hash.slice(1) : "application-1"
  );
  const navigation = useNavigate();

  const handleClick = (url) => {
    setactiveBarItem(url);
    navigation(`/portal-category/community-association/application#${url}`);
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
                <CommunityRegister1 activeBarItem={activeBarItem} />
                <CommunityRegister2 activeBarItem={activeBarItem} />
                <CommunityRegister3 activeBarItem={activeBarItem} />
                <CommunityRegister4 activeBarItem={activeBarItem} />
                <CommunityRegister5 activeBarItem={activeBarItem} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CommunityAssociationRegister;
