import solidAuth from "solid-auth-client";
import { fetchName } from "../services/fetchProfile";
import { deleteFromDB, getUsers } from "../api/api";

export async function deleteUser(name) {
    const currentSession = await solidAuth.currentSession();
    if (!currentSession) {
        return null;
    }
    let users = await getUsers();
    for (let index in users) {
        if(index) {
            try {
                let user = await fetchName(users[index].webId);
                if ((user === name )) {
                deleteFromDB(users[index].webId);
                }
            } catch (error) {
                return;
            }
        }
    }
}