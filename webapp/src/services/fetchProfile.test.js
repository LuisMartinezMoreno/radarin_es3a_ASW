import {fetchProfile,fetchName, fetchPhoto} from "./fetchProfile";

const webIdofRaul= "https://error404usernamenotfound.inrupt.net/profile/card#me";

test("should  fetchProfile return a null when no login user", () => {
    return fetchProfile().then((data) =>
    expect(data).toBeNull());
});

test("should fetchName return a null when webId", () => {
    return fetchName().then((data) =>
    expect(data).toBeNull());
});
test("should fetchName return a name", () => {
    return fetchName(webIdofRaul).then((data) =>
    expect(data).toBe("Raúl Mínguez Rodríguez"));
});

test("should fetchPhoto return a phone", () => {
    return fetchPhoto().then((data) =>
    expect(data).toBeNull());
});

test("should fetchPhoto return a photo", () => {
    return fetchPhoto(webIdofRaul).then((data) =>
    expect(data).not.toBeNull());
});