import React from 'react'
import { Link } from 'react-router-dom'
import { dataCoun } from './data'
import "./associations.scss"

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Associations = () => {
    const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='associations'>
        <div className="associations__container container">
            <div className="associations__inner">
                <h2 className="associations__title">Birlashmalar</h2>
                <ul className="associations__accordions">
                {
                    dataCoun.map(el => (
                        <Accordion 
                        variant="li" component="li"
                        className={`associations__accordion`} 
                        expanded={expanded === el.panel} 
                        style={{margin: expanded === el.panel && 0,boxShadow:"transparent",padding:"0"}} 
                        onChange={handleChange(el.panel)}
                        key={el.id}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{color: el.panel === expanded ? "#065EA9" : ""}}/>}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                                className='associations__accordion_header'
                                >

                                <Typography
                                variant="span" component="span"
                                className='associations__accordion_header--span' 
                                sx={{flexShrink: 0 }}
                                style={{color: el.panel === expanded ? "#065EA9" : ""}}
                                >
                                    {el.title}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <ul className='associations__accordion_body'>
                                    <li className="associations__accordion_item">
                                        1. Qirgʼiziston-Oʼzbekiston doʼstlik <Link className='associations__accordion_item--link' to="/compatriots/public-associations/use-uzbekistan">jamiyati</Link>
                                    </li>
                                    <li className="associations__accordion_item">
                                        2.Qirg‘iziston Respublikasi o‘zbek milliy madaniyat <Link className='associations__accordion_item--link' to="/">markazi</Link>
                                    </li>
                                    <li className="associations__accordion_item">
                                        4. Botken viloyati Leylek tumanidagi o‘zbek milliy madaniyat <Link className='associations__accordion_item--link' to="/">markazi</Link>
                                    </li>
                                    <li className="associations__accordion_item">
                                        1. Qirgʼiziston-Oʼzbekiston doʼstlik <Link className='associations__accordion_item--link' to="/">jamiyati</Link>
                                    </li>
                                    <li className="associations__accordion_item">
                                        5. O‘sh shahar o‘zbek milliy markazi” jamoat birlashmasi
                                    </li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Associations