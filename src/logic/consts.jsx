import { SearchPage } from "../pages/SearchPage";

export const EVENTS={
    pushstate:"pushstate",
    popstate:"popstate"
}

export const ROUTES=[
    {
        path:"/search/:query",
        Component:SearchPage
    }
]
