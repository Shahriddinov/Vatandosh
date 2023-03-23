import React from 'react'
import './InformationServices.scss'
import Header from '../../component/Layout/Header/Header'
import { InformationServicesSlider } from './InformationServicesSlider/InformationServicesSlider'
import { InformationServicesHero } from './InformationServicesHero/InformationServicesHero'

const InformationServices = () => {
    const pagePath = {
        title: 'Yangiliklar',
        path: [
            { id: 1, label: "Asosiy sahifa", path: "/" },
            { id: 2, label: "Yangiliklar", path: "/information-service/news" },
        ]
    }
    return (
        <div className='news-page '>
            <Header />
            <main className='main container'>
                <InformationServicesHero pagePath={pagePath} />
                <InformationServicesSlider />
            </main>
        </div >
    )
}
export default InformationServices