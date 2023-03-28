import {data} from '../../data'
import {ExcludeIcon} from '../../../../assets/images/expert'
import './Expert.scss'

function Expert(){
    return(
        <div className="expert">
            <div className="container">
                <h2>Ekspertlar kengashi</h2>
                <div className="expert-list">
                  {
                    data.map((evt) => (
                        <div>
                            <img src={evt.images} />
                            <p>{evt.country}</p>
                            <h3>{evt.name}</h3>
                            <h4>{evt.job}</h4>
                            <h4>{evt.location}</h4>
                        </div>
                    ))
                  }
                </div>
                <div className="expert-item">
                    <a href="#" className="expert-link">
                        <img src={ExcludeIcon} />
                        Barcha olim va ekspertlar
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Expert