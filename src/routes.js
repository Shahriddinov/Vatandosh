import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout, Spinner } from "./component";
import ScrollTop from "./hoc/ScrollTop";
import ExpertLayout from "./pages/Portal/expert/ExpertLayout";
import ExpertEmploye from "./pages/Portal/expert/pages/ExpertEmploye/ExpertEmploye";
import ExpertCouncil from "./pages/Portal/expert/pages/ExpertHome/ExpertCouncil";
import VolunterCouncilAbout from "./pages/Portal/volunter/pages/VolunterCouncilAbout/VolunterCouncilAbout";
import VolunterAbout from "./pages/Portal/volunter/pages/VolunterAbout/VolunterAbout";
import VictorinaHome from "./pages/Portal/victorina/pages/VictorinaHome/VictorinaHome";
import VictorinaLayout from "./pages/Portal/victorina/pages/VictorinaLayout";
import VictorinaAbout from "./pages/Portal/victorina/pages/VictorinaAbout/VictorinaAbout";
import VictorinaFinish from "./pages/Portal/victorina/pages/VictorinaFinish/VictorinaFinish";
import MoreVictorina from "./pages/Portal/victorina/pages/MoreVictorina/MoreVictorina";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const SinglePage = lazy(() => import("./pages/singlePage/SinglePage"));
const BoardTrustees = lazy(() => import("./pages/boardTrustees/BoardTrustees"));
const PublicAssociations = lazy(() => import("./pages/compatriots"));
const StatesFriendshipSociety = lazy(() =>
  import("./pages/compatriots/statesFriendshipSociety/StatesFriendshipSociety")
);
const Portal = lazy(() => import("./pages/Portal/Portal"));
const Projects = lazy(() => import("./pages/Projects"));
const InformationServices = lazy(() =>
  import("./pages/InformationServices/InformationServices")
);
const Mediateka = lazy(() => import("./pages/Mediateka/Mediateka"));
const NotFound = lazy(() => import("./pages/404"));
const Flags = lazy(() => import("./pages/Symbols/Flag"));
const Anthem = lazy(() => import("./pages/Symbols/Anthem"));
const Coat = lazy(() => import("./pages/Symbols/Coat"));
const Direction = lazy(() =>
  import("./pages/About/component/Direction/BasicDirection")
);
const Management = lazy(() =>
  import("./pages/About/component/Management/Management")
);
const Hashtag = lazy(() => import("./pages/Hashtag/Hashtag"));
const ExpertProfile = lazy(() =>
  import("./pages/Portal/expert/pages/ExpertProfil/ExpertProfil")
);
const ExpertRegister = lazy(() =>
  import("./pages/Portal/expert/pages/ExpertRegister/ExpertRegister")
);
const NewsDetail = lazy(() => import("./pages/NewsDetail/NewsDetail"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const ChangePassword = lazy(() =>
  import("./pages/Registration/pages/ChangePassword/ChangePassword")
);
const RecoveryPassword = lazy(() =>
  import("./pages/Registration/pages/RecoveryPassword/RecoveryPassword")
);
const Register = lazy(() =>
  import("./pages/Registration/pages/Register/Register")
);
const ExpertOffers = lazy(() =>
  import("./pages/Portal/expert/pages/ExpertOffers/ExpertOffers")
);
const ExpertOffersDetail = lazy(() =>
  import("./pages/Portal/expert/pages/ExpertOffersDetail/ExpertOffersDetail")
);
const SignIn = lazy(() => import("./pages/Registration/pages/SignIn/SignIn"));
const SignUp = lazy(() => import("./pages/Registration/pages/SignUp/SignUp"));
const AboutCouncil = lazy(() =>
  import("./pages/Portal/expert/pages/AboutCouncil/AboutCouncil")
);

const VolunterHome = lazy(() =>
  import("./pages/Portal/volunter/pages/VolunterHome/VolunterHome")
);

const CommunityAssociationLayout = lazy(() =>
  import("./pages/Portal/communityAssociation/CommunityAssociationLayout")
);

const CommunityAssociationHome = lazy(() =>
  import(
    "./pages/Portal/communityAssociation/pages/associationHome/AssociationHome"
  )
);

const CommunityAssociations = lazy(() =>
  import("./pages/Portal/communityAssociation/pages/associations/Associations")
);

const CommunityAssociationEvents = lazy(() =>
  import(
    "./pages/Portal/communityAssociation/pages/associationsEvents/AssociationsEvents"
  )
);

const CommunityAssociationAbout = lazy(() =>
  import(
    "./pages/Portal/communityAssociation/pages/associationAbout/CommunityAssociationAbout"
  )
);

const CommunityAssociationCountry = lazy(() =>
  import("./pages/Portal/communityAssociation/pages/country/Country")
);

const CommunityAssociationRegister = lazy(() =>
  import(
    "./pages/Portal/communityAssociation/pages/communityAssociationRegister/CommunityAssociationRegister"
  )
);
const CommunityAssociationDetail = lazy(() =>
  import(
    "./pages/Portal/communityAssociation/pages/communityAssociationDetail/CommunityAssociationDetail"
  )
);
const Associations = lazy(() =>
  import("./pages/Portal/communityAssociation/pages/associations/Associations")
);

const VolunterLayout = lazy(() =>
  import("./pages/Portal/volunter/VolunterLayout")
);

const VolunterProfile = lazy(() =>
  import("./pages/Portal/volunter/pages/VolunterProfile/VolunterProfile")
);
const VolunterRegister = lazy(() =>
  import("./pages/Portal/volunter/pages/VolunterRegister/VolunterRegister")
);
const VolunterArticleDetail = lazy(() =>
  import(
    "./pages/Portal/volunter/pages/VolunterArticleDetail/VolunterArticleDetail"
  )
);
const VolunterActivityDetail = lazy(() =>
  import(
    "./pages/Portal/volunter/pages/VolunterActivityDetail/VolunterActivityDetail"
  )
);
const VolunterActivity = lazy(() =>
  import("./pages/Portal/volunter/pages/VolunterActivity/VolunterActivity")
);

const OnlineTeachingLayout = lazy(() =>
  import("./pages/Portal/OnlineTeaching/OnlineTeachingLayout")
);

const OnlineTeachingHome = lazy(() =>
  import(
    "./pages/Portal/OnlineTeaching/pages/OnlineTeachingHome/OnlineTeachingHome"
  )
);
const ListOfWinners = lazy(() =>
  import("./pages/Portal/victorina/pages/ListOfWinners/ListOfWinners")
);

const VictorinaWinner = lazy(() =>
  import("./pages/Portal/victorina/pages/VictorinaWinner/VictorinaWinner")
);

const SearchResult = lazy(() => import("./pages/searchResult/SearchResult"));

const VictorinaProject = lazy(() =>
  import("./pages/Portal/victorina/pages/VictorinaProject/VictorinaProject")
);

const routes = [
  { path: "", element: Home },
  { path: "/about", element: About },
  { path: "/about/direction", element: Direction },
  { path: "/about/management", element: Management },
  { path: "/about/council-trustees", element: BoardTrustees },
  { path: "/compatriots/:pageUrl", element: SinglePage },
  { path: "/projects/:pageUrl", element: SinglePage },
  { path: "/compatriots/public-associations", element: PublicAssociations },
  {
    path: "/compatriots/public-associations/:categoryId",
    element: StatesFriendshipSociety,
  },
  {
    path: "/compatriots/public-associations/:country",
    element: StatesFriendshipSociety,
  },
  { path: "/portal", element: Portal },
  { path: "/registration/register", element: Register },
  { path: "/registration/signup", element: SignUp },
  { path: "/registration/signin", element: SignIn },
  { path: "/registration/recovery-password", element: RecoveryPassword },
  { path: "/registration/change-password", element: ChangePassword },
  {
    path: "/compatriots/public-association-events",
  },
  { path: "/information-service/:pageName", element: InformationServices },
  { path: "/:page/:id", element: NewsDetail },
  { path: "/projects", element: Projects },
  { path: "/contact", element: Contact },
  { path: "/flag", element: Flags },
  { path: "/anthem", element: Anthem },
  { path: "/coat", element: Coat },
  { path: "/information-service/mediateka", element: Mediateka },
  { path: "/hashtag/:tag", element: Hashtag },
  { path: "/search/:search", element: SearchResult },
];

const RoutesContainer = () => (
  <Router>
    <Layout>
      <Routes>
        {routes.map((route, key) => {
          const RouteComponent = ScrollTop(route.element);
          return (
            <Route key={key} path={route.path} element={<RouteComponent />} />
          );
        })}
        <Route path="/portal-category/expert" element={<ExpertLayout />}>
          <Route index element={<ExpertCouncil />} />
          <Route path="council-about" element={<AboutCouncil />} />
          <Route path="expert-council" element={<ExpertEmploye />} />
          <Route path="profile/:id" element={<ExpertProfile />} />
          <Route path="offers" element={<ExpertOffers />} />
          <Route path="offers/:id" element={<ExpertOffersDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<ExpertRegister />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route
          path="/portal-category/community-association"
          element={<CommunityAssociationLayout />}
        >
          <Route index element={<CommunityAssociationHome />} />
          <Route path="about" element={<CommunityAssociationAbout />} />
          <Route
            path="country/:country"
            element={<CommunityAssociationCountry />}
          />
          <Route path="associations" element={<Associations />} />
          <Route path="events" element={<CommunityAssociationEvents />} />
          <Route
            path="country/:country/:id"
            element={<CommunityAssociationDetail />}
          />
          <Route
            path="application"
            element={<CommunityAssociationRegister />}
          />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/portal-category/volunteer" element={<VolunterLayout />}>
          <Route index element={<VolunterHome />} />
          <Route path="profile" element={<VolunterProfile />} />
          <Route path="register" element={<VolunterRegister />} />
          <Route path="volunter-employe" element={<VolunterAbout />} />
          <Route path="council-about" element={<VolunterCouncilAbout />} />
          <Route path="contact" element={<Contact />} />
          <Route path="article/:id" element={<VolunterArticleDetail />} />
          <Route path="activity" element={<VolunterActivity />} />
          <Route path="activity/:id" element={<VolunterActivityDetail />} />
        </Route>

        <Route
          path="/portal-category/online-teaching"
          element={<OnlineTeachingLayout />}
        >
          <Route index element={<OnlineTeachingHome />} />
        </Route>
        <Route path="/portal-category/victorina" element={<VictorinaLayout />}>
          <Route index element={<VictorinaHome />}></Route>
          <Route path="contact" element={<Contact />} />
          <Route path="listwinners" element={<ListOfWinners />} />
          <Route path="winner/:id" element={<VictorinaWinner />} />
          <Route path="image-project" element={<VictorinaProject />} />
          <Route path="youtube-project" element={<VictorinaProject />} />
          <Route path="poem-project" element={<VictorinaProject />} />
          <Route path="edu-branding" element={<VictorinaProject />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </Router>
);

export default RoutesContainer;
