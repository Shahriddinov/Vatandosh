import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Layout, Spinner } from "./component";
import ScrollTop from "./hoc/ScrollTop";
import ExpertLayout from "./pages/Portal/expert/ExpertLayout";
import ExpertEmploye from "./pages/Portal/expert/pages/ExpertEmploye/ExpertEmploye";
import ExpertCouncil from "./pages/Portal/expert/pages/ExpertHome/ExpertCouncil";
import VolunterCouncilAbout from "./pages/Portal/volunter/pages/VolunterCouncilAbout/VolunterCouncilAbout";
import VolunterAbout from "./pages/Portal/volunter/pages/VolunterAbout/VolunterAbout";
import VictorinaHome from "./pages/Portal/victorina/pages/VictorinaHome/VictorinaHome";
import VictorinaLayout from "./pages/Portal/victorina/pages/VictorinaLayout";
import { useDispatch, useSelector } from "react-redux";
import WebinarLayout from "./pages/Portal/webinar/WebinarLayout";
import WebinarHome from "./pages/Portal/webinar/pages/WebinarHome/WebinarHome";
import WebinarAbout from "./pages/Portal/webinar/pages/WebinarAbout/WebinarAbout";
import WebinarEvents from "./pages/Portal/webinar/pages/WebinarEvents/WebinarEvents";
import FAQ from "./pages/Faq/Faq";
import VictorinaWinnerWin from "./pages/Portal/victorina/components/VictorinaWinner/VictorinaWinner";
import VolunteerOffers from "./pages/Portal/volunter/pages/VolunteerOffers/VolunteerOffers";
import { getItem } from "./helpers/persistanceStorage";
import { useEffect } from "react";
import { removeToken } from "./reduxToolkit/authSlice/authSlice";

const Home = lazy(() => import("./pages/Home"));
const MapNews = lazy(() => import("./pages/mapNews/MapNews"));
const MapNewsDetail = lazy(() => import("./pages/mapNews/MapNews"));
const OneNewsDetail = lazy(() => import("./pages/oneNewsDetail/OneNewsDetail"));
//
const About = lazy(() =>
  import(
    /*webpackChunkName: Home*/
    /*webpackPrefetch: true */
    /*webpackPreload: true */
    "./pages/About"
  )
);
const SinglePage = lazy(() =>
  import(
    /*webpackChunkName: SinglePage*/
    /*webpackPrefetch: true */
    /*webpackPreload: true */
    "./pages/singlePage/SinglePage"
  )
);
const BoardTrustees = lazy(() => import("./pages/boardTrustees/BoardTrustees"));
const PublicAssociations = lazy(() => import("./pages/compatriots"));
const StatesFriendshipSociety = lazy(() =>
  import("./pages/compatriots/statesFriendshipSociety/StatesFriendshipSociety")
);
const Portal = lazy(() =>
  import(
    /*webpackChunkName: Portal*/
    /*webpackPrefetch: true */
    /*webpackPreload: true */
    "./pages/Portal/Portal"
  )
);
const Projects = lazy(() => import("./pages/Projects"));
const InformationServices = lazy(() =>
  import("./pages/InformationServices/InformationServices")
);
const Mediateka = lazy(() =>
  import(
    /*webpackChunkName: Media*/
    /*webpackPrefetch: true */
    /*webpackPreload: true */
    "./pages/Mediateka/Mediateka"
  )
);
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
const SetPassword = lazy(() =>
  import("./pages/Registration/pages/SetPassword/SetPassword")
);
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
const ExpertActivityDetail = lazy(() =>
  import(
    "./pages/Portal/expert/pages/expertActivityDerail/ExpertActivityDerail"
  )
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
  import(
    /*webpackChunkName: CommunityAssociationLayout*/
    /*webpackPrefetch: true */
    /*webpackPreload: true */
    "./pages/Portal/communityAssociation/CommunityAssociationLayout"
  )
);

const CommunityAssociationHome = lazy(() =>
  import(
    /*webpackChunkName: CommunityAssociationHome*/
    /*webpackPrefetch: true */
    /*webpackPreload: true */
    "./pages/Portal/communityAssociation/pages/associationHome/AssociationHome"
  )
);

