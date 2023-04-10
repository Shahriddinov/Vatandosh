import React from 'react';
import {Link} from "react-router-dom";
import "./Onlineteaching.scss"
function OnlineteachingHeader(props) {
    return (
        <div className="OnlineTeachingHeader">
            <div className="container">
                <h2>“Advanced</h2>
                <p className="headeres--text">
                    В этом курсе вы примете участие в серии задач, призванных повысить ваше собственное счастье и выработать более
                </p>
                <Link to="/expert/register">Ariza berish</Link>
            </div>
        </div>
    );
}

export default OnlineteachingHeader;