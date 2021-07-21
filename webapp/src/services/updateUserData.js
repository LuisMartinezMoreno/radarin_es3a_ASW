import solidAuth from "solid-auth-client";
import { updateLocation, updateToken } from "../api/api";

export async function saveUserToken(token) {
    const currentSession = await solidAuth.currentSession();
    if(!currentSession) {
        return null;
    }

    updateToken(currentSession.webId, token);
}

export async function saveUserLocation(location) {
    var session = await solidAuth.currentSession(); // Obtener sesión del usuario actual
    if(session) {
      // Guardar localización en base de datos
       await updateLocation(session.webId, location);
    }
    return null;
}

export async function removeUserToken() {
    const currentSession = await solidAuth.currentSession();
    if(!currentSession) {
        return null;
    }

    updateToken(currentSession.webId, "");
}

solidAuth.on("logout", (event) => removeUserToken());