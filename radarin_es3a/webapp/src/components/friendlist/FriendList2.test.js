import { cleanup } from "@testing-library/react";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";
import ReactDOM from "react-dom";

import { fetchUsers } from "./FriendList";


test("should  fetchFriends return a null when no login user", () => {
    //return fetchUsers().then(data =>
    //    expect(data).toBeNull());
});