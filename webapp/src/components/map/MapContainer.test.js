import MapContainer from "./MapContainer";
import { cleanup } from "@testing-library/react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";



configure({adapter: new Adapter()});
describe("<MapContainer />",() => {
    afterAll(cleanup);
    // Comprobaciones para "h1"
    // Renderiza el elemento "h1"
    it("Renders mapContainer element without crashing", () => {
        const editor = shallow(<MapContainer/>);
        expect(editor.find("div").length).toEqual(11);
    });
});
