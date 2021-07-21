import { cleanup } from "@testing-library/react";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";
import ReactDOM from "react-dom";
import Admin from "./Admin";


configure({adapter: new Adapter()});
describe("<Admin />",() => {

    afterAll(cleanup);

    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Admin />, div);
    });

    it('renders children when passed in', () => {
        const renderer  = ShallowRenderer.createRenderer();
        renderer.render(<Admin />);
        const result = renderer.getRenderOutput();
        expect(result.props.children.props.className == "container adminContainer");
      });

    it("renders the message of the header h1", () => {
        const editor = shallow(<Admin />);
        const expectedOutput = "<h1 class=\"display-5 text-light\">Zona del Administrador</h1>";
        const realOutput = editor.find("div.adminContainer").html();
        expect(realOutput.indexOf(expectedOutput)> -1).toEqual(true);

    });

    
});