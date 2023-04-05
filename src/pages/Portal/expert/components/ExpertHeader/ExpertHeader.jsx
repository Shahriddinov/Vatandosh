import React from "react";
import Navbar from "../Navbar/Navbar";
import Nav from "../Nav/Nav";

export default function ExpertHeader({ navData }) {
  return (
    <header>
      <Navbar />
      <Nav navData={navData} />
    </header>
  );
}
