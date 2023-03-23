import React, { useEffect } from "react";
import Hero from "../../component/Hero/Hero";
import News from "../../component/News/News";
// import Partners from "../../component/Partners/Partners";
import Peaceful from "../../component/peaceful/Peaceful";
import InteractiveServices from "../../component/interactiveServices/InteractiveServices";
import MapsHome from "../../component/maps-home/MapsHome";
import Partners from "../../component/partners/Partners";
import { useDispatch} from "react-redux";
import { getPeaceful } from "../../reduxToolkit/peacefulSlice/peacefulExtraReducer";
import ContactUs from "../../component/ContactUs/ContactUs";
import Header from "../../component/Layout/Header/Header";

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPeaceful())
    }, [])


    return (
        <div className='home'>
            <Header/>
            
            <Hero/>
            <News/>
            <Peaceful/>
            <InteractiveServices/>
            <MapsHome/>
            <Partners/>
        </div>
    )
};

export default Home