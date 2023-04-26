import React from "react";
import AboutTeachingHero from "../../components/AboutTeachingHero/AboutTeachingHero";
import "./aboutTeaching.scss";
import Done from "../../../../../assets/images/online-teaching/done.svg";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AboutTeaching(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <AboutTeachingHero/>
            <div className="aboutTeaching container">
                <div className="aboutTeaching_done">Чему вы научитесь</div>
                <div className="aboutTeaching_cards">
                    <div className="aboutTeaching_cards_steps">
                        <div className="aboutTeaching_cards_steps_borders">
                            <img
                                className="aboutTeaching_cards_steps_borders_imgs"
                                src={Done}
                                alt=""
                            />
                        </div>
                        <div className="aboutTeaching_cards_steps_discrib">
                            <div className="aboutTeaching_cards_steps_discrib_title">
                                100% онлайн
                            </div>
                            <div className="aboutTeaching_cards_steps_discrib_text">
                                Начните сейчас и учитесь по собственному графику.
                            </div>
                        </div>
                    </div>
                    <div className="aboutTeaching_cards_steps">
                        <div className="aboutTeaching_cards_steps_borders">
                            <img
                                className="aboutTeaching_cards_steps_borders_imgs"
                                src={Done}
                                alt=""
                            />
                        </div>
                        <div className="aboutTeaching_cards_steps_discrib">
                            <div className="aboutTeaching_cards_steps_discrib_title">
                                Сертификат, ссылками на который можно делиться с другими людьми
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutTeaching_cards">
                    <div className="aboutTeaching_cards_steps">
                        <div className="aboutTeaching_cards_steps_borders">
                            <img
                                className="aboutTeaching_cards_steps_borders_imgs"
                                src={Done}
                                alt=""
                            />
                        </div>
                        <div className="aboutTeaching_cards_steps_discrib">
                            <div className="aboutTeaching_cards_steps_discrib_title">
                                Гибкие сроки
                            </div>
                            <div className="aboutTeaching_cards_steps_discrib_text">
                                Назначьте сроки сдачи в соответствии со своим графиком.
                            </div>
                        </div>
                    </div>
                    <div className="aboutTeaching_cards_steps">
                        <div className="aboutTeaching_cards_steps_borders">
                            <img
                                className="aboutTeaching_cards_steps_borders_imgs"
                                src={Done}
                                alt=""
                            />
                        </div>
                        <div className="aboutTeaching_cards_steps_discrib">
                            <div className="aboutTeaching_cards_steps_discrib_title">
                                Гибкие сроки
                            </div>
                            <div className="aboutTeaching_cards_steps_discrib_text">
                                Назначьте сроки сдачи в соответствии со своим графиком.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutTeaching_done bot">Об этом курсе</div>
                <div className="aboutTeaching_information">
                    В этом курсе вы примете участие в серии задач, призванных повысить
                    ваше собственное счастье и выработать более продуктивные привычки. В
                    качестве подготовки к этим заданиям профессор Лори Сантос раскрывает
                    неправильные представления о счастье, раздражающие особенности ума,
                    которые заставляют нас думать так, как мы думаем, и исследования,
                    которые могут помочь нам измениться. В конечном итоге вы будете готовы
                    к тому, чтобы успешно включить в свою жизнь определенную
                    оздоровительную деятельность.
                </div>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        className="aboutTeaching_accordion"
                    >
                        <Typography sx={{width: '33%', flexShrink: 0, display: 'flex'}}>
                            <button className="aboutTeaching_accordion_buttons">Урок 1</button>
                            <div>Введение</div>
                        </Typography>
                        <Typography sx={{color: 'text.secondary'}}>2</Typography>
                        <Typography sx={{color: 'text.secondary'}}>23:21 Min</Typography>
                        <Typography sx={{color: 'text.secondary'}}><button>Меньше</button></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                            Aliquam eget maximus est, id dignissim quam.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography sx={{width: '33%', flexShrink: 0}}>Users</Typography>
                        <Typography sx={{color: 'text.secondary'}}>
                            You are currently not an owner
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                            laoreet.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography sx={{width: '33%', flexShrink: 0}}>
                            Advanced settings
                        </Typography>
                        <Typography sx={{color: 'text.secondary'}}>
                            Filtering has been entirely disabled for whole web server
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                            amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography sx={{width: '33%', flexShrink: 0}}>Personal data</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                            amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    );
}

export default AboutTeaching;
