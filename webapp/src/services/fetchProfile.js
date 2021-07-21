import { VCARD } from "@inrupt/vocab-common-rdf";
import { foaf } from "rdf-namespaces";
import solidAuth from "solid-auth-client";
import { fetchDocument } from "tripledoc";
import {
  getSolidDataset,
  getThing,
  getUrl
} from "@inrupt/solid-client";

let profile;
let names = new Map();
let photos = new Map();

export async function fetchProfile () {
    if(profile) {
      return profile;
    }
    
    const currentSession = await solidAuth.currentSession();
    if (!currentSession) {
      return null;
    }
  
    const webIdDoc = await fetchDocument(currentSession.webId);
    profile = webIdDoc.getSubject(currentSession.webId);
    return profile;
}

export async function fetchName(webId) {
  if(!webId) {
    return null;
  }

  if(names.get(webId)) {
    return names.get(webId);
  }

  const webIdDoc = await fetchDocument(webId);
  const profile = webIdDoc.getSubject(webId);

  const name = await profile.getString(foaf.name);
  names.set(webId, name);
  return name;
}

export async function fetchPhoto(webId) {
  if(!webId) {
    return null;
  }

  if(photos.get(webId)) {
    return photos.get(webId);
  }

  var myDataset = await getSolidDataset(webId.split("#me")[0]);
  const profile = getThing(myDataset, webId);

  const photo = await getUrl(profile, VCARD.hasPhoto);
  photos.set(webId, photo);
  return photo;
}