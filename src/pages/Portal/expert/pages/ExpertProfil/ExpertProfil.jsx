import ExpertTitle from "../../components/ExpertTitle/ExpertTitle";
import "./ExpertProfil.scss";
import CustomProfil from "../../../components/CustomProfil/CustomProfil";
import { useTranslation } from "react-i18next";

export default function ExpertProfil() {
  const { t } = useTranslation();
  const url = [
    { title: t("expert.main"), url: "/expert" },
    { title: t("expert.expertCouncil"), url: "/portal/expert-profil" },
    { title: "Xatamov Akbarjon O‘tkir o‘g‘li", url: "/portal/expert-profil" },
  ];

  return (
    <main className="expertprofil">
      <div className="container">
        <ExpertTitle title={t("expert.compatriot")} url={url} />
        <CustomProfil />
      </div>
    </main>
  );
}
