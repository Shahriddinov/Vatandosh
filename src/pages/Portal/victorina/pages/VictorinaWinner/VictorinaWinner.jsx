import { useTranslation } from "react-i18next";
import "./VictorinaWinner.scss";
import CouncilStatics from "../../../expert/pages/ExpertHome/components/Council/CouncilStatics";
import ShareFriends from "../../../../../component/ShareFriends/ShareFriends";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { imageUrl } from "../../../../../services/api/utils";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { getQuizPage } from "../../../../../reduxToolkit/victorinapage/victorina-page";
import { useEffect } from "react";
import VictorinaStatics from "../VictorinaHome/components/VictorinaStatics/VictorinaStatics";

export default function VictorinaWinner() {
  const { t } = useTranslation();
  const { id } = useParams();
  const dispatch = useDispatch()
  const quizData = useSelector((state) =>
    state.quizSlice.quizData.participants?.find((evt) => evt?.id === Number(id))
  );
  const pageData = useSelector((state) => state.pageSlice.pageData);

  const url = [
    { title: t("expert.main"), url: "/portal-category/victorina" },
    {
      title: t("victorina.end"),
      url: "/portal-category/victorina/finished-projects",
    },
    {
      title: quizData.quiz.title,
      url: "/portal-category/victorina/finished-projects/image-project",
    },
    { title: t("victorina.winner"), url: "" },
  ];

  useEffect(() => {
    dispatch(getQuizPage());
  }, []);
  return (
    <main className="victorinawinner">
      <div className="container">
        <div className="experttitle-title">
          <h1 className="experttitle-title-text">{quizData?.quiz?.title}</h1>
          <div className="experttitle-title-url">
            {url?.map((el, index) => (
              <Link key={el.id} to={el.url}>
                {el.title}
                <MdArrowRight />
              </Link>
            ))}
          </div>
        </div>
        <div className="victorinawinner-wrapper">
          <div className="victorinawinner-main">
            <img
              className="victorinawinner-winner-img"
              src={`${imageUrl}/${quizData?.quiz?.image}`}
              alt="error"
            />
            <div className="victorinawinner-main-profile">
              <img src={`${imageUrl}/${quizData?.user?.avatar}`} alt="error" />
              <div className="victorinawinner-main-profile-desc">
                <p>{quizData.user.name}</p>
                <span>{quizData.position}-o‘rin g‘olibi</span>
              </div>
            </div>
            <h3>{t("victorina.winnerprice")}</h3>
            <p>{quizData.description}</p>
            <ShareFriends />
          </div>
          <VictorinaStatics pageData={pageData} />
        </div>
      </div>
    </main>
  );
}
