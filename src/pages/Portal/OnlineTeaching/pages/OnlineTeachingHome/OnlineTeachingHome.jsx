import React from 'react';
import OnlineTeachingBody from "./OnlineTeachingBody/OnlineTeachingBody";
import OnlineTeachingHero from "../../components/OnlineTeachingHero/OnlineTeachingHero";
import OnlineTeachingInfos from "../../components/OnlineTeachingInfos/OnlineTeachingInfos";

function OnlineTeachingHome(props) {
    return (
        <div>
            <OnlineTeachingHero/>
            <OnlineTeachingBody/>
            <OnlineTeachingInfos/>
        </div>
    );
}
export default OnlineTeachingHome;
