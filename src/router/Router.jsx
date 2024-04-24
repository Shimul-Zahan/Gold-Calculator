import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import Work from "../pages/Work/Work"
import FAQ from "../pages/FAQ/FAQ"
import Adress from "../pages/Adress/Adress"

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
        ]
    }
])

export default Router