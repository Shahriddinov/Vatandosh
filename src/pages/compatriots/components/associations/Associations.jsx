import React from 'react'
import { Link } from 'react-router-dom'
import { dataCoun } from './data'
import "./associations.scss"

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector } from 'react-redux';

const  Associations = ({data}) => {
    const [expanded, setExpanded] = React.useState("");
    const lng = useSelector(state => state.language.language)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className='associations'>
        <div className="associations__container container">
            <div className="associations__inner">
                <h2 className="associations__title">Birlashmalar</h2>
                <ul className="associations__accordions">
                {
                    data?.map(el => (
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
                                    {el[`country_${lng}`]}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <ul className='associations__accordion_body'>
                                    {
                                        el?.categories.map( (category,index) => (
                                            <li className="associations__accordion_item" key={category.id}>
                                                {index + 1}. {category[`title_${lng}`].split(" ").slice(0, category[`title_${lng}`].split(" ").length - 1).join(" ")}

                                                <Link className='associations__accordion_item--link' to={`/compatriots/public-associations/${category?.id}`}>
                                                    {" "} {category[`title_${lng}`].split(" ")[category[`title_${lng}`].split(" ").length - 1]}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Associations