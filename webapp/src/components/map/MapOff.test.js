import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import ReactDOM from "react-dom";
import MapOff from "./MapOff";
import { cleanup } from "@testing-library/react";

configure({ adapter: new Adapter() });
describe("<MapOff />", () => {
    afterAll(cleanup);

    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<MapOff />, div);
    });

});