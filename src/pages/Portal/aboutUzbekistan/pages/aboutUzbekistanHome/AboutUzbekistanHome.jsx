import React from "react";

import AboutUzbekistanHero from "../../components/aboutUzbekistanHero/AboutUzbekistanHero";
import AboutUzbekistanGallery from "../../components/aboutUzbekistanGallery/AboutUzbekistanGallery";
import View3D from "../../components/view3D/View3D";
import Slider from "../../components/slider/Slider";

import "./aboutUzbekistanHome.scss";
import { useLocation, useOutletContext } from "react-router-dom";
import { useAboutHomeFetching } from "./hooks/useAboutHomeFetching";
import { Spinner } from "../../../../../component";

const AboutUzbekistanHome = () => {
  const { menu } = useOutletContext();
  const { pathname } = useLocation();
  const heroData = menu.find((el) => el.url === pathname);
  const {
    allCitySightseeingLoading,
    allCitySightseeing,
    allCity3dLoading,
    allCity3D,
    allGalleryLoading,
    allGallery,
  } = useAboutHomeFetching();

  if (allCitySightseeingLoading || allCity3dLoading || allGalleryLoading) {
    return <Spinner position="full" />;
  }

  return (
    <div className="about-uzbekistan-home">
      <div className="container">
        <AboutUzbekistanHero />
        <div className="about-uzbekistan-home__open-uzbekistan">
          <h2 className="about-uzbekistan-title">
            {heroData.content[0].title}
          </h2>
          <p>{heroData.content[0].text}</p>
        </div>
        <Slider title="Туристические объекты" />
        <View3D data={allCity3D[0]} />
        <AboutUzbekistanGallery />
        <div className="about-uzbekistan-home__bottom">
          <h2 className="about-uzbekistan-title">
            Откройте для себя новый Узбекистан!
          </h2>
          <p>
            Сиз ва Сизнинг ходимларингизга узоқ вақт орзу қилган шаҳар ёки
            давлатларингиз бўйлаб энг арзон нарҳларда мароқли дам олиш ҳамда
            қулай бўлган вақтда айнан Сизлар учун ёқимли саёҳат турларини таклиф
            этади. Биз, касаба уюшмаларига ишонган ва унинг ҳаракатларини
            қўллаб-қувватлаган 6 000 000 нафардан кўпроқ меҳнаткашлар
            аудиториясига эгамиз! Буюк инглиз шоири Марк Твен вақт ўтгани сари
            ҳаётда биз икки нарсани афсус билан ёд этамиз деб ёзади, булар:
            ҳаётимизни жуда кам севганимиз ва жуда кам саёҳат қилганмиздир.
            “Kasaba sayr” туристик корхонаси билан Сиз бундай афсусларга батамом
            барҳам берасиз, зеро бизнинг шиоримиз: «Саёҳат қилинг, севинг,
            ҳаётнинг ҳар лаҳзасидан роҳатланинг!»Сиз ва Сизнинг ходимларингизга
            узоқ вақт орзу қилган шаҳар ёки давлатларингиз бўйлаб энг арзон
            нарҳларда мароқли дам олиш ҳамда қулай бўлган вақтда айнан Сизлар
            учун ёқимли саёҳат турларини таклиф этади. Биз, касаба уюшмаларига
            ишонган ва унинг ҳаракатларини қўллаб-қувватлаган 6 000 000 нафардан
            кўпроқ меҳнаткашлар аудиториясига эгамиз! Буюк инглиз шоири Марк
            Твен вақт ўтгани сари ҳаётда биз икки нарсани афсус билан ёд этамиз
            деб ёзади, булар: ҳаётимизни жуда кам севганимиз ва жуда кам саёҳат
            қилганмиздир. “Kasaba sayr” туристик корхонаси билан Сиз бундай
            афсусларга батамом барҳам берасиз, зеро бизнинг шиоримиз: «Саёҳат
            қилинг, севинг, ҳаётнинг ҳар лаҳзасидан роҳатланинг!»
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUzbekistanHome;
