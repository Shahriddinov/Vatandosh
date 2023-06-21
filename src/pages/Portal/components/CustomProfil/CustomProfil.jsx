import "./CustomProfil.scss";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getExpert } from "../../../../reduxToolkit/ExpertSlice/ExpertsSlice/ExpertSliceExtraReducer";
import Spinner from "../../../../component/Spinner/Spinner";
import { PORTAL_IMAGE_URL } from "../../../../services/api/utils";
import NotFound from "../../../404";
import { getExpertOneEducation } from "../../../../reduxToolkit/ExpertSlice/ExpertEducation/extraReducer";
import { getExpertOneEmployment } from "../../../../reduxToolkit/ExpertSlice/ExpertEmployment/extraReducer";
import { useTranslation } from "react-i18next";

export default function CustomProfil() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    expert: expertData,
    expertLoading,
    error,
  } = useSelector((state) => state.expertSlice);
  const expertEducation = useSelector((state) => state.education);

  useEffect(() => {
    if (pathname.includes("expert") || pathname.includes("volunteer")) {
      dispatch(getExpert(id));
    }
  }, [dispatch, pathname, id]);

  useEffect(() => {
    if (Object.keys(expertData).length !== 0) {
      dispatch(getExpertOneEducation(expertData.user_id));
      dispatch(getExpertOneEmployment(expertData.user_id));
    }
  }, [expertData, dispatch]);

  if (error) return <NotFound />;

  if (expertLoading) {
    return <Spinner position="full" />;
  }

  let experience = 0;

  expertData.user_employment_info.forEach((data) => {
    experience += +data.experience;
  });

  let verified_expert_activities = 0;
  let verified_volunteer_activities = 0;

  expertData?.user_volunteer_activities.forEach((act) => {
    if (act.verified && act.type === 1) {
      verified_expert_activities++;
    }

    if (act.verified && act.type === 2) {
      verified_volunteer_activities++;
    }
  });

  return expertData ? (
    <div className="customprofil-wrapper">
      <div className="customprofil-detail">
        <div className="customprofil-detail-img">
          <img
            src={`${PORTAL_IMAGE_URL}/${expertData?.user_profile?.avatar_url}`}
            alt="error"
          />
        </div>
        <div className="customprofil-detail-desc">
          <h4>
            {expertData?.user_profile?.last_name}{" "}
            {expertData?.user_profile?.first_name}{" "}
            {expertData?.user_profile?.second_name}
          </h4>
          {pathname.includes("expert") ? (
            <div className="customprofil-detail-desc-workexp">
              <span>{t("expert.workexp")}</span>
              <span>
                {experience} {t("expert.year")}
              </span>
            </div>
          ) : (
            ""
          )}
          {pathname.includes("expert") ? null : (
            <div className="customprofil-detail-desc-workexp">
              <span>Chop etilgan maqolalar soni:</span>
              <span>{verified_volunteer_activities}</span>
            </div>
          )}
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
              {expertEducation?.education?.length > 0
                ? expertEducation?.education?.map((el) => {
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
                        <div key={el.id} className="customprofil-list-otm-item">
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
            {expertData?.user_employment_info?.length > 0 ? (
              expertData?.user_employment_info?.map((el) => (
                <div key={el.id} className="customprofil-list-workexp">
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
                    <p>{el?.finish_date ? el?.finish_date : "Present"}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Mehnat faoliyati mavjud emas.</p>
            )}
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
            {expertData?.topic_of_scientific_article ? (
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
                    {expertData?.main_science_directions &&
                    JSON.parse(expertData?.main_science_directions).length > 0
                      ? JSON.parse(expertData?.main_science_directions).map(
                          (el, index) => <span key={index}>{el}</span>
                        )
                      : null}
                  </div>
                </div>
              </div>
            ) : (
              <p>Ilmiy faoliyati mavjud emas.</p>
            )}
          </AccordionDetails>
        </Accordion>
        {pathname.includes("expert") ? (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{t("expert.ownoffers")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {expertData?.suggestions && expertData?.verified ? (
                <div className="customprofil-list-offer">
                  <div className="customprofil-list-offer-info">
                    <div className="customprofil-list-offer-info-img">
                      <img
                        src={`${PORTAL_IMAGE_URL}/${JSON.parse(
                          expertData?.images
                        )}`}
                        alt="error"
                      />
                    </div>
                    <div className="customprofil-list-offer-info-desc">
                      <span>{t("expert.offer")}</span>
                      <p>{expertData?.suggestions}</p>
                      <button className="customprofil-list-offer-info-desc-btn">
                        <Link to={"/portal-category/expert/offers/" + id}>
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
              ) : (
                <p>{t("expertnone")}</p>
              )}
            </AccordionDetails>
          </Accordion>
        ) : null}
        {pathname.includes("expert") ? (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{t("expertActivity")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {verified_expert_activities > 0 ? (
                expertData?.user_volunteer_activities?.map((evt) => {
                  return evt?.type === 1 ? (
                    <div key={id} className="customprofil-list-offer">
                      <div
                        className="customprofil-list-offer-info"
                        style={
                          id % 2 === 0 ? { flexDirection: "row-reverse" } : null
                        }
                      >
                        <div className="customprofil-list-offer-info-img">
                          {evt.images &&
                            JSON.parse(evt.images).map((image, index) => (
                              <img
                                key={index}
                                src={`${PORTAL_IMAGE_URL}/${image}`}
                                alt="error"
                                className="valontery-desc-img"
                              />
                            ))}
                        </div>
                        <div className="customprofil-list-offer-info-desc valontery-desc-text">
                          <p className="customprofil-list-offer-info-desc-text">
                            {evt?.title}
                          </p>
                          <p>{evt?.description}</p>
                          <button className="customprofil-list-offer-info-desc-btn">
                            <Link
                              to={
                                "/portal-category/volunteer/offers/" + evt?.id
                              }
                            >
                              {t("expert.detail")}
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : null;
                })
              ) : (
                <p>{t("expertNoneOne")}</p>
              )}
            </AccordionDetails>
          </Accordion>
        ) : null}
        {pathname.includes("expert") ? null : (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{t("voluntery.nav4")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {verified_volunteer_activities > 0 ? (
                expertData?.user_volunteer_activities?.map((evt) => {
                  return evt?.type === 2 ? (
                    <div key={id} className="customprofil-list-offer">
                      <div
                        className="customprofil-list-offer-info"
                        style={
                          id % 2 === 0 ? { flexDirection: "row-reverse" } : null
                        }
                      >
                        <div className="customprofil-list-offer-info-img">
                          {evt.images &&
                            JSON.parse(evt.images).map((image, index) => (
                              <img
                                key={index}
                                src={`${PORTAL_IMAGE_URL}/${image}`}
                                alt="error"
                                className="valontery-desc-img"
                              />
                            ))}
                        </div>
                        <div className="customprofil-list-offer-info-desc valontery-desc-text">
                          <p
                            className="customprofil-list-offer-info-desc-text"
                            style={{ fontSize: "30px", color: "green" }}
                          >
                            {evt?.title}
                          </p>
                          <p>{evt?.description}</p>
                          <button className="customprofil-list-offer-info-desc-btn">
                            <Link
                              to={
                                "/portal-category/volunteer/offers/" + evt?.id
                              }
                            >
                              {t("expert.detail")}
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : null;
                })
              ) : (
                <p>{t("volunteryNone")}</p>
              )}
            </AccordionDetails>
          </Accordion>
        )}
      </div>
    </div>
  ) : null;
}
