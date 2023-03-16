import React from 'react'
import "./councilComposition.scss"

import img1 from "../../../../assets/images/about/concil-card-img.png"
import img2 from "../../../../assets/images/about/council-card-img2.png"
import img3 from "../../../../assets/images/about/council-card-img3.png"
import CouncilCard from"../council/CouncilCard"
import arrowDown from "../../../../assets/images/about/arrov-down.svg"

const CouncilComposition = () => {
  const data = [
    {id:1, name:"Sherali Jo‘raev", job:"Vasiylik kengashi raisi", img:img1},
    {id:2, name:"Ravshan Irmatov", job:"Vasiylik kengashi raisi o‘rinbosari", img:img2},
    {id:3, name:"Mehriddin Xayriddinov", job:"Vasiylik kengashi raisi o‘rinbosari", img:img3},
    {id:4, name:"Sherali Jo‘raev", job:"Vasiylik kengashi raisi", img:img1},
    {id:5, name:"Ravshan Irmatov", job:"Vasiylik kengashi raisi o‘rinbosari", img:img2},
    {id:6, name:"Mehriddin Xayriddinov", job:"Vasiylik kengashi raisi o‘rinbosari", img:img3},
    {id:7, name:"Sherali Jo‘raev", job:"Vasiylik kengashi raisi", img:img1},
    {id:8, name:"Ravshan Irmatov", job:"Vasiylik kengashi raisi o‘rinbosari", img:img2},
    {id:9, name:"Mehriddin Xayriddinov", job:"Vasiylik kengashi raisi o‘rinbosari", img:img3},
  ]
  
  return (
    <section className="council-composition">
        <div className="council-composition__container container">
        <div className="council-composition__inner">
            <h2 className="council-composition__title">Kengash tarkibi</h2>

            <ul className="council-composition__list">
            {
                data.map(el => (
                <li className="council-composition__item" key={el.id}>
                  <CouncilCard {...el}/>
                </li>
                ))
            }
            </ul>

            <button className="council-composition__btn">
            <img src={arrowDown} alt="" />
            <span  className="council-composition__btn--span">Ko’proq ko’rish</span>
            </button>
        </div>
        </div>
    </section>
  )
}

export default CouncilComposition