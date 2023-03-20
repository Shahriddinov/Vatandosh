import { Link } from "react-router-dom";
import Header from "../../component/Layout/Header/Header";
import "./NewsDetail.scss";
import { MdArrowRight } from "react-icons/md";
import img from '../../assets/images/photo2.png';
import { LatestNews, PopularTags } from "../../component";

export default function NewsDetail() {
  return (
    <div className='newsdetail'>
      <Header />
      <div className="container">
        <div className="newsdetail-wrapper">
          <div className="newsdetail-tablet-tags"><PopularTags /></div>
          <div className="newsdetail-title">
            <h1 className="newsdetail-title-text">Kolumbiyada o‘tgan jahon chempionatida hamyurtimiz ilk medalni qo‘lga kiritdi</h1>
            <div className="newsdetail-title-url">
              <Link to="/">Asosiy sahifa</Link>
              <MdArrowRight />
              <Link to="/news">Yangiliklar</Link>
              <MdArrowRight />
              <span>batafsil</span>
            </div>
          </div>

          <div className="newsdetail-main">
            <div className="newsdetail-main-desc">
              <div className="newsdetail-main-desc-img">
                <img src={img} alt="" />
              </div>
              <div className="newsdetail-main-desc-texts">
                <p className="newsdetail-main-desc-texts-item">
                  TOSHKENT, 15-dekabr. /“Dunyo” IA/. Kolumbiyada og‘ir atletika bo‘yicha o‘tkazilgan jahon chempionatida 87 kilogramm vazn toifasida ishtirok etgan O‘zbekiston terma jamoasi a’zosi Tursunoy Jabborova kumush va bronza medallarini qo‘lga kiritdi, deb xabar bermoqda “Dunyo” axborot agentligi muxbiri.
                </p>
                <p className="newsdetail-main-desc-texts-item">TOSHKENT, 15-dekabr. /“Dunyo” IA/. Kolumbiyada og‘ir atletika bo‘yicha o‘tkazilgan jahon chempionatida 87 kilogramm vazn toifasida ishtirok etgan O‘zbekiston terma jamoasi a’zosi Tursunoy Jabborova kumush va bronza medallarini qo‘lga kiritdi, deb xabar bermoqda “Dunyo” axborot agentligi muxbiri.</p>
                <p className="newsdetail-main-desc-texts-item">Yoshligimda boshqa bolalar kabi sho‘h bo‘lmaganman. Ulg‘ayganim sari kishilar o‘rtasidagi munosabatlarning yaxshi-yomon taraflariga e’tibor berar, nega bu vaziyatda unaqa, bunaqa? – degan savollarni ota-onamga ko‘p berardim. Bolaligimdan tarix kitoblarini o‘qish va sayohat qilishni yaxshi ko‘rar edim. Bundan tashqari, siyosatga va ijtimoiy psixologiyaga juda katta qiziqishim bo‘lgan. Uyimizda doim siyosiy mavzularda suhbatlar ko‘p bo‘lardi. Oilaviy muhitim bu yo‘nalishlarga qiziqishimni yanada oshirgan. Davlatlar, bir guruh shaxslar o‘rtasidagi munosabatlar, davlatlarning rivojlanish yoki qulashini sabab va konuniyatlarini tushinish va anglashni istab, shu yo‘nalishni tanlaganman.</p>
                <p className="newsdetail-main-desc-texts-item">Ta’limning bakalavr bosqichini Toshkent davlat sharqshunoslik universitetining Jahon siyosati yunalishini tugatganman. Diplom ishim mavzusi Xitoy Xalk Respublikasi siyosatiga bag‘ishlangan.-Hozirda, Italiyaning Rim shahrida joylashgan Yevropaning eng katta, qadimgi va nufuzli oliy o‘quv yurtlaridan bo‘lgan “Sapienza University of Rome”da magistratura bosqichida “Rivojlanish va xalqaro hamkorlik”yo‘nalishida tahsil olmoqdaman.</p>
                <p className="newsdetail-main-desc-texts-item">Hamyurtimiz 112 kilogramm vazn toifasini ko‘tarishda ikkinchi o‘rinni egalladi.
                  Og’ir atletika bo'yicha Jahon kubogi natijalari: ayollar - 87 kg.
                  1. Solfrid Koanda (Norvegiya) - 260 (113 + 147) kg
                  2. Eylin Tikmatana (Avstraliya) – 249 kg (109+140) kg
                  3. Tursunoy Jabborova (O‘zbekiston) – 241 (112+129) kg</p>
              </div>

            </div>
            <div className="newsdetail-main-news-tags">
              <LatestNews />
              <div className="newsdetail-desktop-tags">
                <PopularTags />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
