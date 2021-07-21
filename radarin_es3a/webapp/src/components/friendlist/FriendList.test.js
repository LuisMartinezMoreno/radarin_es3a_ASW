import { cleanup } from "@testing-library/react";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";
import ReactDOM from "react-dom";

import FriendList from "./FriendList";


configure({adapter: new Adapter()});
describe("<FriendList />",() => {
    afterAll(cleanup);
    
    // Comprobaciones para "h1"
    // Renderiza el elemento "h1"
    it("Renders  \"h1\" element without crashing", () => {
        const editor = shallow(<FriendList />);
        expect(editor.find("h1").length).toEqual(1);
    });

    // Renderiza el texto dentro del "h1"
    it("Renders text of \"h1\" element", () => {
        const editor = shallow(<FriendList />);
        const expectedText = "Lista de amigos";
        const output = editor.find("h1").html();
        expect(output.indexOf(expectedText) > -1).toEqual(true);
    });


    // Comprobaciones para "div"
    // Ambos "div" se renderizan
    it("Renders \"div\" elements without crashing", () => {
        const editor = shallow(<FriendList />);
        expect(editor.find("div").length).toEqual(3); 
    });

});