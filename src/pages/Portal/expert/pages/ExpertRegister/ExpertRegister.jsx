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
import Register6 from "./components/register6/register6";
const registerMenuData = [
  { id: 1, label: "Shaxsiy ma’lumotingiz", menuId: 6 },
  { id: 2, label: "Oliy ma’lumotingiz", menuId: 7 },
  { id: 3, label: "Mehnat faoliyatingiz", menuId: 8 },
  { id: 4, label: "Ilmiy faoliyatingiz", menuId: 9 },
  { id: 6, label: "Taklifingiz", menuId: 10 },
  { id: 5, label: "Ekspert faoliyati", menuId: 11 },
];

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
  }, [dispatch, language]);

  const registerMenu = menu.length
    ? registerMenuData.map((el) => {
        const obj = menu.find((item) => item?.id === el.menuId);
        return {
          ...el,
          label: obj[`name_${language}`],
          menuId: obj?.id,
        };
      })
    : [];

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
              {registerMenu?.length
                ? registerMenu?.map((el, index) => {
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
                        <span>{el.label}</span>
                      </li>
                    );
                  })
                : null}
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
              <RegisterItem5
                activeBarItem={activeBarItem}
                setactiveBarItem={setactiveBarItem}
              />
              <Register6 activeBarItem={activeBarItem} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
