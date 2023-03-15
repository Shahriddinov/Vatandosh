import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import { Layout, Spinner } from "./component";
import ScrollTop from "./hoc/ScrollTop";
import HomePage from "./pages/Portal/HomePage/HomePage";
import Register from "./pages/Registration/pages/Register/Register";
import { SignIn } from "./pages/Registration/pages/SignIn/SignIn";
import { SignUp } from "./pages/Registration/pages/SignUp/SignUp";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(()=> import("./pages/About"));
const BoardTrustees = lazy(()=> import("./pages/boardTrustees/BoardTrustees"));
const PublicAssociations = lazy(()=> import("./pages/compatriots"));
const StatesFriendshipSociety = lazy(()=> import("./pages/compatriots/statesFriendshipSociety/StatesFriendshipSociety"));
const Portal = lazy(() => import("./pages/Portal/HomePage/HomePage"));
const NotFound = lazy(() => import("./pages/404"));
const routes = [
    {path: "", element: Home,},
    {path: "/about", element: About},
    {path: "/about/council-trustees", element: BoardTrustees},
    {path: "/compatriots/public-associations", element: PublicAssociations},
    {path: "/compatriots/public-associations/:country", element: StatesFriendshipSociety},
    { path: "/portal", element: HomePage },
    { path: "/registration/register", element: Register },
    { path: "/registration/signup", element: SignUp },
    { path: "/registration/signin", element: SignIn },
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
