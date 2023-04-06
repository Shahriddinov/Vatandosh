import ExpertTitle from "../../../expert/components/ExpertTitle/ExpertTitle";
import "./VolunterActivityDetail.scss";

export default function VolunterActivityDetail() {
  const url = [
    { title: "Asosiy", url: "/portal-category/volunteer" },
    { title: "Volontyorlar ishlari", url: "#" },
  ];

  return (
    <main className="volunteractivitydetail">
      <div className="container">
        <ExpertTitle title={"Volontyorlarni faoliyati"} url={url} />
        <div className="volunteractivitydetail-main">
          <div className="volunteractivitydetail-main-detail"></div>
        </div>
      </div>
    </main>
  );
}
