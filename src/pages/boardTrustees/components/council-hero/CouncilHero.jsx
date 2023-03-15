import React from 'react'
import { Link } from 'react-router-dom'
import arrowRight from "../../../../assets/images/about/arrow-right.svg"

import "./council-hero.scss"

const CouncilHero = () => {
  return (
    <section className='council-hero'>
        <div className="council-hero__container container">
            <div className="council-hero__inner">
                <h2 className="council-hero__title">Vasiylik kengashi</h2>

                <p className="council-hero__desc">
                    Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish, vatandoshlar va ular tomonidan tuzilgan jamoat birlashmalarini qo‘llab-quvvatlash, turli sohalarda faoliyat yuritayotgan vatandoshlarimizning salohiyatini mamlakatimiz taraqqiyotiga samarali yo‘naltirish Fondning asosiy maqsadlaridan biri hisoblanadi.
                </p>

                <nav className='council-hero__breadcrumb_nav' aria-label="breadcrumb">
                    <ul className="council-hero__breadcrumb">
                        <li className="council-hero__breadcrumb_item">
                            <Link className='council-hero__breadcrumb_link' to="/">Asosiy sahifa</Link>
                            <img src={arrowRight} alt="breadcrumb line" />
                        </li>
                         
                        <li className="council-hero__breadcrumb_item breadcrumb_item_active" aria-current="page">Vasiylik kengashi</li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
  )
}

export default CouncilHero