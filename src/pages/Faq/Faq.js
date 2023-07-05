import React, { useEffect } from "react";
import "./faq.scss";
import WhriteHeader from "../../component/Layout/WhriteHeader/WhriteHeader";
import CouncilHero from "../boardTrustees/components/council-hero/CouncilHero";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getFaq } from "../../reduxToolkit/Faq/faq";
import { getAbout } from "../../reduxToolkit/About/About";
import Spinner from "../../component/Spinner";

function Faq(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const lan = useSelector((state) => state.language.language);
  const loading = useSelector((state) => state.faqSlice.loading);
  const faqData = useSelector((state) => state.faqSlice.faqData);
  const heroData = {
    pagePath: `FAQ`,
    title: `FAQ`,
    description: t("faqDesc"),
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  useEffect(() => {
    dispatch(getFaq());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="page-about">
        <WhriteHeader />
        <CouncilHero {...heroData} />
      </div>
      <div className="faq container">
        <div className="faq_Names">FAQ</div>
        <div className="faq_textes">
          {faqData?.map((item, index) => (
            <Accordion
              expanded={expanded === index}
              key={index}
              onChange={handleChange(index)}
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
                  {item[`question_${lan}`]}
                </Typography>
                {/*<Typography sx={{color: 'text.secondary'}}>I am an accordion</Typography>*/}
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="faq_textes_twos">
                  <p
                    dangerouslySetInnerHTML={{ __html: item[`answer_${lan}`] }}
                  />
                  {/* {item[`answer_${lan}`]} */}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
}

export default Faq;
