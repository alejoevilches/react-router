import {describe, it, expect} from "vitest";
import {render} from "@testing-library/react";
import {Router} from "./src/components/Router"

describe("Router", ()=>{
    it("should work", ()=>{
        render(<Router routes={[]}/>)
    })
})