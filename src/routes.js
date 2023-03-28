import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout, Spinner } from "./component";
import ScrollTop from "./hoc/ScrollTop";
import CategoryShows from "./pages/CategoryShows/CategoryShows";
import Contact from "./pages/Contact/Contact";
import ExpertCouncil from "./pages/Expert/ExpertCouncil";
import NewsDetail from "./pages/NewsDetail/NewsDetail";
import ChangePassword from "./pages/Registration/pages/ChangePassword/ChangePassword";
import RecoveryPassword from "./pages/Registration/pages/RecoveryPassword/RecoveryPassword";
import Register from "./pages/Registration/pages/Register/Register";
import { SignIn } from "./pages/Registration/pages/SignIn/SignIn";
import { SignUp } from "./pages/Registration/pages/SignUp/SignUp";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const BoardTrustees = lazy(() => import("./pages/boardTrustees/BoardTrustees"));
const PublicAssociations = lazy(() => import("./pages/compatriots"));
const StatesFriendshipSociety = lazy(() =>
  import("./pages/compatriots/statesFriendshipSociety/StatesFriendshipSociety")
);
const Portal = lazy(() => import("./pages/Portal/HomePage/HomePage"));
const PublicAssociationEvents = lazy(() =>
  import("./pages/PublicAssociationEvents/PublicAssociationEvents")
);
const Projects = lazy(() => import("./pages/Projects"));
const InformationServices = lazy(() =>
  import("./pages/InformationServices/InformationServices")
);
const NotFound = lazy(() => import("./pages/404"));
const Flags = lazy(() => import("./pages/Symbols/Flag"));
const Anthem = lazy(() => import("./pages/Symbols/Anthem"));
const Coat = lazy(() => import("./pages/Symbols/Coat"));
const routes = [
  { path: "", element: Home },
  { path: "/about", element: About },
  { path: "/about/council-trustees", element: BoardTrustees },
  { path: "/compatriots/public-associations", element: PublicAssociations },
  {
    path: "/compatriots/public-associations/:country",
    element: StatesFriendshipSociety
  },
  { path: "/portal", element: Portal },
  { path: "/registration/register", element: Register },
  { path: "/registration/signup", element: SignUp },
  { path: "/registration/signin", element: SignIn },
  { path: "/registration/recovery-password", element: RecoveryPassword },
  { path: "/registration/change-password", element: ChangePassword },
  { path: "/category-shows", element: CategoryShows },
  {
    path: "/compatriots/public-association-events",
    element: PublicAssociationEvents
  },
  { path: "/information-service/news", element: InformationServices },
  { path: "/news-detail/:id", element: NewsDetail },
  { path: "/projects", element: Projects },
  { path: "/contact", element: Contact },
  { path: "/flag", element: Flags },
  { path: "/anthem", element: Anthem },
  { path: "/coat", element: Coat },
  {path:"/expert", element:ExpertCouncil}
];

const RoutesContainer = () => (
  <Router>
    <Layout>
      <Suspense fallback={<Spinner position="full" />}>
        <Routes>
          {routes.map((route, key) => {
            const RouteComponent = ScrollTop(route.element);
            return (
              <Route key={key} path={route.path} element={<RouteComponent />} />
            );
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  </Router>
);

export default RoutesContainer;
