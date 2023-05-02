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

export default function CustomProfil() {
  const { pathname } = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { expert: expertData, loading } = useSelector(
    (state) => state.expertSlice
  );

  useEffect(() => {
    if (pathname.includes("expert")) {
      dispatch(getExpert(id));
    }
  }, [dispatch, pathname, id]);

  if (loading) return <Spinner position="full" />;
  if (!expertData) return <NotFound />;

  return (
    <div className="customprofil-wrapper">
      <div className="customprofil-detail">
        <div className="customprofil-detail-img">
          <img
            src={`${PORTAL_IMAGE_URL}/${expertData?.user.avatar}`}
            alt="error"
          />
        </div>
        <div className="customprofil-detail-desc">
          <h4>{expertData?.user.name}</h4>
          <div className="customprofil-detail-desc-workexp">
            <span>{t("expert.workexp")}</span>
            <span>4 yil</span>
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
              <div className="customprofil-list-otm-item">
                <div className="customprofil-list-otm-desc">
                  <span>{t("expert.uzbotm")}</span>
                  <p>{expertData?.user_education.institution}</p>
                </div>
                <div className="customprofil-list-otm-desc">
                  <span>{t("expert.faculty")}</span>
                  <p>{expertData?.user_education.faculty}</p>
                </div>
                <div className="customprofil-list-otm-desc">
                  <span>{t("expert.profession")}</span>
                  <p>{expertData?.user_education.level}</p>
                </div>
              </div>
              <div className="customprofil-list-otm-item">
                <div className="customprofil-list-otm-desc">
                  <span>{t("expert.xorotm")}</span>
                  <p>American University of Sharjah</p>
                </div>
                <div className="customprofil-list-otm-desc">
                  <span>{t("expert.xorfaculty")}</span>
                  <p>Bachelor of Business Administration</p>
                </div>
                <div className="customprofil-list-otm-desc">
                  <span>{t("expert.xorprofession")}</span>
                  <p>Administration</p>
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
            <Typography>{t("expert.workexper")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="customprofil-list-workexp">
              <div className="customprofil-list-workexp-item">
                <span>{t("expert.workspace")}</span>
                <p>{expertData?.user_employment_info.company}</p>
              </div>
              <div className="customprofil-list-workexp-item">
                <span>{t("expert.workcountry")}</span>
                <p>{expertData?.user_employment_info.city}</p>
              </div>
              <div className="customprofil-list-workexp-item">
                <span>{t("expert.workregion")}</span>
                <p>{expertData?.user_employment_info.city}</p>
              </div>
              <div className="customprofil-list-workexp-item">
                <span>{t("expert.position")}</span>
                <p>{expertData?.user_employment_info.specialization}</p>
              </div>
              <div className="customprofil-list-workexp-item">
                <span>{t("expert.workstart")}</span>
                <p>{expertData?.user_employment_info.start_date}</p>
              </div>
              <div className="customprofil-list-workexp-item">
                <span>{t("expert.workend")}</span>
                <p>{expertData?.user_employment_info.finish_date}</p>
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
            <Typography>{t("expert.activity")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="customprofil-list-scientific">
              <div className="customprofil-list-scientific-item">
                <span>{t("expert.article")}</span>
                <p>
                  Sovet Ittifoqi va Xitoy Xalq Respublikasi o‘z qo‘li ostidagi
                  yaponlarga nisbatan munosabatining qiyosiy tahlili. Maqola
                  havolasi
                </p>
              </div>
              <div className="customprofil-list-scientific-item">
                <span>{t("expert.articletitle")}</span>
                <p>
                  “O‘zbekistonda yosh rahbar kadrlarning boshqaruv salohiyatini
                  yuksaltirish: Muammo va istiqbollar” mavzusidagi ilmiy-amaliy
                  ishi
                </p>
              </div>
              <div className="customprofil-list-scientific-item">
                <span>{t("expert.articlename")}</span>
                <p>
                  “O‘zbekistonda yosh rahbar kadrlarning boshqaruvsalohiyatini
                  yuksaltirish: Muammo va istiqbollar” ilmiy elektron jurnali
                </p>
              </div>
              <div className="customprofil-list-scientific-printDate">
                <div className="customprofil-list-scientific-printDate-item">
                  <span>{t("expert.articledate")}</span>
                  <p>28-noyabr 2018-yil</p>
                </div>
                <div className="customprofil-list-scientific-printDate-item">
                  <span>{t("expert.degree")}</span>
                  <p>Fan Doktori</p>
                </div>
              </div>
              <div className="customprofil-list-scientific-tags">
                <span>{t("expert.degreelist")}</span>
                <div className="customprofil-list-scientific-tags-list">
                  <span>Global governance</span>
                  <span>International trade and development</span>
                  <span>Economic diplomacy</span>
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
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker
                  </p>
                  <button className="customprofil-list-offer-info-desc-btn">
                    <Link to={"/portal-category/expert/offers/1"}>
                      {t("expert.detail")}
                    </Link>
                  </button>
                </div>
              </div>
              <div className="customprofil-list-offer-infoplus">
                <span></span>
                <p>
                  El-Yurt Uidi Halqaro Expertlar Kengashi a’zosi bo‘lish; 2.
                  O‘zbekistonda tegishli vazirlik va tashkilotlar bilan
                  hamkorlik va yaqin kelajakda ishlash imkoniyatini ko‘rib
                  chiqish. Iqtisodiyot vazirligi, Tashqi ishlar vazirligi yoki
                  Investisiyalar va Tashqi Savdo Vazirligida ishlash rejasi.
                  Hamkorklik va takliflarni ko‘rib chiqaman; 3. Halqaro
                  iqtisodiy hamkorlik, Iqtisodiy rivojlantirish dasturlari,
                  Startap ekotizimini rivojlantirish, raqamli iqtisodiyot va
                  yashil texnologiyalarni rivojlantirish.
                </p>
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
  );
}
