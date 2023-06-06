import React from "react";
import Header from "../../component/Layout/Header/Header";
import Flags from "../../assets/images/home/Flags.svg";
import "./Symbols.scss";

function Flag(props) {
  return (
    <>
      <Header />
      <div className="symbol container">
        <img className="symbol_allSym flay" src={Flags} alt="" />
        <div className="symbol_text">
          <div className="symbol_text_start">
            O'zbekiston Respublikasi Davlat bayrog'i
          </div>
          <div className="symbol_title">
            <b className="symbol_title" style={{ marginLeft: "55px" }}>
              "O'zbekiston
            </b>
            Respublikasi Davlat bayrog'i to'g'risida"gi qonun 1991 yil
            18-noyabrda O'zbekiston Respublikasi Oliy Kengashining navbatdan
            tashqari o'tkazilgan VII sessiyasida qabul qilingan. <br />
            <b className="symbol_title" style={{ marginLeft: "55px" }}>
              Davlat
            </b>{" "}
            bayrog'i va uning ramzi bugungi O'zbekiston sarhadida qadimda mavjud
            bo'lgan davlatlar bilan tarixan bog'liqligini anglatadi hamda
            respublikaning milliy-madaniy an'analarini o'zida
            mujassamlashtiradi. <br />
            <b className="symbol_title" style={{ marginLeft: "55px" }}>
              Bayroqdagi
            </b>{" "}
            moviy rang tiriklik mazmuni aks etgan mangu osmon va obihayot ramzi.
            Timsollar tilida bu - yaxshilikni, donishmandlikni, halollikni,
            shon-shuhrat va sadoqatni bildiradi. Binobarin, Amir Temur davlati
            bayrog'ining rangi ham moviy rangda edi. <br />
            <b className="symbol_title" style={{ marginLeft: "55px" }}>
              Bayroqdagi
            </b>{" "}
            oq rang - muqaddas tinchlik ramzi bo'lib, u kun charog'onligi va
            koinot yoritkichlari bilan uyg'unlashib ketadi. Oq rang – poklik,
            beg'uborlik, soflikni, orzu va hayollar tozaligi, ichki go'zallikka
            intilishning timsoli. <br />
            <b className="symbol_title" style={{ marginLeft: "55px" }}>
              Yashil
            </b>{" "}
            rang – tabiatning yangilanish ramzi. U ko'pgina xalqlarda
            navqironlik, umid va shodumonlik timsoli hisoblanadi. <br />
            <b className="symbol_title" style={{ marginLeft: "55px" }}>
              Qizil
            </b>{" "}
            chiziqlar – vujudimizda jo'shib oqayotgan hayotiy qudrat irmoqlarini
            anglatadi. Navqiron yarim oy tasviri bizning tarixiy an'analarimiz
            bilan bog'liq. Ayni paytda u qo'lga kiritilgan mustaqilligimiz ramzi
            ham. <br />
            <b className="symbol_title" style={{ marginLeft: "55px" }}>
              Yulduzlar
            </b>{" "}
            barcha uchun ruhoniy, ilohiy timsol sanalgan. O'zbekiston
            Respublikasi Davlat bayrog'idagi 12 yulduz tasviri ham tarixiy
            an'analarimiz, qadimgi yilnomamizga bevosita aloqador. Bizning o'n
            ikki yulduzga bo'lgan e'tiborimiz O'zbekiston sarhadidagi qadimgi
            davlatlar ilmiy tafakkurida nujum ilmi taraqqiy etganligi bilan ham
            izohlanadi. <br />
            <b className="symbol_title" style={{ marginLeft: "55px" }}>
              Davlat
            </b>{" "}
            bayrog'imizdagi 12 yulduz tasvirini o'zbek xalqi madaniyatining
            qadimiyligi, uning komillikka, o'z tuprog'ida saodatga intilishi
            ramzi sifatida tushunish lozim.
          </div>
        </div>
      </div>
    </>
  );
}

export default Flag;
