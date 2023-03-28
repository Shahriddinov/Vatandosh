import {CouncilImage,UserIcon,Globe} from '../../../../assets/images/expert'
import './Council.scss'

const data = [
    {
        id:1,
        country:"Rossiya",
        number:24
    },
    {
        id:2,
        country:"Turkiya",
        number:18
    },
    {
        id:3,
        country:"Germaniya",
        number:16
    },
    {
        id:4,
        country:"Rossiya",
        number:8
    },
    {
        id:5,
        country:"Malayziya",
        number:4
    },
    {
        id:6,
        country:"Rossiya",
        number:2
    },
]

function Council(){
    return(
        <div className="council">
            <div className="container">
                <div className="council-left">
                    <img src={CouncilImage} />
                    <h3>“VATANDOSHLAR” jamg‘armasi qoshidagi xalqaro ekspertlar kengashi</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised...</p>
                    <div>
                    <a href="#">Batafsil</a>
                    </div>
                </div>
                <div className="council-right">
                    <div>
                        <span>
                            <h5>Ro‘yxatdan o‘tganlar</h5>
                            <img src={UserIcon} />
                        </span>
                        <h4>88</h4>
                        <p>Xalqaro olimlar va ekspertlar</p>
                    </div>
                    <div className="council-bottom">
                        <span>
                            <h5>Xorijiy davlatlar</h5>
                            <img src={Globe} />
                        </span>
                        {
                            data.map((data) => (
                                <span className="council-span">
                                    <h5>{data.country}</h5>
                                    <p>{data.number}</p>
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Council