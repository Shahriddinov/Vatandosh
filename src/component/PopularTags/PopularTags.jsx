import "./PopularTags.scss";

export default function PopularTags() {
  return (
    <div className="populartags">
      <h4 className="populartags-title">Mashhur taglar</h4>
      <div className="populartags-tags">
        {
          ["Italiya", "Yosh oila", "Kun fotosi", "Rossiya", "Vatandoshimiz bilan bir kun"].map((el, index) => {
            return <span key={index} className="populartags-tag">{el}</span>
          })
        }
      </div>
    </div>
  )
}
