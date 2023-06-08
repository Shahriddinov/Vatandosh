import { Link, useNavigate } from "react-router-dom";
import "../card/card.scss";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { IoEye } from "react-icons/io5";
import { PORTAL_IMAGE_URL } from "../../services/api/utils";

const PortalCard = (props) => {
  const navigate = useNavigate();

  const tags = props?.tags?.split(",");
  const { category, type, id } = props.urlLink;

  const handleClick = (e) => {
    navigate(`/hashtag/${e.target.innerText}`);
  };
  console.log(props.urlLink);

  return (
    <div
      className="single-card portalCard"
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <div className="img-container">
        <img src={`${PORTAL_IMAGE_URL}/${props?.image}`} alt={props?.title} />
      </div>
      <div className="news-information">
        <Link to={`/detail/${category}/${type}/${id}`}>
          <h5 className="news__card-title">{props?.title}</h5>
          <p
            className="news__card-text"
            dangerouslySetInnerHTML={{
              __html: props.body
                ? props.body
                : props.content
                ? props.content
                : null,
            }}
          />
        </Link>
      </div>
      {tags?.length ? (
        <div className="tags-box">
          <div className="animation-box">
            {tags?.map((tag, id) => {
              if (tag !== null) {
                return (
                  <div
                    className="tag-item"
                    onClick={(e) => handleClick(e)}
                    key={id}
                  >
                    {tag}
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      ) : null}
      <div className="card-footer">
        <div className="news-date">
          <BsFillCalendarEventFill />
          <span>{props?.created_at?.split("T")[0]}</span>
        </div>
        <div className="news-views">
          <IoEye />
          <span>{props?.view}</span>
        </div>
      </div>
    </div>
  );
};

export default PortalCard;
