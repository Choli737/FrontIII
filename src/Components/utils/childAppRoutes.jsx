import { Navigate } from "react-router-dom"
import Contact from "../../Routes/Contact"
import Detail from "../../Routes/Detail"
import Favs from "../../Routes/Favs"
import Home from "../../Routes/Home"

export const childAppRoutes = [
    {
        index: true,
        element: (<Navigate to ="/home" replace = {true} />)
    },
    {
        path: "*",
        index: true,
        element: (<Navigate to ="/home" replace = {true} />)
    },
    {
        path: "home",
        element: <Home />
    },
    {
        path: "contact",
        element: <Contact />
    },
    {
        path: "favs",
        element: <Favs />
    },
    {
        path: "detail/:id",
        element: <Detail />
    }

]