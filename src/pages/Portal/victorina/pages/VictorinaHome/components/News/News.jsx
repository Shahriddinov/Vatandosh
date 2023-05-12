import {
  CalendarIcon,
  NewsImage,
  ViewIcon,
  WhiteCalendar,
} from "../../../../../../../assets/images/expert";
import { imageUrl } from "../../../../../../../services/api/utils";
import "./News.scss";

function VictorinaNews({ expertNews }) {
  return (
    <div className="expertnews">
      <div className="container">
        <h3>Yangiliklar</h3>
        <div className="expertnews-page">
          <div className="expertnews-left">
            <h4>
              "Vatandoshlar" jamoat fondi rahbariyati Rossiya Federatsiyasiga
              bo'lgan xizmat safari davomida ...
            </h4>
            <span className="expertnews-span">
              <img src={WhiteCalendar} alt="Calendar Icon" />
              <p>12.02.2023</p>
            </span>
            <img src={NewsImage} alt="error" />
          </div>
          <div className="expertnews-right">
            {expertNews?.data?.map((news) => (
              <div className="expertnews-list" key={news.id}>
                <img src={`${imageUrl}/${news?.image}`} alt={news.title} />
                <div>
                  <h5>{news.title}</h5>
                  <div className="expertnews-title">
                    <span className="expertnews-item">
                      <img src={CalendarIcon} alt="Calendar Icon" />
                      <p>{news.created_at.slice(0, 10)}</p>
                    </span>
                    <span className="expertnews-item">
                      <img src={ViewIcon} alt="Calendar Icon" />
                      <p>{news.views} K</p>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default VictorinaNews;
