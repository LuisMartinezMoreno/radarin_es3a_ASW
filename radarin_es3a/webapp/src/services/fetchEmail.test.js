import { render, screen, cleanup } from "@testing-library/react";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { fetchEmail, replaceEmail } from "./fetchEmail";

// configure({ adapter: new Adapter() });
// describe("fetchEmail.js", () => {
//     afterAll(cleanup);

//     it("Comprobar que se devuelve el email correspondiente a un webID", () => {

//         expect(fetchEmail("https://uo264197.inrupt.net/profile/card#me")).toEqual("uo264197@uniovi.es");
//     });

// });

// test("Comprobar que se devuelve el email correspondiente a un webID", () => {
//     return fetchEmail("https://uo264197.inrupt.net/profile/card#me").then(data =>
//         expect(data).toBe("uo264197@uniovi.es"));
// });

test("Comprobar que no se devuelve el email correspondiente a un webID", () => {
    return fetchEmail("https://uo258273.inrupt.net/profile/card#me").then((data) =>
        expect(data).toBeNull());
});

// test("Reemplazar el email correspondiente a un webID", () => {
//     replaceEmail("https://uo264197.inrupt.net/profile/card#me");
//     return fetchEmail("https://uo264197.inrupt.net/profile/card#me").then(data =>
//         expect(data).toBe("uo264197@uniovi.es"));
// });