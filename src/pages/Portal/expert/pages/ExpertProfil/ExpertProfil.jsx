import ExpertTitle from "../../components/ExpertTitle/ExpertTitle";
import "./ExpertProfil.scss";
import CustomProfil from "../../../components/CustomProfil/CustomProfil";

export default function ExpertProfil() {
  const url = [
    { title: "Asosiy", url: "/expert" },
    { title: "Ekspertlar kengashi", url: "/portal/expert-profil" },
    { title: "Xatamov Akbarjon O‘tkir o‘g‘li", url: "/portal/expert-profil" },
  ];

  return (
    <main className="expertprofil">
      <div className="container">
        <ExpertTitle title={"Vatandoshimiz"} url={url} />
        <CustomProfil />
      </div>
    </main>
  );
}
