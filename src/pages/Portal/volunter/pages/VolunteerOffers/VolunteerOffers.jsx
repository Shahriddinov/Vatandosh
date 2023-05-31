import { useTranslation } from "react-i18next";
import DefaultProfilePic from "../../../../../assets/images/mediateka/2.png";
import NotFound from "../../../../404";
import { ShareFriends, Spinner } from "../../../../../component";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";
import { ExpertTitle } from "../../../expert/components";
import ExpertProfileInfo from "../../../expert/pages/ExpertOffers/components/ExpertProfileInfo";
import CouncilStatics from "../VolunterHome/components/Council/CouncilStatics";
import "./VolunteerOffers.scss";
import { useExportOfferDetail } from "../../../expert/pages/ExpertOffersDetail/hooks/useExpertOffersDetail";
import { useVolunteerHomeFetching } from "../VolunterHome/hooks/useVolunteerHomeFetching";

export default function VolunteerOffers() {
  const { t } = useTranslation();
  const { expertData } = useExportOfferDetail();

  const { VolunteerCount } = useVolunteerHomeFetching();
  const dataCount = VolunteerCount.map((el) => el.users).flat();

  const url = [
    { title: t("expert.main"), url: "/portal-category/expert" },
    { title: t("expert.offers"), url: "/portal-category/expert/offers" },
    { title: t("expert.offer"), url: "" },
  ];

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
            <CouncilStatics
              count={dataCount.length}
              VolunteerCount={VolunteerCount}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
