import React from "react";
import ExpertTitle from "../../../expert/components/ExpertTitle/ExpertTitle";
import CustomProfil from "../../../components/CustomProfil/CustomProfil";

export default function VolunterProfile() {
  const url = [
    { title: "Asosiy", url: "#" },
    { title: "Volontyorlar", url: "#" },
    { title: "Xatamov Akbarjon O‘tkir o‘g‘li", url: "#" },
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
