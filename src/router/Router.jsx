import { createBrowserRouter } from "react-router-dom"
import Dashboard from "../components/Dashboard/Dashboard"
import TableFour from "../components/Dashboard/TableFour"
import TableThree from "../components/Dashboard/TableThree"
import TableTwo from "../components/Dashboard/TableTwo"
import MainLayout from "../layout/MainLayout"
import About from "../pages/About/About"
import Adress from "../pages/Adress/Adress"
import FAQ from "../pages/FAQ/FAQ"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import Work from "../pages/Work/Work"

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/work',
                element: <Work />
            },
            {
                path: '/faq',
                element: <FAQ />
            },
            {
                path: '/adress',
                element: <Adress />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/dashboard/tableTwo',
                element: <TableTwo/>
            },
            {
                path: '/dashboard/tableThree',
                element: <TableThree/>
            },
            {
                path: '/dashboard/tableFour',
                element: <TableFour/>
            },
        ]
    }
])

export default Router