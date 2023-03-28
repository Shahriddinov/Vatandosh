import React, {useEffect} from 'react';
import "./Management.scss"
import {useDispatch, useSelector} from "react-redux";
import {getAllTrustees} from "../../../../reduxToolkit/trusteesSlice/trusteesAsyncThunk";
import WhriteHeader from "../../../../component/Layout/WhriteHeader/WhriteHeader";
import CouncilHero from "../../../boardTrustees/components/council-hero/CouncilHero";
import CouncilCard from "../../../boardTrustees/components/council/CouncilCard";
import arrowDown from "../../../../assets/images/about/arrov-down.svg";
import Personal from "./component/Personal/Personal";

function Management(props) {
    const dispatch = useDispatch()
    const allTrustees = useSelector(state => state.trustees.allTrustees);

    const heroData = {
        title: "Rahbariyat",
        description: "Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish, vatandoshlar va ular tomonidan tuzilgan jamoat birlashmalarini qo‘llab-quvvatlash, turli sohalarda faoliyat yuritayotgan vatandoshlarimizning salohiyatini mamlakatimiz taraqqiyotiga samarali yo‘naltirish Fondning asosiy maqsadlaridan biri hisoblanadi.",
        pagePath: "batafsil",
    }
    useEffect(() => {
        dispatch(getAllTrustees())
    }, [])
    return (
        <div className="management">
            <div className="page-about">
                <WhriteHeader/>
                <CouncilHero  {...heroData}/>
            </div>
            <section className="management">
                <div className="management__container container">
                    <div className="management__inner">
                        <h2 className="management__title">Rahbariyat tarkibi</h2>

                        <ul className="management__list">
                            {
                                allTrustees?.map(el => (
                                    <li className="management__item" key={el.id}>
                                        <Personal trustee={el}/>
                                    </li>
                                ))
                            }
                        </ul>

                        <button className="management__btn">
                            <img src={arrowDown} alt="" />
                            <span  className="council-composition__btn--span">Ko’proq ko’rish</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Management;