import { useTranslation } from "react-i18next";
import "./VictorinaWinner.scss";
import ShareFriends from "../../../../../component/ShareFriends/ShareFriends";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { imageUrl } from "../../../../../services/api/utils";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { getQuizPage } from "../../../../../reduxToolkit/victorinapage/victorina-page";
import { useEffect } from "react";
import VictorinaStatics from "../VictorinaHome/components/VictorinaStatics/VictorinaStatics";
import { Spinner } from "../../../../../component";
import { getByIdQuizz } from "../../../../../reduxToolkit/victorinaQuiz/quizbyid/quizid";

export default function VictorinaWinner() {
  const { t } = useTranslation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.quizByIdSlice.quizByIdData);
  const quizDataLoading = useSelector((state) => state.quizByIdSlice.loading);
  const quizDataError = useSelector((state) => state.quizSlice.error);
  const pageData = useSelector((state) => state.pageSlice.pageData);

  const lan = useSelector((state) => state.language.language);

  useEffect(() => {
    dispatch(getByIdQuizz({ id: id }));
    dispatch(getQuizPage());
  }, [lan, dispatch, id]);

  if (quizDataLoading) {
    return <Spinner position="full" />;
  } else if (quizDataError) {
    return <p>{quizDataError}</p>;
  }
  const data = quizData?.participants?.find((evt) => evt?.id === Number(id));

  const url = [
    { title: t("expert.main"), url: "/portal-category/victorina" },
    {
      title: t("victorina.end"),
      url: "/portal-category/victorina/finished-projects",
    },
    {
      title: quizData?.title,
      url: "/portal-category/victorina/finished-projects/image-project",
    },
    { title: t("victorina.winner"), url: "" },
  ];

  return (
    <main className="victorinawinner">
      <div className="container">
        <div className="experttitle-title">
          <h1 className="experttitle-title-text">{quizData?.title}</h1>
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
              src={`${imageUrl}/${JSON.parse(quizData?.image)[0]}`}
              alt="error"
            />
            <div className="victorinawinner-main-profile">
              <img src={`${imageUrl}/${data?.user?.avatar}`} alt="error" />
              <div className="victorinawinner-main-profile-desc">
                <p>{data?.user?.name}</p>
                <span>{data?.position}-o‘rin g‘olibi</span>
              </div>
            </div>
            <h3>{t("victorina.winnerprice")}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: data?.description,
              }}
            />
            <ShareFriends />
          </div>
          <VictorinaStatics pageData={pageData} />
        </div>
      </div>
    </main>
  );
}