const CommunityAssociationEvents = lazy(() =>
  import(
    /*webpackChunkName: CommunityAssociationEvents*/
    /*webpackPrefetch: true */
    /*webpackPreload: true */
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

const ComunityEventsDetail = lazy(() =>
  import(
    "./pages/Portal/communityAssociation/pages/communityEventsDetail/ComunityEventsDetail"
  )
);

const CommunityNewsDetail = lazy(() =>
  import(
    "./pages/Portal/communityAssociation/pages/communityNewsDetail/CommunityNewsDetail"
  )
);

const CommunityAssociationDetail = lazy(() =>
  import(
    /*webpackChunkName: CommunityAssociationDetail*/
    /*webpackPrefetch: true */
    /*webpackPreload: true */
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

const LibraryLayout = lazy(() =>
  import("./pages/Portal/Library/LibraryLayout")
);

const LibraryAllBooks = lazy(() =>
  import("./pages/Portal/Library/pages/AllBooks/AllBooks")
);

const LibrarySearchBooks = lazy(() =>
  import("./pages/Portal/Library/pages/SearchBooks/SearchBooks")
);

const LibraryAboutBook = lazy(() =>
  import("./pages/Portal/Library/pages/AboutBook/AboutBook")
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

const VictorinaProjectTest = lazy(() =>
  import("./pages/Portal/victorina/components/VictorinaWinner/VictorinaWinner")
);

const VictorinaAbout = lazy(() =>
  import("./pages/Portal/victorina/pages/VictorinaAbout/VictorinaAbout")
);

const VictorinaFinish = lazy(() =>
  import("./pages/Portal/victorina/pages/VictorinaFinish/VictorinaFinish")
);

const MoreVictorina = lazy(() =>
  import("./pages/Portal/victorina/pages/MoreVictorina/MoreVictorina")
);
const AboutTeaching = lazy(() =>
  import("./pages/Portal/OnlineTeaching/pages/AboutTeaching/AboutTeaching")
);

const EmailVerify = lazy(() =>
  import("./pages/Registration/emailVerify/EmailVerify")
);

const SignInWithGoogle = lazy(() =>
  import("./pages/Registration/pages/SignInWithGoogle/SignInWithGoogle")
);

const SignInWithFacebook = lazy(() =>
  import("./pages/Registration/pages/SignInWithFacebook/SignInWithFacebook")
);

const ResetPassword = lazy(() =>
  import("./pages/Registration/resetPassword/ResetPassword")
);
const ElectronicJournalLayout = lazy(() =>
  import("./pages/Portal/electronicJournal/ElectronicJournalLayout")
);

const ElectronicJournalHome = lazy(() =>
  import(
    "./pages/Portal/electronicJournal/pages/electronicJournalHome/ElectronicJournalHome"
  )
);
const ElectronicJournalAbout = lazy(() =>
  import(
    "./pages/Portal/electronicJournal/pages/electronicJournalAbout/ElectronicJournalAbout"
  )
);

const NewNumber = lazy(() =>
  import("./pages/Portal/electronicJournal/pages/newNumber/NewNumber")
);

const ElectronArchive = lazy(() =>
  import("./pages/Portal/electronicJournal/pages/archive/Archive")
);

const ElectronicJournalContact = lazy(() =>
  import(
    "./pages/Portal/electronicJournal/pages/electronicJournalContact/ElectronicJournalContact"
  )
);

const WebinarRegister = lazy(() =>
  import("./pages/Portal/webinar/pages/WebinarRegister/WebinarRegister")
);

const OnlineWebinar = lazy(() =>
  import("./pages/Portal/webinar/pages/OnlineWebinar/OnlineWebinar")
);

const WebinarArchive = lazy(() =>
  import("./pages/Portal/webinar/pages/WebinarArchive/WebinarArchive")
);

const PortalNews = lazy(() => import("./pages/Portal/portalNews/PortalNews"));

const PassTheTest = lazy(() =>
  import("./pages/Portal/OnlineTeaching/pages/PassTheTest/PassTheTest")
);

const AboutUzbekistanLayout = lazy(() =>
  import("./pages/Portal/aboutUzbekistan/AboutUzbekistanLayout")
);

const AboutUzbekistanHome = lazy(() =>
  import(
    "./pages/Portal/aboutUzbekistan/pages/aboutUzbekistanHome/AboutUzbekistanHome"
  )
);

const AboutUzbekistanTouristFacilities = lazy(() =>
  import(
    "./pages/Portal/aboutUzbekistan/pages/touristFacilities/TouristFacilities"
  )
);

const AboutUzbekistanCity = lazy(() =>
  import("./pages/Portal/aboutUzbekistan/pages/city/City")
);

const VisualInformation = lazy(() =>
  import(
    "./pages/Portal/aboutUzbekistan/pages/visualInformation/VisualInformation"
  )
);

const CabinetLayout = lazy(() =>
  import("./pages/Portal/cabinet/CabinetLayout")
);

const CabinetHome = lazy(() =>
  import("./pages/Portal/cabinet/pages/cabinetHome/CabinetHome")
);

const PrivateInformation = lazy(() =>
  import("./pages/Portal/cabinet/pages/privateInformation/PrivateInformation")
);

const Volunteering = lazy(() =>
  import("./pages/Portal/cabinet/pages/volunteering/Volunteering")
);

const ExpertActivity = lazy(() =>
  import("./pages/Portal/cabinet/pages/expertActivity/ExpertActivity")
);

const Organizations = lazy(() =>
  import("./pages/Portal/cabinet/pages/organizations/Organizations")
);

const Quiz = lazy(() => import("./pages/Portal/cabinet/pages/quiz/Quiz"));

const Events = lazy(() => import("./pages/Portal/cabinet/pages/events/Events"));

const Certificates = lazy(() =>
  import("./pages/Portal/cabinet/pages/certificates/Certificates")
);

const Chat = lazy(() => import("./pages/Portal/cabinet/pages/chat/Chat"));

// Kabinet > private information > components for multistep form
const CommonInformation = lazy(() =>
  import(
    "./pages/Portal/cabinet/pages/privateInformation/components/commonInformation/CommonInformation"
  )
);
const Job = lazy(() =>
  import("./pages/Portal/cabinet/pages/privateInformation/components/job/Job")
);
const Education = lazy(() =>
  import(
    "./pages/Portal/cabinet/pages/privateInformation/components/education/Education"
  )
);
const ScientificActivity = lazy(() =>
  import(
    "./pages/Portal/cabinet/pages/privateInformation/components/scientificActivity/ScientificActivity"
  )
);
const Offer = lazy(() =>
  import(
    "./pages/Portal/cabinet/pages/privateInformation/components/offer/Offer"
  )
);
const VoluntaryActivity = lazy(() =>
  import(
    "./pages/Portal/cabinet/pages/privateInformation/components/voluntaryActivity/VoluntaryActivity"
  )
);

const ChoicesPublicAssociations = lazy(() =>
  import("./pages/choices/publicAssociations/PublicAssociations")
);
const ChoicesQuizzes = lazy(() => import("./pages/choices/quizzes/quizzes"));
const MoreDetail = lazy(() =>
  import("./pages/choices/quizzes/moreDetail/MoreDetail")
);

const routes = [
  { path: "", element: Home },
  { path: "/detail/:category/:type/:id", element: OneNewsDetail },
  { path: "/:page/:id", element: NewsDetail },
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
  {
    path: "/compatriots/public-association-events",
  },
  { path: "/country-news/:countryId", element: MapNews },
  { path: "/information-service/:pageName", element: InformationServices },
  { path: "/:page/id", element: NewsDetail },
  { path: "/projects", element: Projects },
  { path: "/contact", element: Contact },
  { path: "/faq", element: FAQ },
  { path: "/flag", element: Flags },
  { path: "/anthem", element: Anthem },
  { path: "/coat", element: Coat },
  { path: "/information-service/mediateka", element: Mediateka },
  { path: "/hashtag/:tag", element: Hashtag },
  { path: "/search/:search", element: SearchResult },
  { path: "/choices/quiz", element: ChoicesQuizzes },
  { path: "/choices/quiz/more-detail/:id", element: MoreDetail },
  { path: "/choices/public-associations", element: ChoicesPublicAssociations },
];

const RoutesContainer = () => {
  const token = useSelector((state) => state.authSlice.token);
  const userData = useSelector((state) => state.authSlice.userData);
  console.log(token);
  console.log(userData);

  return (
    <Router>
      <Layout>
        <Suspense fallback={<Spinner position="full" />}>
          <Routes>
            {routes.map((route, key) => {
              const RouteComponent = ScrollTop(route.element);
              return (
                <Route
                  key={key}
                  path={route.path}
                  element={<RouteComponent />}
                />
              );
            })}

            {token && userData ? (
              <>
                <Route
                  path="/portal-category/cabinet"
                  element={<CabinetLayout />}
                >
                  <Route index element={<Chat />} />
                  <Route
                    path="private-information"
                    element={<PrivateInformation />}
                  >
                    <Route
                      index
                      path="personal-information"
                      element={<CommonInformation />}
                    />
                    <Route path="job" element={<Job />} />
                    <Route path="education" element={<Education />} />
                    <Route
                      path="scientificActivity"
                      element={<ScientificActivity />}
                    />
                    <Route path="offer" element={<Offer />} />
                    <Route
                      path="voluntaryActivity"
                      element={<VoluntaryActivity />}
                    />
                  </Route>
                  <Route path="volunteering" element={<Volunteering />} />
                  <Route path="expert-activity" element={<ExpertActivity />} />
                  <Route path="organizations" element={<Organizations />} />
                  <Route path="quiz" element={<Quiz />} />
                  <Route path="events" element={<Events />} />
                  <Route path="certificates" element={<Certificates />} />
                  <Route path="chat" element={<Chat />} />
                </Route>

                <Route
                  path="/portal-category/expert"
                  element={<ExpertLayout />}
                >
                  <Route index element={<ExpertCouncil />} />
                  <Route path="council-about" element={<AboutCouncil />} />
                  <Route path="expert-council" element={<ExpertEmploye />} />
                  <Route path="profile/:id" element={<ExpertProfile />} />
                  <Route path="offers" element={<ExpertOffers />} />
                  <Route path="offers/:id" element={<ExpertOffersDetail />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="register" element={<ExpertRegister />} />
                  <Route path=":newsId" element={<PortalNews />} />
                  <Route
                    path="activity/:id"
                    element={<ExpertActivityDetail />}
                  />
                  <Route path="*" element={<NotFound />} />
                </Route>

                <Route
                  path="/portal-category/community-association"
                  element={<CommunityAssociationLayout />}
                >
                  <Route index element={<CommunityAssociationHome />} />
                  <Route path="about" element={<CommunityAssociationAbout />} />
                  <Route
                    path="country/:communityCountry"
                    element={<CommunityAssociationCountry />}
                  />
                  <Route path="associations" element={<Associations />} />
                  <Route
                    path="events"
                    element={<CommunityAssociationEvents />}
                  />
                  <Route
                    path="country/:communityCountry/:communityCountryId"
                    element={<CommunityAssociationDetail />}
                  />
                  <Route
                    path="application"
                    element={<CommunityAssociationRegister />}
                  />
                  <Route
                    path="event/:eventId"
                    element={<ComunityEventsDetail />}
                  />
                  <Route
                    path="news/:newsId"
                    element={<CommunityNewsDetail />}
                  />
                  <Route path="contact" element={<Contact />} />
                  <Route path=":newsId" element={<PortalNews />} />
                  <Route path="*" element={<NotFound />} />
                </Route>

                <Route
                  path="/portal-category/volunteer"
                  element={<VolunterLayout />}
                >
                  <Route index element={<VolunterHome />} />
                  <Route path="profile/:id" element={<VolunterProfile />} />
                  <Route path="register" element={<VolunterRegister />} />
                  <Route path="volunter-employe" element={<VolunterAbout />} />
                  <Route
                    path="council-about"
                    element={<VolunterCouncilAbout />}
                  />
                  <Route path="contact" element={<Contact />} />
                  <Route
                    path="article/:id"
                    element={<VolunterArticleDetail />}
                  />
                  <Route path="activity" element={<VolunterActivity />} />
                  <Route
                    path="activity/:id"
                    element={<VolunterActivityDetail />}
                  />
                  <Route path="offers/:id" element={<VolunteerOffers />} />
                  <Route path=":newsId" element={<PortalNews />} />
                </Route>

                <Route
                  path="/portal-category/webinar"
                  element={<WebinarLayout />}
                >
                  <Route index element={<WebinarHome />} />
                  <Route
                    path="webinar-register/:id"
                    element={<WebinarRegister />}
                  />
                  <Route
                    path="online-webinar/:id"
                    element={<OnlineWebinar />}
                  />
                  <Route path="webinar-about" element={<WebinarAbout />} />
                  <Route path="webinar-events" element={<WebinarEvents />} />
                  <Route path="webinar-archive" element={<WebinarArchive />} />
                  <Route path="webinar-contact" element={<Contact />} />
                  <Route path=":newsId" element={<PortalNews />} />
                </Route>

                {/*<Route*/}
                {/*  path="/portal-category/online-teaching"*/}
                {/*  element={<OnlineTeachingLayout />}*/}
                {/*>*/}
                {/*  <Route index element={<OnlineTeachingHome />} />*/}
                {/*  <Route path="about" element={<AboutTeaching />} />*/}
                {/*  <Route path="take-test" element={<PassTheTest />} />*/}
                {/*</Route>*/}

                <Route
                  path="/portal-category/library"
                  element={<LibraryLayout />}
                >
                  <Route index element={<LibraryAllBooks />} />
                  <Route path="search" element={<LibrarySearchBooks />} />
                  <Route path="about/:id" element={<LibraryAboutBook />} />
                </Route>

                <Route
                  path="/portal-category/victorina"
                  element={<VictorinaLayout />}
                >
                  <Route index element={<VictorinaHome />}></Route>
                  <Route path="contact" element={<Contact />} />
                  <Route path="listwinners" element={<ListOfWinners />} />
                  <Route path="winner/:id" element={<VictorinaWinner />} />
                  <Route
                    path="image-project/:id"
                    element={<VictorinaProject />}
                  />
                  <Route
                    path="victorina-finish"
                    element={<VictorinaFinish />}
                  />
                  <Route path="victorina-more" element={<MoreVictorina />} />
                  <Route path="about" element={<VictorinaAbout />} />
                  <Route path="projects" element={<MoreVictorina />} />
                  <Route
                    path="finished-projects"
                    element={<VictorinaFinish />}
                  />
                  <Route
                    path="victorinatest-finish"
                    element={<VictorinaWinnerWin />}
                  />
                  <Route
                    path="finished-projects/image-project/:id"
                    element={<VictorinaProject />}
                  />
                  <Route
                    path="image-project/:id/test"
                    element={<VictorinaProjectTest />}
                  />
                  <Route path=":newsId" element={<PortalNews />} />
                </Route>

                <Route
                  path="/portal-category/electronic-journal"
                  element={<ElectronicJournalLayout />}
                >
                  <Route index element={<ElectronicJournalHome />} />
                  <Route
                    path="about/:journalId"
                    element={<ElectronicJournalAbout />}
                  />
                  <Route path="new-number" element={<NewNumber />} />
                  <Route path="archive" element={<ElectronArchive />} />
                  <Route
                    path="contact"
                    element={<ElectronicJournalContact />}
                  />
                  <Route path="*" element={<NotFound />} />
                </Route>

                <Route
                  path="/portal-category/about-uzbekistan"
                  element={<AboutUzbekistanLayout />}
                >
                  <Route index element={<AboutUzbekistanHome />} />
                  <Route
                    path="visual-information"
                    element={<VisualInformation />}
                  />
                  <Route
                    path="tourist-facilities"
                    element={<AboutUzbekistanTouristFacilities />}
                  />
                  <Route
                    path="city/:idCity"
                    element={<AboutUzbekistanCity />}
                  />
                  <Route path="contact" element={<Contact />} />
                </Route>
                <Route
                  path="/registration/signin"
                  element={<Navigate to="/portal-category/cabinet" />}
                />
                <Route
                  path="/registration/register"
                  element={<Navigate to="/portal-category/cabinet" />}
                />
              </>
            ) : token ? (
              <>
                <Route path="/registration/register" element={<Register />} />
                <Route
                  path="/registration/set-password"
                  element={<Navigate to="/registration/register" />}
                />
                <Route
                  path="/registration/signup/api/redirect/google"
                  element={<Navigate to="/registration/register" />}
                />
                <Route
                  path="/registration/signup/api/redirect/facebook"
                  element={<Navigate to="/registration/register" />}
                />
                <Route
                  path="/registration/signin"
                  element={<Navigate to="/registration/register" />}
                />
              </>
            ) : (
              <>
                <Route path="/registration/signup" element={<SignUp />} />
                <Route path="/registration/signin" element={<SignIn />} />
                <Route
                  path="/registration/set-password"
                  element={<SetPassword />}
                />
                <Route
                  path="/registration/change-password"
                  element={<ChangePassword />}
                />
                <Route
                  path="/registration/recovery-password"
                  element={<RecoveryPassword />}
                />
                <Route
                  path="/registration/signup/api/reset/"
                  element={<ResetPassword />}
                />
                <Route
                  path="/registration/signup/api/verify/"
                  element={<EmailVerify />}
                />
                <Route
                  path="/registration/signup/api/redirect/google"
                  element={<SignInWithGoogle />}
                />
                <Route
                  path="/registration/signup/api/redirect/facebook"
                  element={<SignInWithFacebook />}
                />
                <Route
                  path="registration/register"
                  element={<Navigate to="/portal" />}
                />
                <Route
                  path="/portal-category/*"
                  element={<Navigate to="/portal" />}
                />
              </>
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default RoutesContainer;
