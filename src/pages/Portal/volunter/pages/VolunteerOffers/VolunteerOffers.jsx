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
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getVolunteerShowUser } from "../../../../../reduxToolkit/volunteer-user/volunteer-user";

export default function VolunteerOffers() {
  const { t } = useTranslation();
  const { expertData } = useExportOfferDetail();
  const { id } = useParams();
  const dispatch = useDispatch();
  const getOneVolunteer = useSelector(
    (state) => state.volunteerShowUserSlice.volunteerShowOneData
  );

  const { VolunteerCount } = useVolunteerHomeFetching();
  const dataCount = VolunteerCount.map((el) => el.users).flat();

  const url = [
    { title: t("expert.main"), url: "/portal-category/expert" },
    { title: "Volonyorlik faoliyat", url: "/portal-category/expert/offers" },
    { title: "Maqola", url: "" },
  ];

  const volunteerUser = expertData?.user_volunteer_activities?.find(
    (evt) => evt?.id === Number(id)
  );

  useEffect(() => {
    getVolunteerShowUser({ id });
  }, [dispatch]);

  console.log(getOneVolunteer);
  return (
    <main className="expertofferdetail">
      <div className="container">
        <ExpertTitle title="Maqola" url={url} />
        <div className="expertofferdetail-wrapper">
          <div className="expertofferdetail-main">
            <img
              src={`${PORTAL_IMAGE_URL}${volunteerUser?.images[0]}`}
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
              address={expertData?.user_profile?.international_address_id?.name}
              addressOne={
                expertData.user_profile?.international_location_id?.name
              }
              position={expertData?.user_profile?.job_position}
            />
            <p>{volunteerUser?.title}</p>
            <p>{volunteerUser?.description}</p>
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
