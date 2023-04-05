import React from "react";
import ExpertTitle from "../../../expert/components/ExpertTitle/ExpertTitle";

export default function VolunterProfile() {
  const url = [
    { title: "Asosiy", url: "#" },
    { title: "Volontyorlar", url: "#" },
    { title: "Xatamov Akbarjon O‘tkir o‘g‘li", url: "#" },
  ];
  return (
    <main className="volunterprofile">
      <div className="container">
        <ExpertTitle title={"Volontyorlar"} url={url} />
      </div>
    </main>
  );
}
