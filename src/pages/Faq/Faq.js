import React from "react";
import "./faq.scss";
import WhriteHeader from "../../component/Layout/WhriteHeader/WhriteHeader";
import CouncilHero from "../boardTrustees/components/council-hero/CouncilHero";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

function Faq(props) {
  const { t } = useTranslation();

  const heroData = {
    pagePath: `FAQ`,
    title: `FAQ`,
    description: t("FAQ.desc"),
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="page-about">
        <WhriteHeader />
        <CouncilHero {...heroData} />
      </div>
      <div className="faq container">
        <div className="faq_Names">FAQ</div>
        <div className="faq_textes">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="faq_textes_icons" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{ width: "100%", flexShrink: 0 }}
                className="faq_textes_oneses"
              >
                1.Xorijiy investitsiyalarni rag‘batlantirish agentligi nima
                qiladi?
              </Typography>
              {/*<Typography sx={{color: 'text.secondary'}}>I am an accordion</Typography>*/}
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="faq_textes_twos">
                Davlat O‘zbekiston Respublikasi hududida investisiya faoliyatini
                amalga oshiruvchi xorijiy investorlarning huquqlarini
                kafolatlaydi va himoya qiladi. Xorijiy investorlarni fuqaroligi,
                yashash joyi, dini, iqtisodiy faoliyat joyi, shuningdek,
                investorlar yoki investitsiyalarning kelib chiqishi mamlakatiga
                qarab, Oʻzbekiston Respublikasining xalqaro shartnomalari
                bajarilishini hisobga olgan holda kamsitishga yoʻl qoʻyilmaydi.
                O'zbekiston. O‘zbekiston Respublikasining keyingi qonun
                hujjatlarida investitsiya kiritish shartlari yomonlashgan
                taqdirda, investitsiya kiritilgan kundan boshlab o‘n yil
                mobaynida xorijiy investorlarga nisbatan investitsiya kiritilgan
                sanadagi amaldagi qonun hujjatlari qo‘llaniladi. Chet ellik
                investor o'z xohishiga ko'ra yangi qonun hujjatlarining uning
                investitsiyalari uchun sharoitlarni yaxshilaydigan qoidalarini
                qo'llashga haqli. Qonun hujjatlariga oʻzgartish va qoʻshimchalar
                kiritish, shuningdek Oʻzbekiston Respublikasining yangi qonun
                hujjatlarini qabul qilish investitsiya shartlarining
                yomonlashuvi hisoblanadi, unda quyidagilar nazarda tutiladi:
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="faq_textes_icons" />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography
                sx={{ width: "100%", flexShrink: 0 }}
                className="faq_textes_oneses"
              >
                2. Xorijiy investitsiyalarni rag‘batlantirish agentligi nima
                qiladi?
              </Typography>
              {/*<Typography sx={{width: '33%', flexShrink: 0}}>Users</Typography>*/}
              {/*<Typography sx={{color: 'text.secondary'}}>*/}
              {/*    You are currently not an owner*/}
              {/*</Typography>*/}
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="faq_textes_twos">
                Davlat O‘zbekiston Respublikasi hududida investisiya faoliyatini
                amalga oshiruvchi xorijiy investorlarning huquqlarini
                kafolatlaydi va himoya qiladi. Xorijiy investorlarni fuqaroligi,
                yashash joyi, dini, iqtisodiy faoliyat joyi, shuningdek,
                investorlar yoki investitsiyalarning kelib chiqishi mamlakatiga
                qarab, Oʻzbekiston Respublikasining xalqaro shartnomalari
                bajarilishini hisobga olgan holda kamsitishga yoʻl qoʻyilmaydi.
                O'zbekiston. O‘zbekiston Respublikasining keyingi qonun
                hujjatlarida investitsiya kiritish shartlari yomonlashgan
                taqdirda, investitsiya kiritilgan kundan boshlab o‘n yil
                mobaynida xorijiy investorlarga nisbatan investitsiya kiritilgan
                sanadagi amaldagi qonun hujjatlari qo‘llaniladi. Chet ellik
                investor o'z xohishiga ko'ra yangi qonun hujjatlarining uning
                investitsiyalari uchun sharoitlarni yaxshilaydigan qoidalarini
                qo'llashga haqli. Qonun hujjatlariga oʻzgartish va qoʻshimchalar
                kiritish, shuningdek Oʻzbekiston Respublikasining yangi qonun
                hujjatlarini qabul qilish investitsiya shartlarining
                yomonlashuvi hisoblanadi, unda quyidagilar nazarda tutiladi:
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Faq;
