import React from 'react';
import Header from "../../component/Layout/Header/Header";
import Vector from "../../assets/images/home/Vector.svg";
import Madhiya from "../../assets/images/ozbekiston-respublikasi-davlat-madhiyasi-madhiya_(chaqqon.net).mp3"
import "./Symbols.scss"
import ReactAudioPlayer from 'react-audio-player';
import {useTranslation} from "react-i18next";
function Anthem(props) {
    const { t } = useTranslation();
    return (
        <>
            <Header/>
            <div className="symbol container">
                <img className="symbol_allSym" src={Vector} alt=""/>

                <div className="symbol_text">
                    <div className="symbol_text_start">
                        {t("symbols.anthem")}
                    </div>
                    <div className="symbol_text_title">
                        {t("symbols.text")}
                    </div>
                    <div className="symbol_text_poets">{t("symbols.author")}</div>
                    <div className="symbol_text_post">
                        {t("symbols.textsOne")} <br/>
                        {t("symbols.textsTwo")} <br/>
                        {t("symbols.textsThree")} <br/>
                        {t("symbols.textsFour")} <br/>
                        {t("symbols.textsFive")} <br/>
                        {t("symbols.textsSix")} <br/>
                        {t("symbols.textsSeven")} <br/>
                        {t("symbols.textsEight")}
                    </div>
                    {/*<ReactAudioPlayer*/}
                    {/*    className="symbol_text_audio"*/}
                    {/*    src={Madhiya}*/}
                    {/*    autoPlay*/}
                    {/*    controls*/}
                    {/*/>*/}
                </div>
            </div>
        </>
    );
}

export default Anthem;