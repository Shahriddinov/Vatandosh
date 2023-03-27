import React from 'react';
import Header from "../../component/Layout/Header/Header";
import Vector from "../../assets/images/home/Vector.svg";
import "./Symbols.scss"

function Anthem(props) {
    return (
        <>
            <Header/>
            <div className="symbol container">
                <img src={Vector} alt=""/>
                <div className="symbol_title">
                    "O'zbekiston Respublikasining davlat madhiyasi to'g'risida"gi Qonun1992-yil 10-dekabrda O'zbekiston
                    Respublikasi Oliy Kengashiningo'n birinchi sessiyasida qabul qilingan
                </div>
                <div className="symbol_text">
                    <div className="symbol_text_poets">Mutal Burhonov musiqasi Abdulla Oripov so'zi</div>
                    <div className="symbol_text_post">
                        Serquyosh hur o'lkam, elga baxt, najot,Sen o'zing do'stlarga yo'ldosh, mehribon!Yashnagay to
                        abad ilmu fan, ijod,Shuhrating porlasin toki bor jahon! <br/>

                        Oltin bu vodiylar - jon O'zbekiston,Ajdodlar mardona ruhi senga yor!Ulug' xalq qudrati jo'sh
                        urgan zamon,Olamni mahliyo aylagan diyor! <br/>

                        Bag'ri keng o'zbekning o'chmas iymoni,Erkin, yosh avlodlar senga zo'r qanot!Istiqlol mash'ali
                        tinchlik posboni,Xaqsevar, ona yurt, mangu bo'l obod! <br/>

                        Oltin bu vodiylar - jon O'zbekiston,Ajdodlar mardona ruhi senga yor!Ulug' xalq qudrati jo'sh
                        urgan zamon,Olamni mahliyo aylagan diyor! <br/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Anthem;