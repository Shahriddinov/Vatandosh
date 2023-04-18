import "./boardTrustees.scss";

import CouncilHero from "./components/council-hero/CouncilHero";
import CouncilComposition from "./components/council-composition/CouncilComposition";
import WhriteHeader from "../../component/Layout/WhriteHeader/WhriteHeader";
import { usePaginationFetching } from "./hooks/usePaginationFetfhing";
import { useTranslation } from "react-i18next";

const BoardTrustees = () => {
  const { trusts, searchCount, handleFetching, trustsLoading } =
    usePaginationFetching();
  const { t } = useTranslation();

  const heroData = {
    title: `${t("about_items.item2")}`,
    description: `${t("aboutPage.section1.ptext")}`,
    pagePath: `${t("about_items.item2")}`,
  };

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
        trustsLoading={trustsLoading}
      />
    </div>
  );
};

export default BoardTrustees;
