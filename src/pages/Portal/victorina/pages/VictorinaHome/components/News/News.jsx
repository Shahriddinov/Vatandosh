import {
  CalendarIcon,
  NewsImage,
  ViewIcon,
  WhiteCalendar,
} from "../../../../../../../assets/images/expert";
import { imageUrl } from "../../../../../../../services/api/utils";
import "./News.scss";

function VictorinaNews({ communityNews }) {
  console.log(communityNews);
  return (
    <div className="expertnews">
      <div className="container">
        <h3>Yangiliklar</h3>
        <div className="expertnews-page">
          {communityNews?.data?.slice(0, 1)?.map((evt) => (
            <div key={evt.id} className="expertnews-left">
              <h4>{evt.title}</h4>
              <span className="expertnews-span">
                <img src={WhiteCalendar} alt="Calendar Icon" />
                <p>{evt.created_at.slice(0, 10)}</p>
              </span>
              <img
                className="victorina-newsimage"
                src={`${imageUrl}/${evt?.image}`}
                alt={evt.title}
              />
            </div>
          ))}

          <div className="expertnews-right">
            {communityNews?.data?.slice(1, 4).map((news) => (
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
