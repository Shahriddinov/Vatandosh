import React from 'react'
import imgXl from "../../../../assets/images/compatriots/state-friendship-img.png"
import imgMd from "../../../../assets/images/compatriots/state-friendship-img-md.png"
import imgSm from "../../../../assets/images/compatriots/state-friendship-img-sm.png"
import avatar from "../../../../assets/images/compatriots/round.svg"

import "./offerStatesFriendship.scss"

const OfferStatesFriendship = () => {

  return (
    <section className='offer-state-friendship'>
        <div className="offer-state-friendship__container container">
            <div className="offer-state-friendship__inner">
              <div className="offer-state-friendship__box_img">
                <picture>
                  <source media="(min-width:1000px)" srcSet={imgXl}/>
                  <source media="(min-width:680px)" srcSet={imgMd}/>
                  <source media="(min-width:400px)" srcSet={imgXl}/>
                  <img className='offer-state-friendship__img' src={imgSm} alt="Img"/>
                </picture>
              </div>

              <div className="offer-state-friendship__content">
                <h2 className="offer-state-friendship__title">
                  Biz bilan ishlash orqali tajribangizni
                  va sarmoyangizni oshiring
                </h2>

                <p className="offer-state-friendship__text1">
                  Biz hayotning zamonaviy ritmi ekanligini tushunamiz
                  tashqi o'zgarishlarga chaqmoq tezligida javob berish, tez qaror qabul qilish, yorqin bo'lish, birinchi bo'lish zarurligini taqozo etadi. Barkamollik, ehtiyotkorlik, mehnatsevarlik - bunda bizga yordam beradigan xususiyatlar,
                </p>

                <b className="offer-state-friendship__text2">
                  “Toshkilotning” asosida maqsad va vazifalari Ikki davlat va ikki millat dustligini
                </b>

                <div className="offer-state-friendship__personals">
                  <ul className="offer-state-friendship__avatars_list">
                    <li className="offer-state-friendship__avatars_item">
                      <img className="offer-state-friendship__avatars_item--img" src={avatar} alt="avatar"  />
                    </li>

                    <li className="offer-state-friendship__avatars_item">
                      <img className="offer-state-friendship__avatars_item--img" src={avatar} alt="avatar"  />
                    </li>

                    <li className="offer-state-friendship__avatars_item">
                      <img className="offer-state-friendship__avatars_item--img" src={avatar} alt="avatar"  />
                    </li>
                  </ul>

                  <div className="offer-state-friendship__personals_content">
                    <span className='offer-state-friendship__personals_content--count'>10+</span>
                    <span className='offer-state-friendship__personals_content--text'>Xodimlar</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default OfferStatesFriendship