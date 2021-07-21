import {fetchFriends} from "./fetchFriends";

const webIdofRaul= "https://error404usernamenotfound.inrupt.net/profile/card#me";

test("should  fetchFriends return a null when no login user", () => {
    return fetchFriends().then((data) =>
    expect(data).toBeNull());
});