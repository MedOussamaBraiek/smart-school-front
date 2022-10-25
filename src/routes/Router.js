//router
import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Forums from "../views/Forums/AddForums.js";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const LoginPage = lazy(() => import("../views/Login.js"));
const RegisterPage = lazy(() => import("../views/Register.js"));
const UsersPage = lazy(() => import("../views/UsersPage.js"));
const CoursesPage = lazy(() => import("../views/CoursesPage.js"));
const ClassePage = lazy(() => import("../views/ClassePage.js"));
const ClubsPage = lazy(() => import("../views/ClubsPage.js"));
const EventsPage = lazy(() => import("../views/EventsPage.js"));
const ReclamationsPage = lazy(() => import("../views/ReclamationsPage.js"));
const ForumsPage = lazy(() => import("../views/Forums/ForumsPage.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const AddReclamation = lazy(() =>
  import("../views/Reclamation/ReclamationForm")
);
const AddForums = lazy(() => import("../views/Forums/AddForums"));
const UpdateForum = lazy(() => import("../views/Forums/UpdateForums"));
const UpdateReclamation = lazy(() =>
  import("../views/Reclamation/ReclamationUpdate")
);
const AddEvent = lazy(() => import("../views/Event/EventForm"));
const UpdateEvent = lazy(() => import("../views/Event/EventUpdate"));
/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },

      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/courses", exact: true, element: <CoursesPage /> },
      { path: "/classes", exact: true, element: <ClassePage /> },
      { path: "/forums", exact: true, element: <ForumsPage /> },
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
      { path: "/login", exact: true, element: <LoginPage /> },
      { path: "/register", exact: true, element: <RegisterPage /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
      { path: "/addReclamation", exact: true, element: <AddReclamation /> },
      { path: "/addForums", exact: true, element: <AddForums /> },
      { path: "/updateForum/:id", exact: true, element: <UpdateForum /> },
      {
        path: "/updateReclamation/:id",
        exact: true,
        element: <UpdateReclamation />,
      },
      { path: "/addEvent", exact: true, element: <AddEvent /> },
      {
        path: "/updateEvent/:id",
        exact: true,
        element: <UpdateEvent />,
      },
    ],
  },
];

export default ThemeRoutes;
