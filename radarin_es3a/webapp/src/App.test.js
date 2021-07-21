import { render, cleanup } from "@testing-library/react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";

import App from "./App";
import ReactDOM from "react-dom";
afterAll(cleanup);
configure({adapter: new Adapter()});
describe("<App />",() => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<App />, div);
    });

    it("App renders without crashing", () => {
        
        const { container } = render(<App />);
        expect(container).toBeTruthy();
      });

});
// 




// test("<FriendList />", () => {
    // test("renders learn react link", () => {
    //     render(<App />);
    //     const linkElement = screen.getByText(/Source code/i);
    //     //"<button className="solid auth login">Log in</button>"
    //     expect(linkElement).toBeInTheDocument();
    // });

    // test("renders the friendlist list", () => {
    //     const editor = shallow(<FriendList />);
    //     const expectedOutput = "";
    //     const realOutput = editor.find("div.makeStyles-friend-7").html();

    // });
// });
