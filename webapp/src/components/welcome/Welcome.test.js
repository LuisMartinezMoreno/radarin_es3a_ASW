import { render, screen, cleanup } from "@testing-library/react";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";
// import Input from "react-validation/build/input";

// import App from "./App";
import ReactDOM from "react-dom";
import Welcome from "./Welcome";


configure({adapter: new Adapter()});
describe("<Welcome />",() => {

    afterAll(cleanup);

    // it("renders without crashing", () => {
    //     const div = document.createElement("div");
    //     ReactDOM.render(<Welcome />, div);
    // });
    it("renders the welcome message header1", () => {
        const renderer  = ShallowRenderer.createRenderer();
        renderer.render(<Welcome />);
        const result = renderer.getRenderOutput();
        expect(result.type).toBe("div");

        // expect(result.props.children).toEqual([
        //     <span className="heading">Title</span>,
        //     <Subcomponent foo="bar" />
        //   ]);

        //----------------------
        // const editor = shallow(<Welcome />);
        // console.log(editor.find("h1").length);
        // expect(editor.find("h1").length).toEqual(1);


    });
    // it("renders an welcome div", () => {
    //     const editor = shallow(<Welcome />);
    //     expect(editor.find("div.welcome").length).toEqual(1);

    // });

    // it("renders the message of the welcome div", () => {
    //     const editor = shallow(<Welcome />);
    //     const expectedOutput = "<h1>Bienvenidos a Radarin</h1><p>En esta aplicacion podras localizar a tus amigos cercanos</p>";
    //     const realOutput = editor.find("div.welcome").html();
    //     expect(realOutput.indexOf(expectedOutput)> -1).toEqual(true);

    // });

    //----------------------------
    // it("renders an output area", () => {
    //     const editor = shallow(<Welcome />);
    //     const expectedOutput = "<div className='welcome'><h1>Bienvenidos a Radarin</h1><p>En esta aplicacion podras localizar a tus amigos cercanos</p></div>";
    //     const realOutput = editor.find("div.welcome").html();

    //     editor.setState({ value: ""});
    //     expect(realOutput.indexOf(expectedOutput)> -1).toEqual(true);
    //     console.log(realOutput.indexOf(expectedOutput));
    // });
});