import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import Dashboard from "../layouts/dashboard/Dashboard";
import ErrorPage from "../pages/error/ErrorPage";
import DashboardPage from "../pages/dashboardPage/DashboardPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Registration />
            }
        ]
    },
    {
        path: '/dashboard',
        element:
            (
                <PrivateRoute>
                    <Dashboard />,

                </PrivateRoute>
            ),
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/dashboardpage",
                element:
                    <DashboardPage />

            }
        ]
    }

]);

export default router;