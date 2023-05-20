import React from 'react';
import OnlineTeachingHero from "../../components/OnlineTeachingHero/OnlineTeachingHero";
import OnlineTeachingInfos from "../../components/OnlineTeachingInfos/OnlineTeachingInfos";
import OnlineTeachingBody from "../../components/OnlineTeachingBody/OnlineTeachingBody";

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
