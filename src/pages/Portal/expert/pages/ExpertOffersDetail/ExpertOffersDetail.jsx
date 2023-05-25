import { useTranslation } from "react-i18next";
import DefaultProfilePic from "../../../../../assets/images/mediateka/2.png";
import ShareFriends from "../../../../../component/ShareFriends/ShareFriends";
import ExpertTitle from "../../components/ExpertTitle/ExpertTitle";
import CouncilStatics from "../ExpertHome/components/Council/CouncilStatics";
import ExpertProfileInfo from "../ExpertOffers/components/ExpertProfileInfo";
import "./ExpertOffersDetail.scss";
import NotFound from "../../../../404";
import { Spinner } from "../../../../../component";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";
import { useExportOfferDetail } from "./hooks/useExpertOffersDetail";

export default function ExpertOffersDetail() {
  const { t } = useTranslation();
  const { expertData, expertLoading, error, expertCountLoading, expertCount } =
    useExportOfferDetail();

  const url = [
    { title: t("expert.main"), url: "/portal-category/expert" },
    { title: t("expert.offers"), url: "/portal-category/expert/offers" },
    { title: t("expert.offer"), url: "" },
  ];

  if (expertLoading || expertCountLoading) {
    return <Spinner position="full" />;
  } else if (error) {
    return <p>{error}</p>;
  } else if (!expertData) return <NotFound />;

  console.log(expertData);

  return (
    <main className="expertofferdetail">
      <div className="container">
        <ExpertTitle title={t("expert.offer")} url={url} />
        <div className="expertofferdetail-wrapper">
          <div className="expertofferdetail-main">
            <img
              src={`${PORTAL_IMAGE_URL}${expertData?.image}`}
              alt="error"
              className="expertofferdetail-pic"
            />
            <ExpertProfileInfo
              profileImg={
                PORTAL_IMAGE_URL + expertData?.user_profile?.avatar_url
              }
              name={expertData?.user_profile?.last_name}
              nameOne={expertData?.user_profile?.first_name}
              nameTwo={expertData?.user_profile?.second_name}
              address={expertData?.user_profile?.international_address_id.name}
              addressOne={
                expertData.user_profile.international_location_id.name
              }
              position={expertData?.user_profile?.job_position}
            />
            <p>{expertData?.suggestions}</p>
            <p>{expertData?.additional_information}</p>
            <ShareFriends />
          </div>
          <div className="expertofferdetail-actions">
            <CouncilStatics expertCount={expertCount} />
          </div>
        </div>
      </div>
    </main>
  );
}
