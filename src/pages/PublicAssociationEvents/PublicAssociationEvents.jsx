import React from 'react'
import './PublicAssociationEvents.scss'
import Header from '../../component/Layout/Header/Header'
import SiteHero from '../../component/siteHero/SiteHero'
import ContactUs from '../../component/ContactUs/ContactUs'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const PublicAssociationEvents = () => {
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
      <div className='public-association-events'>
        <Header />

        <SiteHero {...dataHero} />
        <main className='main container'>
          <div className='pagination'>
            <button className="pagination-btns"><AiOutlineLeft size={20} /></button>
            {pages.map((page, i) => (
              <span className="pagination-num" key={i}>{page}</span>
            ))}
            <button className="pagination-btns"><AiOutlineRight size={20} /></button>
          </div>
        </main>
      </div>
      <ContactUs />
    </>
  )
}

export default PublicAssociationEvents