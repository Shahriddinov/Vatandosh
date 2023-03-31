import React from 'react'
import arrowRight from "../../assets/images/about/arrow-right.svg"

import "./siteHero.scss"
import { Link, useLocation, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const SiteHero = ({data}) => {
    const lan = useSelector((state) => state.language.language);
    const {pathname} = useLocation()
    const {pageUrl} = useParams()
    const {t} = useTranslation()

  return (
    <div className='site-hero'>
        <div className="site-hero__container container">
            <div className="site-hero__inner">
                <div className="site-hero__inner_content">
                    <nav className='site-hero__breadcrumb_nav' aria-label="breadcrumb">
                        <ul className="site-hero__breadcrumb">
                            {
                                <li className="site-hero__breadcrumb_item">
                                    <Link className='site-hero__breadcrumb_link' to="/">{t("main_page")}</Link>
                                    <img src={arrowRight} alt="breadcrumb line" />
                                </li> 
                            }

                            
                            <li className="site-hero__breadcrumb_item breadcrumb_item_active" aria-current="page"> 
                                {
                                    pageUrl === "publicevents"
                                    ?   "Jamoat birlashmalar tadbirlari"
                                    :
                                    pageUrl === "categoryshows"
                                    ?
                                        "Turkum ko'rsatuvlari"
                                    :
                                    data[`menu_${lan}`]
                                }
                            </li>
                        </ul>
                    </nav>
                    
                    <h2 className="site-hero__title">
                        {
                            pageUrl === "publicevents"
                            ?   "Jamoat birlashmalar tadbirlari"
                            :
                            pageUrl === "categoryshows"
                            ?
                                "Turkum ko'rsatuvlari"
                            : data[`menu_${lan}`]
                        }
                    </h2>

                    <p className="site-hero__desc">
                      {
                        pathname.split("/")[1] === "compatriots" 
                        ?
                        "Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish, "
                        : data[`info_${lan}`]
                      } 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SiteHero