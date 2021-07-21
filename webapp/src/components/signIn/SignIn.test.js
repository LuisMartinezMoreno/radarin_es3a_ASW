import SignIn from "./SignIn";
import { cleanup } from "@testing-library/react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";



configure({adapter: new Adapter()});
describe("<SignIn />",() => {
    afterAll(cleanup);

    // Comprobaciones para "h1"
    // Renderiza el elemento "h1"
    it("Renders h1 element without crashing", () => {
        const editor = shallow(<SignIn/>);
        expect(editor.find("div").length).toEqual(3);
    });
});
