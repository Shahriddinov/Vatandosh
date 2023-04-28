import React from "react";
import "./touristFacilities.scss";

import CardImg1 from "../../../../../assets/images/tourist-facilities/bazaar.png";
import CardImg2 from "../../../../../assets/images/tourist-facilities/street.png";
import CardImg3 from "../../../../../assets/images/tourist-facilities/palace.png";
import FacilitiesCard from "../../components/facilitiesCard/FacilitiesCard";
import View3D from "../../components/view3D/View3D";

const TouristFacilities = () => {
  const cardData = [
    {
      id: 1,
      image: CardImg1,
      text: "Дом-музей Джахан-Отин Увайси",
    },
    {
      id: 2,
      image: CardImg2,
      text: "Дом-музей Джахан-Отин Увайси",
    },
    {
      id: 3,
      image: CardImg3,
      text: "Дом-музей Джахан-Отин Увайси",
    },
    {
      id: 4,
      image: CardImg2,
      text: "Дом-музей Джахан-Отин Увайси",
    },
    {
      id: 5,
      image: CardImg3,
      text: "Дом-музей Джахан-Отин Увайси",
    },
    {
      id: 6,
      image: CardImg1,
      text: "Дом-музей Джахан-Отин Увайси",
    },
  ];

  return (
    <>
      <div className="facilities">
        <div className="container">
          <div className="facilities_hero">
            <h1>Туристик объектлар</h1>
          </div>
          <div className="facilities_intro">
            <h1>Откройте для себя новый Ташкент!</h1>
            <p>
              Сиз ва Сизнинг ходимларингизга узоқ вақт орзу қилган шаҳар ёки
              давлатларингиз бўйлаб энг арзон нарҳларда мароқли дам олиш ҳамда
              қулай бўлган вақтда айнан Сизлар учун ёқимли саёҳат турларини
              таклиф этади. Биз, касаба уюшмаларига ишонган ва унинг
              ҳаракатларини қўллаб-қувватлаган 6 000 000 нафардан кўпроқ
              меҳнаткашлар аудиториясига эгамиз! Буюк инглиз шоири Марк Твен
              вақт ўтгани сари ҳаётда биз икки нарсани афсус билан ёд этамиз деб
              ёзади, булар: ҳаётимизни жуда кам севганимиз ва жуда кам саёҳат
              қилганмиздир. “Kasaba sayr” туристик корхонаси билан Сиз бундай
              афсусларга батамом барҳам берасиз, зеро бизнинг шиоримиз: «Саёҳат
              қилинг, севинг, ҳаётнинг ҳар лаҳзасидан роҳатланинг!»
            </p>
          </div>
          <div className="facilities_grid">
            <h1>Туристические объекты</h1>
            <ul>
              <li className="active_li">Toshkent</li>
              <li>Samarqand</li>
              <li>Buxoro</li>
              <li>Namangan</li>
              <li>Xorazm</li>
            </ul>
            <div className="facilities_grid_cards">
              {cardData.map((card) => (
                <FacilitiesCard {...card} key={card.id} />
              ))}
            </div>
          </div>
          <View3D />
          <div className="facilities_intro">
            <h1>Откройте для себя новый Ташкент!</h1>
            <p>
              Сиз ва Сизнинг ходимларингизга узоқ вақт орзу қилган шаҳар ёки
              давлатларингиз бўйлаб энг арзон нарҳларда мароқли дам олиш ҳамда
              қулай бўлган вақтда айнан Сизлар учун ёқимли саёҳат турларини
              таклиф этади. Биз, касаба уюшмаларига ишонган ва унинг
              ҳаракатларини қўллаб-қувватлаган 6 000 000 нафардан кўпроқ
              меҳнаткашлар аудиториясига эгамиз! Буюк инглиз шоири Марк Твен
              вақт ўтгани сари ҳаётда биз икки нарсани афсус билан ёд этамиз деб
              ёзади, булар: ҳаётимизни жуда кам севганимиз ва жуда кам саёҳат
              қилганмиздир. “Kasaba sayr” туристик корхонаси билан Сиз бундай
              афсусларга батамом барҳам берасиз, зеро бизнинг шиоримиз: «Саёҳат
              қилинг, севинг, ҳаётнинг ҳар лаҳзасидан роҳатланинг!»
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TouristFacilities;
