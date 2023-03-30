
import "./statesFriendship.scss"
import { useSelector } from 'react-redux'

const StatesFriendshipInfo = (props) => {
    const lng = useSelector(state => state.language.language)

  return (
    <section className='friendship-info'>
        <div className="friendship-info__container container">
            <div className="friendship-info__inner">
                <div className="friendship-info__box1">
                    <div className="friendship-info__box1_img">
                        <img className='friendship-info__company_logo' src={`https://vatanparvarbackend.napaautomotive.uz/storage/${props.logo}`} alt={props[`title_${lng}`]} />
                    </div>

                   <h3 className="friendship-info__company_name">{props[`title_${lng}`]}</h3>
                </div>

                <div className="friendship-info__box2">
                    <div className="friendship-info__user_img">
                        <img className='friendship-info__user' src={`https://vatanparvarbackend.napaautomotive.uz/storage/${props.director_image}`} alt={props[`director_name_${lng}`]} />
                    </div>

                    <ul className="friendship-info__list">
                        <li className="friendship-info__item">
                            <span className='friendship-info__item--text1'>Rahbar</span>
                            <span className='friendship-info__item--text2'>{props[`director_name_${lng}`]}</span>
                        </li>

                        <li className="friendship-info__item">
                            <span className='friendship-info__item--text1'>Tashkilot tashkil topgan sana</span>
                            <span className='friendship-info__item--text2'>{props.company_start_data}</span>
                        </li>

                        <li className="friendship-info__item">
                            <span className='friendship-info__item--text1'>Rahbar saylangan sana</span>
                            <span className='friendship-info__item--text2'>{props.director_start_data}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default StatesFriendshipInfo