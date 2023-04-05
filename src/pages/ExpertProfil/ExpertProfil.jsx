import "./ExpertProfil.scss";
import ExpertTitle from "../Portal/pages/Expert/components/ExpertTitle/ExpertTitle";
import CustomProfil from "./components/CustomProfil";

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
