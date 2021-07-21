import { render, screen, cleanup } from "@testing-library/react";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import AboutUs from "./AboutUs";
import ReactDOM from "react-dom";

configure({ adapter: new Adapter() });
describe("<AboutUs />", () => {
    afterAll(cleanup);

    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<AboutUs />, div);
    });

});