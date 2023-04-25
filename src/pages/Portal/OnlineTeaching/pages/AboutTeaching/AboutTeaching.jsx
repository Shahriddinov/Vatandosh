import React from "react";
import AboutTeachingHero from "../../components/AboutTeachingHero/AboutTeachingHero";
import "./aboutTeaching.scss";
import Done from "../../../../../assets/images/online-teaching/done.svg";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
function AboutTeaching(props) {
  return (
    <>
      <AboutTeachingHero />
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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                <StyledTableCell align="right">Calories</StyledTableCell>
                <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                  </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default AboutTeaching;
