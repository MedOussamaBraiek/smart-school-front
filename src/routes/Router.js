import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const UsersPage = lazy(() => import("../views/UsersPage.js"));
const CoursesPage = lazy(() => import("../views/CoursesPage.js"));
const ClubsPage = lazy(() => import("../views/ClubsPage.js"));
const EventsPage = lazy(() => import("../views/EventsPage.js"));
const ReclamationsPage = lazy(() => import("../views/ReclamationsPage.js"));
const ForumsPage = lazy(() => import("../views/ForumsPage.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/courses", exact: true, element: <CoursesPage /> },
      { path: "/clubs", exact: true, element: <ClubsPage /> },
      { path: "/users", exact: true, element: <UsersPage /> },
      { path: "/forums", exact: true, element: <ForumsPage /> },
      { path: "/events", exact: true, element: <EventsPage /> },
      { path: "/reclamations", exact: true, element: <ReclamationsPage /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
