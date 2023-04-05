import "./CustomProfil.scss";
import DefaultProfilePic from "../../../../assets/images/mediateka/2.png";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, useLocation } from "react-router-dom";

export default function CustomProfil() {
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <div className="customprofil-wrapper">
      <div className="customprofil-detail">
        <div className="customprofil-detail-img">
          <img src={DefaultProfilePic} alt="error" />
        </div>
        <div className="customprofil-detail-desc">
          <h4>Xatamov Akbarjon O‘tkir o‘g‘li</h4>
          <div className="customprofil-detail-desc-workexp">
            <span>Umumiy ish staji:</span>
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
            <Typography>Oliy ma’lumoti</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="customprofil-list-otm">
                <div className="customprofil-list-otm-item">
                  <div className="customprofil-list-otm-desc">
                    <span>O‘zbekistonda tahsil olgan OTM</span>
                    <p>Toshkent moliya instituti</p>
                  </div>
                  <div className="customprofil-list-otm-desc">
                    <span>Fakultet</span>
                    <p>Moliya</p>
                  </div>
                  <div className="customprofil-list-otm-desc">
                    <span>Mutaxassisligi</span>
                    <p>Bank ishi</p>
                  </div>
                </div>
                <div className="customprofil-list-otm-item">
                  <div className="customprofil-list-otm-desc">
                    <span>Xorijda tahsil olgan OTM</span>
                    <p>American University of Sharjah</p>
                  </div>
                  <div className="customprofil-list-otm-desc">
                    <span>Xorijdagi fakultet</span>
                    <p>Bachelor of Business Administration</p>
                  </div>
                  <div className="customprofil-list-otm-desc">
                    <span>Xorijdagi mutaxassisligi</span>
                    <p>Administration</p>
                  </div>
                </div>
              </div>
              <div className="customprofil-list-otm">
                <div className="customprofil-list-otm-item">
                  <div className="customprofil-list-otm-desc">
                    <span>O‘zbekistonda tahsil olgan OTM</span>
                    <p>Toshkent moliya instituti</p>
                  </div>
                  <div className="customprofil-list-otm-desc">
                    <span>Fakultet</span>
                    <p>Moliya</p>
                  </div>
                  <div className="customprofil-list-otm-desc">
                    <span>Mutaxassisligi</span>
                    <p>Bank ishi</p>
                  </div>
                </div>
                <div className="customprofil-list-otm-item">
                  <div className="customprofil-list-otm-desc">
                    <span>Xorijda tahsil olgan OTM</span>
                    <p>American University of Sharjah</p>
                  </div>
                  <div className="customprofil-list-otm-desc">
                    <span>Xorijdagi fakultet</span>
                    <p>Bachelor of Business Administration</p>
                  </div>
                  <div className="customprofil-list-otm-desc">
                    <span>Xorijdagi mutaxassisligi</span>
                    <p>Administration</p>
                  </div>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Mehnat faoliyati</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="customprofil-list-workexp">
                <div className="customprofil-list-workexp-item">
                  <span>Ish joyi</span>
                  <p>Jupiter IT Service</p>
                </div>
                <div className="customprofil-list-workexp-item">
                  <span>Ish joyi joylashgan davlat</span>
                  <p>BAA</p>
                </div>
                <div className="customprofil-list-workexp-item">
                  <span>Ish joyi joylashgan davlatni mintaqasi </span>
                  <p>Nyu-York</p>
                </div>
                <div className="customprofil-list-workexp-item">
                  <span>Lavozimi</span>
                  <p>Boshqaruv raisi</p>
                </div>
                <div className="customprofil-list-workexp-item">
                  <span>Ish boshlagan yili</span>
                  <p>2014</p>
                </div>
                <div className="customprofil-list-workexp-item">
                  <span>Tamomlagan yili</span>
                  <p>2018</p>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Ilmiy faoliyati</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="customprofil-list-scientific">
                <div className="customprofil-list-scientific-item">
                  <span>Maqolasi</span>
                  <p>
                    Sovet Ittifoqi va Xitoy Xalq Respublikasi o‘z qo‘li ostidagi
                    yaponlarga nisbatan munosabatining qiyosiy tahlili. Maqola
                    havolasi
                  </p>
                </div>
                <div className="customprofil-list-scientific-item">
                  <span>Ilmiy maqola mavzusi</span>
                  <p>
                    “O‘zbekistonda yosh rahbar kadrlarning boshqaruv
                    salohiyatini yuksaltirish: Muammo va istiqbollar”
                    mavzusidagi ilmiy-amaliy ishi
                  </p>
                </div>
                <div className="customprofil-list-scientific-item">
                  <span>Chop etilgan jurnal nomi</span>
                  <p>
                    “O‘zbekistonda yosh rahbar kadrlarning boshqaruvsalohiyatini
                    yuksaltirish: Muammo va istiqbollar” ilmiy elektron jurnali
                  </p>
                </div>
                <div className="customprofil-list-scientific-printDate">
                  <div className="customprofil-list-scientific-printDate-item">
                    <span>Chop etilgan sana</span>
                    <p>28-noyabr 2018-yil</p>
                  </div>
                  <div className="customprofil-list-scientific-printDate-item">
                    <span>Ilmiy darajasi</span>
                    <p>Fan Doktori</p>
                  </div>
                </div>
                <div className="customprofil-list-scientific-tags">
                  <span>Asosiy ilmiy qiziqish yo‘nalishlari</span>
                  <div className="customprofil-list-scientific-tags-list">
                    <span>Global governance</span>
                    <span>International trade and development</span>
                    <span>Economic diplomacy</span>
                  </div>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Takliflari</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="customprofil-list-offer">
                <div className="customprofil-list-offer-info">
                  <div className="customprofil-list-offer-info-img">
                    <img src={DefaultProfilePic} alt="error" />
                  </div>
                  <div className="customprofil-list-offer-info-desc">
                    <span>Taklif</span>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker
                    </p>
                    <button className="customprofil-list-offer-info-desc-btn">
                      <Link to={"#"}>Batafsil</Link>
                    </button>
                  </div>
                </div>
                <div className="customprofil-list-offer-infoplus">
                  <span>Qo‘shimcha ma’lumotlar</span>
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
            </Typography>
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
              <Typography>
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
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker
                        </p>
                        <button className="customprofil-list-offer-info-desc-btn">
                          <Link to={"#"}>Batafsil</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
        )}
      </div>
    </div>
  );
}
