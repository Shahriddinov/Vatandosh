import React from "react";
import AboutTeachingHero from "../../components/AboutTeachingHero/AboutTeachingHero";
import "./aboutTeaching.scss";
import Done from "../../../../../assets/images/online-teaching/done.svg";
import Play from "../../../../../assets/images/OnlineTeaching/play.svg";
import Block from "../../../../../assets/images/OnlineTeaching/block.svg";
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
                <div className=''></div>
                <Accordion expanded={expanded === 'panel1'} sx={{border: '1px dashed', marginTop: '3%'}} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        // expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        className="aboutTeaching_accordion"
                    >
                        <Typography sx={{width: '33%', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '30px'}}>
                            <button className="aboutTeaching_accordion_buttons">Урок 1</button>
                            <div className="aboutTeaching_accordion_seem">Введение</div>
                        </Typography>
                        <div className="aboutTeaching_accordion_second">
                            <Typography sx={{color: '#141619'}}>2</Typography>
                            <Typography sx={{color: '#141619'}}>23:21 Min</Typography>
                            <Typography ><button className="aboutTeaching_accordion_second_learn">Меньше</button></Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div className="aboutTeaching_accordion_lesson">
                                <div className="aboutTeaching_accordion_lesson_play">
                                    <img src={Play} alt=""/>
                                    <span className="aboutTeaching_accordion_lesson_play_welcome">Welcome to our journey</span>
                                </div>
                                <div className="aboutTeaching_accordion_lesson_min">23:21 Min</div>
                            </div>
                            <hr/>
                            <div className="aboutTeaching_accordion_lesson">
                                <div className="aboutTeaching_accordion_lesson_play">
                                    <img src={Block} alt=""/>
                                    <span className="aboutTeaching_accordion_lesson_play_welcome">Structuring Language</span>
                                </div>
                                <div className="aboutTeaching_accordion_lesson_min">23:21 Min</div>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} sx={{border: '1px dashed',  marginBottom:'3%'}} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        // expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        className="aboutTeaching_accordion"
                    >
                        <Typography sx={{width: '33%', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '30px'}}>
                            <button className="aboutTeaching_accordion_buttons">Урок 2</button>
                            <div className="aboutTeaching_accordion_seem">Введение</div>
                        </Typography>
                        <div className="aboutTeaching_accordion_second">
                            <Typography sx={{color: '#141619'}}>2</Typography>
                            <Typography sx={{color: '#141619'}}>23:21 Min</Typography>
                            <Typography ><button className="aboutTeaching_accordion_second_learn">Более</button></Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div className="aboutTeaching_accordion_lesson">
                                <div className="aboutTeaching_accordion_lesson_play">
                                    <img src={Play} alt=""/>
                                    <span className="aboutTeaching_accordion_lesson_play_welcome">Welcome to our journey</span>
                                </div>
                                <div className="aboutTeaching_accordion_lesson_min">23:21 Min</div>
                            </div>
                            <hr/>
                            <div className="aboutTeaching_accordion_lesson">
                                <div className="aboutTeaching_accordion_lesson_play">
                                    <img src={Block} alt=""/>
                                    <span className="aboutTeaching_accordion_lesson_play_welcome">Structuring Language</span>
                                </div>
                                <div className="aboutTeaching_accordion_lesson_min">23:21 Min</div>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>
        </>
    );
}

export default AboutTeaching;
