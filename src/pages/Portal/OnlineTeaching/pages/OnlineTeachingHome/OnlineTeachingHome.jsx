import React from 'react';
import OnlineTeachingBody from "./OnlineTeachingBody/OnlineTeachingBody";
import OnlineTeachingHero from "../../components/OnlineTeachingHero/OnlineTeachingHero";

function OnlineTeachingHome(props) {
    return (
        <div>
            <OnlineTeachingHero/>
            <OnlineTeachingBody/>
        </div>
    );
}
export default OnlineTeachingHome;
