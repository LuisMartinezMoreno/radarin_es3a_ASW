import {  cleanup } from "@testing-library/react";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";
import ReactDOM from "react-dom";
import Docs from "./Docs";


configure({adapter: new Adapter()});
describe("<Docs />",() => {

    afterAll(cleanup);

    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Docs />, div);
    });

    it('renders children when passed in', () => {
        const renderer  = ShallowRenderer.createRenderer();
        renderer.render(<Docs />);
        const result = renderer.getRenderOutput();
        expect(result.props.children[2].props.id == "footer");
      });

    // it("renders the message of the header h1", () => {
    //     const editor = shallow(<Docs />);
    //     const expectedOutput = "<h1><span class=\"image\"><img src=\"/static/media/LogoASW.163c5ac1.png\" alt=\"arc42\"></span> Radarin Es3a</h1>";
    //     const realOutput = editor.find("div.titleTest").html();
    //     console.log(realOutput);
    //     expect(realOutput.indexOf(expectedOutput)> -1).toEqual(true);
 
    // });

    
});