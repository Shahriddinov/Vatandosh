import React from 'react'
import { useLocation } from 'react-router-dom';
import CouncilHero from '../../boardTrustees/components/council-hero/CouncilHero'
import Associations from '../components/associations/Associations'

import "./publicAssociations.scss"
import WhriteHeader from "../../../component/Layout/WhriteHeader/WhriteHeader";
import { useAssociationFetching } from '../hooks/useAssociationFetching';
import { Spinner } from '../../../component';

const PublicAssociations = () => {
    const {associationData,associationCategoryData,error,associationLoading,associationCategoryLoading} = useAssociationFetching()
    const heroData = {
        title: "Jamoat birlashmalar",
        description: "Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish, vatandoshlar va ular tomonidan tuzilgan jamoat birlashmalarini qo‘llab-quvvatlash, turli sohalarda faoliyat yuritayotgan vatandoshlarimizning salohiyatini mamlakatimiz taraqqiyotiga samarali yo‘naltirish Fondning asosiy maqsadlaridan biri hisoblanadi.",
        pagePath: "Jamoat birlashmalar",
    }


    if(associationLoading ) {
        return (
            <div className="spinner_box">
                <Spinner/>
            </div>
        )
    }else if(associationCategoryLoading) {
        return (
            <div className="spinner_box">
                <Spinner/>
            </div>
        )
    }else if(error) {
        return <p>{error}</p>
    }

    const data = associationData.map((el,index) => {
        const categories = []

        for(let i = 0; i < associationCategoryData?.length; i++) {
            if(el?.id === associationCategoryData[i]?.country_uz * 1) {
                categories.push(associationCategoryData[i])
            }
        }

        return {
            ...el,
            panel: `panel${index}`,
            categories
        }
    })

    return (
        <div className='public-associations'>
            <div className="page-about">
                <WhriteHeader/>
                <CouncilHero {...heroData}/>
            </div>

            <Associations data = {data}/>
        </div>
    )
}

export default PublicAssociations