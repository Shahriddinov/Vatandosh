import "./offerStatesFriendship.scss"
import { useSelector } from 'react-redux'

const OfferStatesFriendship = (props) => {
  const lng = useSelector(state => state.language.language)
  return (
    <section className='offer-state-friendship'>
        <div className="offer-state-friendship__container container">
            <div className="offer-state-friendship__inner">
              <div className="offer-state-friendship__box_img">
                <img className='offer-state-friendship__img' src={`https://vatanparvarbackend.napaautomotive.uz/storage/${props.company_photo}`} alt={props[`title_${lng}`]}/>
              </div>

              <div className="offer-state-friendship__content">
                <h2 className="offer-state-friendship__title">
                  {props[`info_title_${lng}`]}
                </h2>

                <p className="offer-state-friendship__text1"
                  dangerouslySetInnerHTML={{
                    __html: props[`info_${lng}`],
                  }} 
                />

                <b className="offer-state-friendship__workers">Xodimlar soni {props.company_workers}+</b>
              </div>
            </div>
        </div>
    </section>
  )
}

export default OfferStatesFriendship