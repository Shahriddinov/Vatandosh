import "./boardTrustees.scss";

import CouncilHero from "./components/council-hero/CouncilHero";
import CouncilComposition from "./components/council-composition/CouncilComposition";
import WhriteHeader from "../../component/Layout/WhriteHeader/WhriteHeader";
import { Spinner } from "../../component";
import { usePaginationFetching } from "./hooks/usePaginationFetfhing";

const BoardTrustees = () => {
  const { trusts, searchCount, handleFetching, trustsLoading } =
    usePaginationFetching();

  const heroData = {
    title: "Vasiylik kengashi",
    description:
      "Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish, vatandoshlar va ular tomonidan tuzilgan jamoat birlashmalarini qo‘llab-quvvatlash, turli sohalarda faoliyat yuritayotgan vatandoshlarimizning salohiyatini mamlakatimiz taraqqiyotiga samarali yo‘naltirish Fondning asosiy maqsadlaridan biri hisoblanadi.",
    pagePath: "Vasiylik kengashi",
  };

  if (trustsLoading) {
    return <Spinner position="full" />;
  }

  return (
    <div className="council-trustees">
      <div className="page-about">
        <WhriteHeader />
        <CouncilHero {...heroData} />
      </div>
      <CouncilComposition
        trusts={trusts}
        searchCount={searchCount}
        handleFetching={handleFetching}
      />
    </div>
  );
};

export default BoardTrustees;
