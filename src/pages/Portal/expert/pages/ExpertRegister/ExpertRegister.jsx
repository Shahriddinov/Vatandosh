import "./ExpertRegister.scss";
import { useEffect, useState } from "react";
import RegisterItem1 from "./components/register1/RegisterItem1";
import RegisterItem2 from "./components/register2/RegisterItem2";
import RegisterItem3 from "./components/register3/RegisterItem3";
import RegisterItem4 from "./components/register4/RegisterItem4";
import RegisterItem5 from "./components/register5/RegisterItem5";
import ExpertTitle from "../../components/ExpertTitle/ExpertTitle";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getExpertRegisterMenu } from "../../../../../reduxToolkit/ExpertSlice/RegisterSlice/extraReducer";
import Spinner from "../../../../../component/Spinner/Spinner";

export default function ExpertRegister() {
  let [activeBarItem, setactiveBarItem] = useState(0);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const url = [
    { title: t("expert.main"), url: "/portal-category/expert" },
    { title: t("expert.register"), url: "" },
  ];

  const {
    loading,
    menu,
    educationLoading,
    specializationLoading,
    employmentLoading,
  } = useSelector((state) => state.expertRegisterSlice);
  const language = useSelector((state) => state.language.language);

  useEffect(() => {
    dispatch(getExpertRegisterMenu());
  }, [dispatch]);

  return (
    <>
      <main className="expertregister">
        {educationLoading ||
        loading ||
        specializationLoading ||
        employmentLoading ? (
          <Spinner position="full" />
        ) : null}
        <div className="container">
          <ExpertTitle title={t("expert.register")} url={url} />
          <div className="expertregister-main">
            <ul className="expertregister-main-bar">
              {menu?.length
                ? menu?.map((el, index) => {
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
                        <span>{el[`name_${language}`]}</span>
                      </li>
                    );
                  })
                : null}
            </ul>
            <div className="expertregister-main-list">
              <RegisterItem1 activeBarItem={activeBarItem} />
              <RegisterItem2
                activeBarItem={activeBarItem}
                setActiveBarItem={setactiveBarItem}
              />
              <RegisterItem3
                activeBarItem={activeBarItem}
                setActiveBarItem={setactiveBarItem}
              />
              <RegisterItem4 activeBarItem={activeBarItem} />
              <RegisterItem5 activeBarItem={activeBarItem} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
