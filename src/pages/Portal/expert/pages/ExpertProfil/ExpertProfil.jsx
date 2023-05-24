import ExpertTitle from "../../components/ExpertTitle/ExpertTitle";
import "./ExpertProfil.scss";
import CustomProfil from "../../../components/CustomProfil/CustomProfil";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function ExpertProfil() {
  const { t } = useTranslation();
  const { expert: expertData } = useSelector((state) => state.expertSlice);
  const url = [
    { title: t("expert.main"), titleOne: "", titleTwo: "", url: "/expert" },
    {
      title: t("expert.expertCouncil"),
      titleOne: "",
      titleTwo: "",
      url: "/portal/expert-profil",
    },
    {
      title: expertData?.user_profile?.last_name,
      titleOne: expertData?.user_profile?.first_name,
      titleTwo: expertData?.user_profile?.second_name,
      url: "/portal/expert-profil",
    },
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
