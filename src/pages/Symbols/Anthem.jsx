import React from "react";
import Header from "../../component/Layout/Header/Header";
import Vector from "../../assets/images/home/Vector.svg";
import Madhiya from "../../assets/images/ozbekiston-respublikasi-davlat-madhiyasi-madhiya_(chaqqon.net).mp3";
import "./Symbols.scss";
import ReactAudioPlayer from "react-audio-player";
import { useTranslation } from "react-i18next";
function Anthem(props) {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <div className="symbol container">
        <img className="symbol_allSym" src={Vector} alt="" />

        <div className="symbol_text">
          <div className="symbol_text_start">{t("symbols.anthem")}</div>
          <p className="symbol_text_title" dangerouslySetInnerHTML={{ __html: t("symbols.text")}}/>
          <p className="symbol_text_post" dangerouslySetInnerHTML={{ __html: t("symbols.textsOne")}}/>
          <ReactAudioPlayer
            className="symbol_text_audio"
            src={Madhiya}
            // autoPlay
            controls
          />
        </div>
      </div>
    </>
  );
}

export default Anthem;
