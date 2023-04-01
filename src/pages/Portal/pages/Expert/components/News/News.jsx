import {
  CalendarIcon,
  NewsImage,
  ViewIcon,
  WhiteCalendar,
} from "../../../../../../assets/images/expert";
import "./News.scss";
import { news } from "../../news";

function News() {
  return (
    <div className="news">
      <div className="container">
        <h3>Yangiliklar</h3>
        <div className="news-page">
          <div className="news-left">
            <h4>
              "Vatandoshlar" jamoat fondi rahbariyati Rossiya Federatsiyasiga
              bo'lgan xizmat safari davomida ...
            </h4>
            <span className="news-span">
              <img src={WhiteCalendar} alt="Calendar Icon" />
              <p>12.02.2023</p>
            </span>
            <img src={NewsImage} />
          </div>
          <div className="news-right">
            {news.map((news) => (
              <div className="news-list">
                <img src={news.images} alt={news.title} />
                <div>
                  <h5>{news.title}</h5>
                  <div className="news-title">
                    <span className="news-item">
                      <img src={CalendarIcon} alt="Calendar Icon" />
                      <p>{news.creadData}</p>
                    </span>
                    <span className="news-item">
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
export default News;
