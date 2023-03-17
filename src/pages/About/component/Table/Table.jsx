import React from 'react';
import "./Table.scss"
import Top from "../../../../assets/images/top.png"
import Next from "../../../../assets/images/next.png"
import BottonIcon from "../../../../assets/images/bottomIcon.png"
import Alls from "../../../../assets/images/alls.png"

function Table(props) {
    return (
        <div className="table">
            <div className="table_control">
                <div className="table_control_all">
                    Nazorat-taftish komissiyasi
                </div>
                <img src={Top} alt=""/>
                <div className="table_control_all">
                    Vasiylik kengashi
                </div>
            </div>
            <img className="table_next" src={Next} alt=""/>
            <div className="table_control">
                <div className="table_control_all">
                    Fond boshqaruvi
                </div>
            </div>
            <img className="table_next" src={BottonIcon} alt=""/>

            <div className="table_control">
                <div className="table_control_all">
                    Yordamchi
                </div>
                <img src={Top} alt=""/>
                <div className="table_control_all">
                    Boshqaruv raisi
                </div>
            </div>
            <img className="table_next" src={Next} alt=""/>

            <div className="table_control">
                <div className="table_control_all increase">
                    Axborat ...
                </div>
                <div className="table_control_all increase">
                    Bosh yuristkonsult
                </div>
                <div className="table_control_all increase">
                    Boshqaruv ....
                </div>
                <div className="table_control_all increase">
                    Strategik tahlil...
                </div>
                <div className="table_control_all">
                    Matbuot kotibis
                </div>
            </div>
            <img src={Alls} alt=""/>
            <div className="table_control">
                <div className="table_control_all increase">
                    Xodimlar bilan ...
                </div>
                <div className="table_control_all increase">
                   Vatandoshlarni ...
                </div>
                <div className="table_control_all increase">
                    Vatandoshlar ....
                </div>
                <div className="table_control_all increase">
                    Madaniy-ma’rifiy...
                </div>
                <div className="table_control_all">
                    Bosh buhgalter
                </div>
            </div>
        </div>
    );
}

export default Table;