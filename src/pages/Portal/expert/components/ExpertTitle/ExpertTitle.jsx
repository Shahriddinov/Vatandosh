import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import "./ExpertTitle.scss";
import { useTranslation } from "react-i18next";

export default function ExpertTitle({ title, url }) {
  const { t } = useTranslation();
  console.log(url);
  return (
    <div className="experttitle-title">
      <h1 className="experttitle-title-text">{title}</h1>
      <div className="experttitle-title-url">
        {url?.map((el, index) => (
          <Link key={index} to={el.url}>
            {el.title}
            {"   "}
            <MdArrowRight />
            {el.titleOne}
            {"    "}
            {el.titleTwo}
          </Link>
        ))}
      </div>
    </div>
  );
}
