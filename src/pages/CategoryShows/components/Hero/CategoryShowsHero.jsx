import "./CategoryShowsHero.scss";
import { MdArrowRight } from "react-icons/md";

export default function CategoryShowsHero() {
  return (
    <div className='shows-hero'>
      <div className="container">
        <div className="shows-hero-desc">
          <div className="shows-hero-desc-url">
            <span>Asosiy sahifa</span>
            <MdArrowRight className="shows-hero-desc-url-arrow" />
            <span>Turkum ko'rsatuvlar</span>
          </div>
          <h1 className="shows-hero-desc-title">Turkum ko'rsatuvlar</h1>
          <p className="shows-hero-desc-text">Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish, </p>
        </div>
      </div>
    </div>
  )
}
