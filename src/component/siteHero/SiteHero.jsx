import React from 'react'
import arrowRight from "../../assets/images/about/arrow-right.svg"

import "./siteHero.scss"
import { Link } from 'react-router-dom'

const SiteHero = ({title,description,pagePath}) => {
  return (
    <div className='site-hero'>
        <div className="site-hero__container container">
            <div className="site-hero__inner">
                <div className="site-hero__inner_content">
                    <nav className='site-hero__breadcrumb_nav' aria-label="breadcrumb">
                        <ul className="site-hero__breadcrumb">
                            {
                                pagePath.slice(0,pagePath.length - 1).map((el,i) => (
                                    <li className="site-hero__breadcrumb_item" key={i + 1}>
                                        <Link className='site-hero__breadcrumb_link' to={el.path}>{el.label}</Link>
                                        <img src={arrowRight} alt="breadcrumb line" />
                                    </li>   
                                ))
                            }
                            
                            <li className="site-hero__breadcrumb_item breadcrumb_item_active" aria-current="page"> 
                                {pagePath[pagePath.length - 1].label}
                            </li>
                        </ul>
                    </nav>
                    
                    <h2 className="site-hero__title">{title}</h2>

                    <p className="site-hero__desc">
                      {description} 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SiteHero