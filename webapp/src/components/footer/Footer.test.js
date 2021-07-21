import { render, screen, cleanup } from "@testing-library/react";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";
import Footer from "./Footer";

configure({ adapter: new Adapter() });
describe("<Footer />", () => {
    afterAll(cleanup);


    it("renders without crashing", () => {
        const editor = shallow(<Footer />);
        expect(editor.find("footer.footerRad").length).toEqual(1);
    });


    it("renders text of the footer", () => {
        const editor = shallow(<Footer />);
        const expectedOutput = "<p>Proyecto creado para la asignatura de ASW de la Escuela de Ingenieria Informatica de Oviedo</p>";
        const realOutput = editor.find("footer.footerRad").html();
        expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true);
    });

});