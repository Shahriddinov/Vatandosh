import ExpertTitle from "../../components/ExpertTitle/ExpertTitle";
import "./ExpertProfil.scss";
import CustomProfil from "../../../components/CustomProfil/CustomProfil";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ExpertProfil() {
  const { t } = useTranslation();
  const { id } = useParams();
  const { expert: expertData } = useSelector((state) => state.expertSlice);
  const url = [
    {
      title: t("expert.main"),
      titleOne: "",
      titleTwo: "",
      url: "/portal-category/expert",
    },
    {
      title: t("expert.expertCouncil"),
      titleOne: "",
      titleTwo: "",
      url: "/portal-category/expert/expert-council",
    },
    {
      title: expertData?.user_profile?.last_name,
      titleOne: expertData?.user_profile?.first_name,
      titleTwo: expertData?.user_profile?.second_name,
      url: `/portal-category/expert/profile/${id}`,
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
