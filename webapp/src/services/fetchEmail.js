import {
    getSolidDataset,
    getThing,
    getUrl
} from "@inrupt/solid-client";

import { VCARD } from "@inrupt/vocab-common-rdf";

let emails = new Map();

export async function fetchEmail(webId) {
    if(emails.get(webId)) {
        return emails.get(webId);
    }

    const myDataset = await getSolidDataset(webId.split("#me")[0]);
    const profile = getThing(myDataset, webId);
    const emailUrl = await getUrl(profile, VCARD.hasEmail);

    if (!emailUrl) {
        return null;
    }

    const emailDataset = await getSolidDataset(emailUrl);
    const emailThing = getThing(emailDataset, emailUrl);

    if (!emailThing) {
        return null;
    }

    var email = getUrl(emailThing, VCARD.value);
    if (email) {
        email = email.split("mailto:")[1];
        emails.set(webId, email);
    }
    return email;
}