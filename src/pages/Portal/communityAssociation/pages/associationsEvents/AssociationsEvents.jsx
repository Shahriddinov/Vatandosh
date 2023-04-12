import React, { useState } from 'react'
import './associationsEvents.scss'


import { InformationServicesSlider } from "../../../../InformationServices/InformationServicesSlider/InformationServicesSlider";
import Card from '../../../../../component/card/Card'
import { Paginator } from "../../../../../component/Pagination/Pagination";
import { InformationServicesHero } from "../../../../InformationServices/InformationServicesHero/InformationServicesHero";
import { useInformationServicesPagination } from "../../../../InformationServices//hooks/useInformationServicesPagination";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ArrowRight from '../../../../../assets/images/informationServices/arrowRight.png'

const AssociationsEvents = () => {

    const [paginationCount, setPaginationCount] = useState(2);

    const data = [
        {
          id: 1,
          data: "2023-03-09",
          image: 'news/March2023/bjnWwSrb1XA0HQb0CWg1.jpg',
          title_uz: 'Italiyaning Sapiyensa universiteti magistranti yosh vatandoshimiz Ibrohim Jo‘raboyev bilan suhbat',
          title_oz: 'Italiyaning Sapiyensa universiteti magistranti yosh vatandoshimiz Ibrohim Jo‘raboyev bilan suhbat',
          title_ru: 'Интервью с молодым соотечественником Ибрагимом джу…, магистрантом итальянского университета Сапиенца'
        },
        {
          id: 2,
          data: "2023-03-09",
          image: 'news/March2023/dFQEBOlMLwtMyaCowEUJ.jpg',
          title_uz: 'Italiyaning Sapiyensa universiteti magistranti yosh vatandoshimiz Ibrohim Jo‘raboyev bilan suhbat',
          title_oz: 'Italiyaning Sapiyensa universiteti magistranti yosh vatandoshimiz Ibrohim Jo‘raboyev bilan suhbat',
          title_ru: 'Интервью с молодым соотечественником Ибрагимом джу…, магистрантом итальянского университета Сапиенца'
        },
        {
          id: 3,
          data: "2023-03-10",
          image: 'news/March2023/bjnWwSrb1XA0HQb0CWg1.jpg',
          title_uz: 'Italiyaning Sapiyensa universiteti magistranti yosh vatandoshimiz Ibrohim Jo‘raboyev bilan suhbat',
          title_oz: 'Italiyaning Sapiyensa universiteti magistranti yosh vatandoshimiz Ibrohim Jo‘raboyev bilan suhbat',
          title_ru: 'Интервью с молодым соотечественником Ибрагимом джу…, магистрантом итальянского университета Сапиенца'
        },
        {
          id: 4,
          data: "2023-03-10",
          image: 'news/March2023/bjnWwSrb1XA0HQb0CWg1.jpg',
          title_uz: 'Italiyaning Sapiyensa universiteti magistranti yosh vatandoshimiz Ibrohim Jo‘raboyev bilan suhbat',
          title_oz: 'Italiyaning Sapiyensa universiteti magistranti yosh vatandoshimiz Ibrohim Jo‘raboyev bilan suhbat',
          title_ru: 'Интервью с молодым соотечественником Ибрагимом джу…, магистрантом итальянского университета Сапиенца'
        },
        {
          id: 5,
          data: "2023-03-10",
          image: 'news/March2023/bjnWwSrb1XA0HQb0CWg1.jpg',
          title_uz: 'Italiyaning Sapiyensa universiteti magistranti yosh vatandoshimiz Ibrohim Jo‘raboyev bilan suhbat',
          title_oz: 'Italiyaning Sapiyensa universiteti magistranti yosh vatandoshimiz Ibrohim Jo‘raboyev bilan suhbat',
          title_ru: 'Интервью с молодым соотечественником Ибрагимом джу…, магистрантом итальянского университета Сапиенца'
        },
        {
          id: 6,
          data: "2023-03-10",
          image: 'news/March2023/bjnWwSrb1XA0HQb0CWg1.jpg',
          title_uz: 'Italiyaning Sapiyensa universiteti magistranti yosh vatandoshimiz Ibrohim Jo‘raboyev bilan suhbat',
          title_oz: 'Italiyaning Sapiyensa universiteti magistranti yosh vatandoshimiz Ibrohim Jo‘raboyev bilan suhbat',
          title_ru: 'Интервью с молодым соотечественником Ибрагимом джу…, магистрантом итальянского университета Сапиенца'
        },
    ];

    const pageName = 'events'

    return (
        <div className='container associations__events__container'>
            <div className="associations__events__top">
                <h1>Tadbirlar</h1>
                <p>Asosiy <img src={ArrowRight} alt="breadcrumb line" /><span>Tadbirlar</span></p>
            </div>
            <InformationServicesSlider data={data} />
            <div className="events__cards">
                {data.map((card) => (
                    <div className="main-content-card" key={card.id}>
                        <Card {...card} pathUrl={pageName} />
                    </div>
                ))}
            </div>
            {paginationCount >= 1 ? (
                <div className="associations__events__paginator">
                    <Paginator
                        page={1}
                        // paginationFetching={paginationFetching}
                        count={2}
                    />
                </div>
            ) : null}
        </div>
    )
}

export default AssociationsEvents