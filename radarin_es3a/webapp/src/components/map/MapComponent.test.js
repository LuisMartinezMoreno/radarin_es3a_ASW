import {cleanup , render } from "@testing-library/react";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import MapComponent from "./MapComponent";

describe("<MapComponent />",() => {
    afterAll(cleanup);
    let mapRef = React.createRef();

    it("renders without crashing", () => {
        expect(mapRef).toBeTruthy();
    });
});

configure({adapter: new Adapter()});
describe("<MapComponent />",() => {
    afterAll(cleanup);
    it("Renders MapComponent element without crashing", () => {
        const editor = shallow(<MapComponent/>);
        expect(editor.find("div").length).toEqual(0);
    });
});

it("App renders without crashing", () => {
        
        const { container } = render(<MapComponent />);
        expect(container).toBeTruthy();
      });