import { render, screen, cleanup } from "@testing-library/react";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Navbar from "./Navbar";

configure({ adapter: new Adapter() });
describe("<Navbar />", () => {
    afterAll(cleanup);


    it("renders without crashing", () => {
        const editor = shallow(<Navbar />);           
        const expectedOutput = "<p class=\"logoLetra logo navbar-brand\"><img class=\"imgLogo\" src=\"/navbarIcon.svg\" to=\"/\" alt=\"Radarin\"/>RADARIN</p>";
        const realOutput = editor.find("p").html();
        expect(realOutput.indexOf(expectedOutput)> -1).toEqual(true);
    });
});