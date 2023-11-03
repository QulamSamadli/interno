import ErrorPage from "../../Pages/ErorPage";
import Services from "../../Pages/Services";
import Blog from "../../Pages/Blog";
import Contact from "../../Pages/Contact";
import HomePage from "../../Pages/HomePage";
import Projects from "../../Pages/Projects";
import WorkPlanCardDetail from "../WorkPlanCardDetail";

export const myRoutes = [
  {
    id: 1,
    path: "/",
    element: <HomePage />,
    title: "Home",
  },
  {
    id: 2,
    path: "/services",
    element: <Services />,
    title: "Services",
  },
  {
    id: 3,
    path: "/projects",
    element: <Projects />,
    title: "Projects",
  },
  {
    id: 4,
    path: "/blog",
    element: <Blog />,
    title: "Blog",
  },
  {
    id: 5,
    path: "/contact",
    element: <Contact />,
    title: "Contact",
  },
  {
    id: 6,
    path: "*",
    element: <ErrorPage />,
  },
  {
    id: 7,
    path: "/WorkPlanCardDetail/:id",
    element: <WorkPlanCardDetail/>,
  },
];
