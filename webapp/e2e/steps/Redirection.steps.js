const { defineFeature, loadFeature } = require("jest-cucumber");
const feature = loadFeature("./features/Redirection.feature");

defineFeature(feature, test => {
    beforeAll(async () => {
        await global.page.goto("https://radarines3awebapp.herokuapp.com");
    });


    test("A not logged in user which knows the urls, tries to access the friend-list view", ({ given, when, then }) => {

        let email;
        let username;
        let webId;
        let password;

        given("A not logged in user", () => {
            password = "El_admin_necesita_1_pod";
            email = "radarines3a@gmail.com";
            username = "e2etest";
            webId = "https://e2e_test.inrupt.net/profile/card#me";
        });

        when("Tries to access the URL", async () => {
            await page.goto("https://radarines3awebapp.herokuapp.com/friend-list");
        });
        then("The user meets the welcome page", async () => {
            await expect(page).toMatch("Bienvenidos a Radarin");
        });
    });
});