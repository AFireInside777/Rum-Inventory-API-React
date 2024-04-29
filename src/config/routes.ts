import Dashboard from '../pages/Dashboard.tsx'
import HomePage from '../pages/HomePage.tsx'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
      path: "",
      component: HomePage,
      name: "HomePage",
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
    },
];

export default routes