import {describe, it, expect, beforeEach} from "vitest";
import {render, screen} from "@testing-library/react";
import {Router} from "./src/components/Router"
import { cleanup } from "@testing-library/react";

describe("Router", ()=>{
    beforeEach(()=>{
        cleanup();
    })
    it("should work without problems", ()=>{
        render(<Router routes={[]}/>)
        expect(true).toBeTruthy()
    })
    it("should render 404 if no routes match", ()=>{
        render(<Router routes={[]} defaultComponent={()=><h1>404</h1>}></Router>)
        expect(screen.getByText("404")).toBeTruthy();
    })
    it("should render the component of the first route that matches", ()=>{
        const routes = [
            {
                path: "/",
                Component:()=><h1>Home</h1>
            },
                        {
                path: "/about",
                Component:()=><h1>About</h1>
            }
        ]
        render(<Router routes={routes}></Router>)
        expect(screen.getByText("Home")).toBeTruthy();
    })
})