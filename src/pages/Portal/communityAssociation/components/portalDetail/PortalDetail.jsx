import { Link } from "react-router-dom";
import "./portalDetail.scss";
import { MdArrowRight } from "react-icons/md";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";
import {
  LatestNews,
  PopularTags,
  ShareFriends,
  Spinner,
} from "../../../../../component";
import { usePortalDetailFetching } from "./hooks/usePortalDetailFetching";
import NotFound from "../../../../404";
import Header from "../../../../../component/Layout/Header/Header";
import { useTranslation } from "react-i18next";

function PortalDetail() {
  const { t } = useTranslation();
  const { data, loading, error } = usePortalDetailFetching();

  if (loading) {
    return <Spinner position="full" />;
  }

  if (error) {
    return <NotFound />;
  }
  return data ? (
    <div className="newsdetail">
      <Header />
      <div className="container">
        <div className="newsdetail-wrapper">
          <div className="newsdetail-tablet-tags">
            <PopularTags />
          </div>
          <div className="newsdetail-title">
            <h1 className="newsdetail-title-text">{data?.title}</h1>
            <div className="newsdetail-title-url">
              <Link to="/">{t("mainPage")}</Link>
              <MdArrowRight />
              <MdArrowRight />
              <span>{t("more")}</span>
            </div>
          </div>

          <div className="newsdetail-main">
            <div className="newsdetail-main-desc">
              <div className="newsdetail-main-desc-img">
                <img src={`${PORTAL_IMAGE_URL}${data?.image}`} alt="" />
              </div>
              <div className="newsdetail-main-desc-action">
                <div className="newsdetail-main-desc-action-date-viewers">
                  <div className="newsdetail-main-desc-action-date">
                    <BsFillCalendar2EventFill />
                    <span>{data.data}</span>
                  </div>
                  <div className="newsdetail-main-desc-action-viewers">
                    <AiFillEye />
                    <span>{data.viewers}</span>
                  </div>
                </div>
                <div className="newsdetail-main-desc-action-tags">
                  {data?.tags?.split(",").map((el, index) => {
                    return (
                      <Link
                        to={`/hashtag/${el.trim()}`}
                        key={index}
                        className="populartags-tag">
                        {el}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div
                className="newsdetail-main-desc-texts"
                dangerouslySetInnerHTML={{
                  __html: data?.content,
                }}></div>
              <div className="newsdetail-main-desc-share">
                <ShareFriends />
              </div>
            </div>
            <div className="newsdetail-main-news-tags">
              <div className="newsdetail-main-news">
                <LatestNews />
              </div>
              <div className="newsdetail-desktop-tags">
                <PopularTags />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default PortalDetail;
