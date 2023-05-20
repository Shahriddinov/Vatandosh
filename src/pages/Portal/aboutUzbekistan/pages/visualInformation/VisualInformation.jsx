import React from "react";

import AboutUzbekistanGallery from "../../components/aboutUzbekistanGallery/AboutUzbekistanGallery";
import AboutUzbekistanVideos from "../../components/aboutUzbekistanVideos/AboutUzbekistanVideos";
import { useMediaFetching } from "../../../../Mediateka/hooks/useMediaFetching";
import { Spinner } from "../../../../../component";

import "./visualInformation.scss";

const VisualInformation = () => {
  const { mediaData, dataLoading, lan } = useMediaFetching();

  if (dataLoading) {
    return <Spinner position="full" />;
  }

  return (
    <div className="visual-information">
      <div className="container">
        <div className="visual-information__hero">
          <h2>Vizual ma'lumot</h2>
        </div>
        <div className="visual-information__open-uzbekistan">
          <h2 className="about-uzbekistan-title">
            Откройте для себя новый Ташкент!
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
            ҳаётнинг ҳар лаҳзасидан роҳатланинг!»
          </p>
        </div>
        <div className="visual-information__videos">
          <AboutUzbekistanVideos
            mediaData={mediaData}
            lan={lan}
            hasMoreBtn="true"
          />
        </div>
        <div className="visual-information__open-uzbekistan-second">
          <h2 className="about-uzbekistan-title">
            Откройте для себя новый Ташкент!
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
            ҳаётнинг ҳар лаҳзасидан роҳатланинг!»
          </p>
        </div>
        <AboutUzbekistanGallery />
      </div>
    </div>
  );
};

export default VisualInformation;
