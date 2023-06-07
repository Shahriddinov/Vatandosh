import React from "react";
import Header from "../../component/Layout/Header/Header";
import Coats from "../../assets/images/home/Coat.svg";
import "./Symbols.scss";
import Flags from "../../assets/images/home/Flags.svg";
import { useTranslation } from "react-i18next";

function Coat(props) {
  const { t } = useTranslation();
  const language = localStorage.getItem("language");
  return (
    <>
      <Header />
      <div className="symbol container">
        <img src={Coats} alt="" />
        <div className="symbol_coat">{t("symbols.coat")}</div>
        <div className="symbol_title">
          <b className="symbol_title" style={{ marginLeft: "55px" }}>
            "O'zbekiston
          </b>{" "}
          Respublikasi Davlat gerbi to‘g‘risida"gi Qonun 1992 yil 2 iyulda
          O‘zbekiston Respublikasi Oliy Kengashining X sessiyasida qabul
          qilingan. O‘zbekiston Respublikasining Davlat gerbi gullagan vodiy
          uzra charaqlab turgan quyosh tasviridan hamda so‘l tomonida bug‘doy
          boshoqlari, o‘ng tomonida ochilgan paxta chanoqlari suvrati
          tushirilgan chambardan iborat. Gerbning yuqori qismida respublika
          jipsligining ramzi sifatida sakkiz qirrali yulduz tasvirlangan: sakkiz
          qirra ichida joylashgan yarim oy va yulduz musulmonlarning qutlug‘
          ramzidir.
          <br />
          <b className="symbol_title" style={{ marginLeft: "55px" }}>
            Gerbning
          </b>{" "}
          markazida himmat, olijanoblik va fidoyilik timsoli bo‘lgan afsonaviy
          Xumo qushi qanotlarini yozib turibdi. Ushbu ramz va timsollar
          xalqimizning tinchlik, yaxshilik, baxt-saodat, farovonlik yo‘lidagi
          orzu-umidlarini ifodalaydi. <br />
          <b className="symbol_title" style={{ marginLeft: "55px" }}>
            Gerbning
          </b>{" "}
          pastki qismida respublika Davlat bayrog‘ini ifoda etuvchi chambar
          lentasining bandiga "O‘zbekiston” deb yozib qo‘yilgan.
        </div>
      </div>
    </>
  );
}

export default Coat;
