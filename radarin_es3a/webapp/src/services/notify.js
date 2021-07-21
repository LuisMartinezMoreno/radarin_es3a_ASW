import { fetchFriends } from "./fetchFriends";
import { fetchEmail } from "./fetchEmail";
import solidAuth from "solid-auth-client";
import { getUserByWebId, sendEmail, sendNotification } from "../api/api";
import { fetchName } from "./fetchProfile";
import { showNotification } from "../App";

let isMapNotAreadyAccessed = true;

export async function notifyOpenMap() {    
    if(!isMapNotAreadyAccessed) {
        return;
    }

    const currentSession = await solidAuth.currentSession();
    if(!currentSession) {
        return;
    }
    let name;
    let friends;
    try{
        name = await fetchName(currentSession.webId);
        friends = await fetchFriends();
    } catch(err){ return;}
  
    for(let index in friends) {
        if(friends[index]) {
            let friendName = await fetchName(friends[index]);
            let message = "Hola " + friendName + ", ¡Tu amig@ " + name + " se acaba de conectar a Radarin_es3a!";
        
            let friendEmail = await fetchEmail(friends[index]);
            if(friendEmail) {    
                sendEmail("Radarin_es3a", 
                            message,
                            friendEmail);
            }

            let friend = await getUserByWebId(friends[index]);
            if(friend && friend.token) {
                sendNotification("Radarin_es3a", message, friend.token);
            }
        }
    }

    isMapNotAreadyAccessed = false;
}

export function notifyNearbyFriend(friendWebId) {
    solidAuth.currentSession().then((session) => {
        if(!session) {
            return;
        }
        fetchName(friendWebId).then((friendName) => {
            showNotification({ 
                "title": "¡Estás cerca de un amigo!",
                "body": "Tu amig@ " + friendName + " está cerca de ti"});
        });
    });
}