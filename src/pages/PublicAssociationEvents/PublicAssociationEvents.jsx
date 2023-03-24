import React, { useEffect } from 'react'
import './PublicAssociationEvents.scss'
import SiteHero from '../../component/siteHero/SiteHero'
import Card from '../../component/card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { getNews } from '../../reduxToolkit/newsSlice/extraReducer'
import { Paginator } from '../../component/Paginator/Paginator'
import bg from '../../assets/images/compatriots/publicAssociationEventsBG.png'
import WhriteHeader from "../../component/Layout/WhriteHeader/WhriteHeader";

const PublicAssociationEvents = () => {

  const newsData = useSelector(state => state.newsSlice.newsData.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNews())
  }, [dispatch])

  const dataHero = {
    title: "Jamoat birlashmalar tadbirlari",
    description: "Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish.",
    pagePath: [
      { label: "Asosiy sahifa", path: "/" },
      { label: "Jamoat birlashmalar tadbirlari", path: "/compatriots/public-association-events" },
    ]
  }
  return (
    <>
      <div className='public-association-events-before' style={{
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '0',
        width: '100%',
        height: '740px',
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        content: "",
      }} />
      <div className='public-association-events'>
        <WhriteHeader />

        <SiteHero {...dataHero} />

        <main className='main container'>
          <h2 className='public-association-events-title'>Jamoat birlashmalar tadbirlari</h2>
          <div className='public-association-events-card'>
            {newsData?.map(card => (
              <Card key={card.id} {...card} />
            ))}
          </div>
          <Paginator />
        </main>
      </div>
    </>
  )
}

export default PublicAssociationEvents