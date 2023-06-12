import React from "react";
import ExpertTitle from "../../../expert/components/ExpertTitle/ExpertTitle";
import CustomProfil from "../../../components/CustomProfil/CustomProfil";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function VolunterProfile() {
  const { t } = useTranslation();
  const { expert: expertData } = useSelector((state) => state.expertSlice);
  const url = [
    {
      title: t("expert.main"),
      titleOne: "",
      titleTwo: "",
      url: "/portal-category/volunteer",
    },
    {
      title: "Volontyorlar",
      titleOne: "",
      titleTwo: "",
      url: "/portal-category/volunteer/volunter-employe",
    },
    {
      title: expertData?.user_profile?.last_name,
      titleOne: expertData?.user_profile?.first_name,
      titleTwo: expertData?.user_profile?.second_name,
      url: "#",
    },
  ];
  return (
    <main className="volunterprofile" style={{ padding: "30px 0 100px" }}>
      <div className="container">
        <ExpertTitle title={"Volontyorlar"} url={url} />
        <CustomProfil />
      </div>
    </main>
  );
}
