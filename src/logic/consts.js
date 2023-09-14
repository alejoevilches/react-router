import { About } from "../pages/About";
import { HomePage } from "../pages/home";

export const EVENTS={
    pushstate:"pushstate",
    popstate:"popstate"
}

export const ROUTES=[
    {
        path:"/",
        Component: HomePage
    },
    {
        path:"/about",
        Component:About
    }
]
