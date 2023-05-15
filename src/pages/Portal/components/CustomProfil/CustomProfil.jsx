import "./CustomProfil.scss";
import DefaultProfilePic from "../../../../assets/images/mediateka/2.png";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, useLocation, useParams } from "react-router-dom";
import { t } from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getExpert } from "../../../../reduxToolkit/ExpertSlice/ExpertsSlice/ExpertSliceExtraReducer";
import Spinner from "../../../../component/Spinner/Spinner";
import { PORTAL_IMAGE_URL } from "../../../../services/api/utils";
import NotFound from "../../../404";
import { getExpertOneEducation } from "../../../../reduxToolkit/ExpertSlice/ExpertEducation/extraReducer";
import { getExpertOneEmployment } from "../../../../reduxToolkit/ExpertSlice/ExpertEmployment/extraReducer";

export default function CustomProfil() {
  const { pathname } = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    expert: expertData,
    loading,
    error,
  } = useSelector((state) => state.expertSlice);
  const { education, educationLoading } = useSelector(
    (state) => state.education
  );
  const { employment, employmentLoading } = useSelector(
    (state) => state.employment
  );

  useEffect(() => {
    if (pathname.includes("expert") || pathname.includes("volunteer")) {
      dispatch(getExpert(id));
    }
  }, [dispatch, pathname, id]);

  useEffect(() => {
    if (expertData) {
      dispatch(getExpertOneEducation(expertData?.id));
      dispatch(getExpertOneEmployment(expertData?.id));
    }
  }, [expertData, dispatch]);

  if (error) return <NotFound />;

  return expertData ? (
    <div className="customprofil-wrapper">
      {loading || educationLoading || employmentLoading ? (
        <Spinner position="full" />
      ) : null}
      <div className="customprofil-detail">
        <div className="customprofil-detail-img">
          <img
            src={`${PORTAL_IMAGE_URL}/${expertData?.user_id?.avatar}`}
            alt="error"
          />
        </div>
        <div className="customprofil-detail-desc">
          <h4>{expertData?.user_id?.name}</h4>
          <div className="customprofil-detail-desc-workexp">
            <span>{t("expert.workexp")}</span>
            <span>{expertData?.user_profile_id?.work_experience}</span>
          </div>
        </div>
      </div>
      <div className="customprofil-list">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{t("expert.education")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="customprofil-list-otm">
              {education.length
                ? education.map((el) => {
                    if (el?.type === 1)
                      return (
                        <div key={el.id} className="customprofil-list-otm-item">
                          <div className="customprofil-list-otm-desc">
                            <span>{t("expert.uzbotm")}</span>
                            <p>{el?.institution}</p>
                          </div>
                          <div className="customprofil-list-otm-desc">
                            <span>{t("expert.faculty")}</span>
                            <p>{el?.faculty}</p>
                          </div>
                          <div className="customprofil-list-otm-desc">
                            <span>{t("expert.profession")}</span>
                            <p>{el?.level}</p>
                          </div>
                        </div>
                      );
                    else
                      return (
                        <div className="customprofil-list-otm-item">
                          <div className="customprofil-list-otm-desc">
                            <span>{t("expert.xorotm")}</span>
                            <p>{el?.institution}</p>
                          </div>
                          <div className="customprofil-list-otm-desc">
                            <span>{t("expert.xorfaculty")}</span>
                            <p>{el?.faculty}</p>
                          </div>
                          <div className="customprofil-list-otm-desc">
                            <span>{t("expert.xorprofession")}</span>
                            <p>{el?.level}</p>
                          </div>
                        </div>
                      );
                  })
                : null}
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{t("expert.workexper")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {employment.length
              ? employment.map((el) => (
                  <div className="customprofil-list-workexp">
                    <div className="customprofil-list-workexp-item">
                      <span>{t("expert.workspace")}</span>
                      <p>{el?.company}</p>
                    </div>
                    <div className="customprofil-list-workexp-item">
                      <span>{t("expert.workcountry")}</span>
                      <p>{el?.location_name}</p>
                    </div>
                    <div className="customprofil-list-workexp-item">
                      <span>{t("expert.workregion")}</span>
                      <p>{el?.city}</p>
                    </div>
                    <div className="customprofil-list-workexp-item">
                      <span>{t("expert.position")}</span>
                      <p>{el?.specialization}</p>
                    </div>
                    <div className="customprofil-list-workexp-item">
                      <span>{t("expert.workstart")}</span>
                      <p>{el?.start_date}</p>
                    </div>
                    <div className="customprofil-list-workexp-item">
                      <span>{t("expert.workend")}</span>
                      <p>{el?.finish_date}</p>
                    </div>
                  </div>
                ))
              : null}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{t("expert.activity")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="customprofil-list-scientific">
              <div className="customprofil-list-scientific-item">
                <span>{t("expert.article")}</span>
                <p>{expertData?.topic_of_scientific_article}</p>
              </div>
              <div className="customprofil-list-scientific-item">
                <span>{t("expert.articletitle")}</span>
                <p>{expertData?.topic_of_scientific_article}</p>
              </div>
              <div className="customprofil-list-scientific-item">
                <span>{t("expert.articlename")}</span>
                <p>{expertData?.article_published_journal_name}</p>
              </div>
              <div className="customprofil-list-scientific-printDate">
                <div className="customprofil-list-scientific-printDate-item">
                  <span>{t("expert.articledate")}</span>
                  <p>{expertData?.scientific_article_created_at}</p>
                </div>
                <div className="customprofil-list-scientific-printDate-item">
                  <span>{t("expert.degree")}</span>
                  <p>{expertData?.academic_degree}</p>
                </div>
              </div>
              <div className="customprofil-list-scientific-tags">
                <span>{t("expert.degreelist")}</span>
                <div className="customprofil-list-scientific-tags-list">
                  {expertData?.main_science_directions?.length
                    ? expertData?.main_science_directions?.map((el, index) => (
                        <span key={index}>{el}</span>
                      ))
                    : null}
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{t("expert.ownoffers")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="customprofil-list-offer">
              <div className="customprofil-list-offer-info">
                <div className="customprofil-list-offer-info-img">
                  <img src={DefaultProfilePic} alt="error" />
                </div>
                <div className="customprofil-list-offer-info-desc">
                  <span>{t("expert.offer")}</span>
                  <p>{expertData?.suggestions}</p>
                  <button className="customprofil-list-offer-info-desc-btn">
                    <Link
                      to={"/portal-category/expert/offers/" + expertData?.id}
                    >
                      {t("expert.detail")}
                    </Link>
                  </button>
                </div>
              </div>
              <div className="customprofil-list-offer-infoplus">
                <span>{t("expert.information")}</span>
                <p>{expertData?.additional_information}</p>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        {pathname?.includes("expert") ? null : (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Volonyorlik faoliyati</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {[1, 2, 3, 4].map((id) => (
                <div key={id} className="customprofil-list-offer">
                  <div
                    className="customprofil-list-offer-info"
                    style={
                      id % 2 === 0 ? { flexDirection: "row-reverse" } : null
                    }
                  >
                    <div className="customprofil-list-offer-info-img">
                      <img
                        src={DefaultProfilePic}
                        alt="error"
                        className="valontery-desc-img"
                      />
                    </div>
                    <div className="customprofil-list-offer-info-desc valontery-desc-text">
                      <p className="customprofil-list-offer-info-desc-text">
                        {`${id}. “O‘zbekiston zamini” ilmiy-amaliy va innovatsion maqola`}
                      </p>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker
                      </p>
                      <button className="customprofil-list-offer-info-desc-btn">
                        <Link to={"/portal-category/volunteer/article/2"}>
                          Batafsil
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
        )}
      </div>
    </div>
  ) : null;
}
