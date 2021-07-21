import {saveUserToken, saveUserLocation} from "./updateUserData";

const webIdofRaul= "https://error404usernamenotfound.inrupt.net/profile/card#me";

test("should  saveUserToken return a null when no login user", () => {
    return saveUserToken().then((data) =>
    expect(data).toBeNull());
});

test("should  saveUserLocation return a null when no login user", () => {
    return saveUserLocation().then((data) =>
    expect(data).toBeNull());
});
