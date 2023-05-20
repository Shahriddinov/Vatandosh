import React, {useState} from 'react';
import "./onlineTeachingLesson.scss"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Play  from "../../../../../../../assets/images/OnlineTeaching/play.svg"
function OnlineTeachingLesson(props) {
    const [activeCard, setActiveCard] = useState(true);
    const [activeLesson, setActiveLesson] = useState(true);
    const [activeLesson1, setActiveLesson1] = useState(true);

    return (
        <div className="OnlineTeachingLesson container">
            <div className="OnlineTeachingLesson_practise">Пример урока</div>
            <div className="OnlineTeachingLesson_steps">
                {/*className={activeCard ? "active-btn" : ""}*/}
                <div
                    className={activeCard ? "OnlineTeachingLesson_steps_names actives" : "OnlineTeachingLesson_steps_names"}
                    onClick={() => setActiveCard(true)}>
                    Видео уроки
                </div>
                <div
                    className={!activeCard ? "OnlineTeachingLesson_steps_names actives" : "OnlineTeachingLesson_steps_names"}
                    onClick={() => setActiveCard(false)}>
                    Презентация
                </div>
                <div
                    className={!activeLesson ? "OnlineTeachingLesson_steps_names actives" : "OnlineTeachingLesson_steps_names"}
                    onClick={() => setActiveLesson(false)}>
                    Материалы
                </div>
                <div
                    className={activeLesson ? "OnlineTeachingLesson_steps_names actives" : "OnlineTeachingLesson_steps_names"}
                    onClick={() => setActiveLesson(true)}>
                    Пройти тест
                </div>

            </div>
            <div className="OnlineTeachingLesson_videos">
                <div className="OnlineTeachingLesson_videos_lessonShow">
                    <div className="OnlineTeachingLesson_videos_lessonShow_allTopic">Содержание</div>
                    <hr/>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className="OnlineTeachingLesson_videos_lessonShow_ones">01. Введение</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                               <div
                                   className={activeLesson1 ? "OnlineTeachingLesson_videos_lessonShow_titleLesson cols" : "OnlineTeachingLesson_videos_lessonShow_titleLesson"}
                                   onClick={() => setActiveLesson1(true)}>
                                   <img src={Play} alt=""/>
                                   <span>Welcome to our journey</span>
                               </div>
                                <div
                                   className={!activeLesson1 ? "OnlineTeachingLesson_videos_lessonShow_titleLesson cols" : "OnlineTeachingLesson_videos_lessonShow_titleLesson"}
                                   onClick={() => setActiveLesson1(false)}>
                                   <img src={Play} alt=""/>
                                   <span>Welcome to our journey</span>
                               </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className="OnlineTeachingLesson_videos_lessonShow_ones">01. Введение</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                               <div
                                   className={activeLesson1 ? "OnlineTeachingLesson_videos_lessonShow_titleLesson cols" : "OnlineTeachingLesson_videos_lessonShow_titleLesson"}
                                   onClick={() => setActiveLesson1(true)}>
                                   <img src={Play} alt=""/>
                                   <span>Welcome to our journey</span>
                               </div>
                                <div
                                   className={!activeLesson1 ? "OnlineTeachingLesson_videos_lessonShow_titleLesson cols" : "OnlineTeachingLesson_videos_lessonShow_titleLesson"}
                                   onClick={() => setActiveLesson1(false)}>
                                   <img src={Play} alt=""/>
                                   <span>Welcome to our journey</span>
                               </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className="OnlineTeachingLesson_videos_lessonShow_ones">01. Введение</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                               <div
                                   className={activeLesson1 ? "OnlineTeachingLesson_videos_lessonShow_titleLesson cols" : "OnlineTeachingLesson_videos_lessonShow_titleLesson"}
                                   onClick={() => setActiveLesson1(true)}>
                                   <img src={Play} alt=""/>
                                   <span>Welcome to our journey</span>
                               </div>
                                <div
                                   className={!activeLesson1 ? "OnlineTeachingLesson_videos_lessonShow_titleLesson cols" : "OnlineTeachingLesson_videos_lessonShow_titleLesson"}
                                   onClick={() => setActiveLesson1(false)}>
                                   <img src={Play} alt=""/>
                                   <span>Welcome to our journey</span>
                               </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className="OnlineTeachingLesson_videos_lessonShow_ones">01. Введение</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                               <div
                                   className={activeLesson1 ? "OnlineTeachingLesson_videos_lessonShow_titleLesson cols" : "OnlineTeachingLesson_videos_lessonShow_titleLesson"}
                                   onClick={() => setActiveLesson1(true)}>
                                   <img src={Play} alt=""/>
                                   <span>Welcome to our journey</span>
                               </div>
                                <div
                                   className={!activeLesson1 ? "OnlineTeachingLesson_videos_lessonShow_titleLesson cols" : "OnlineTeachingLesson_videos_lessonShow_titleLesson"}
                                   onClick={() => setActiveLesson1(false)}>
                                   <img src={Play} alt=""/>
                                   <span>Welcome to our journey</span>
                               </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </div>
                <div className="OnlineTeachingLesson_videos_lessonShowVideos">Murod</div>
            </div>
        </div>
    );
}

export default OnlineTeachingLesson;