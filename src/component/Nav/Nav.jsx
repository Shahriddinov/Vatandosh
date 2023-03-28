import './Nav.scss'

function Nav(){
    return(
        <div className="nav">
            <div className="container">
                <ul>
                    <li>
                        <a href="#" className="nav-link">
                        ASOSIY
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link">
                        Ekspertlar kengashi
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link">
                        Takliflar
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link">
                        Bog‘lanish
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Nav