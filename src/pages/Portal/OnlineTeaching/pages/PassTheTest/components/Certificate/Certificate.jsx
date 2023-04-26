import "./Certificate.scss";
import img from "../../../../../../../assets/images/OnlineTeaching/certificate.svg";
import { BsFileEarmarkArrowDownFill } from "react-icons/bs";

export default function Certificate({ activeNav }) {
  return (
    <div
      className={
        activeNav === 4
          ? "certificate passTheTest-scaleActive"
          : "certificate passTheTest-scaleHidden"
      }
    >
      <img src={img} alt="error" />
      <div className="certificate-desc">
        <h3>СЕРТИФИКАТ</h3>
        <p>
          Мы понимаем, что современный ритм жизни диктует необходимость
          молниеносно реагировать на внешние изменения, быстро принимать
          решения, быть яркими, быть первыми. Компетентность, внимательность,
          трудолюбие – черты, которые нам в этом помогают, делая нас
          экономически эффективными, а значит, надежными партнерами.
        </p>
        <a href="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg">
          <div>
            <BsFileEarmarkArrowDownFill />
          </div>
          <span>Скачать сертификат</span>
        </a>
      </div>
    </div>
  );
}
