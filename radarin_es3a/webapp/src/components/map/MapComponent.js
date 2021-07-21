import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, InfoWindow} from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import Markers, { updateUserMarker } from "./Markers";
import credentials from "./credentials";
import { updateLocation } from "../../api/api";
import solidAuth from "solid-auth-client";
import "./MapComponent.css";
import { notifyOpenMap } from "../../services/notify";

//-------------------------------------------------\
var latitude;
var longitude;

var watchId;
var actualPosition;

const mapContainerStyle = {
  width: "100%",
  height: "80vh",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  minZoom: 10,
  maxZoom: 20,
};

var preferredZoom = 15;
var showWindow;

export function setUser(user){ showWindow(user); }
let accedido = false;


export default function MapComponent() {
  if(!accedido) {
    notifyOpenMap(); // Notificar que ha abierto la app
  }

  accedido = true;

  const [radioBusqueda] = useState(10);

  const [userSelected, setUserSelected] = useState();
  showWindow = (user) => { setUserSelected(user); };

  const [pPosition, setCurrentPosition] = useState(() => {
    try{
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentPosition(prevC => prevC =
        {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });

        actualPosition = { lat: position.coords.latitude, lng: position.coords.longitude };

        solidAuth.currentSession().then((session) => {
          if (session) {
            updateLocation(session.webId, actualPosition);
            updateUserMarker(actualPosition);
          }
        });
      }, () => null);}catch(err){ actualPosition = { lat: 0, lng: 0 };}
  });

  function updateUserLocation() {
    navigator.geolocation.clearWatch( watchId );
    watchId = navigator.geolocation.watchPosition((newPos) => {
      if (!actualPosition || (actualPosition.lat !== newPos.coords.latitude
        || actualPosition.lng !== newPos.coords.longitude)) {

        actualPosition = { lat: newPos.coords.latitude, lng: newPos.coords.longitude };

        solidAuth.currentSession().then((session) => {
          if (session) {
            updateUserMarker(actualPosition);
            updateLocation(session.webId, actualPosition);
            setCurrentPosition(prevC => prevC =
            {
              lat: newPos.coords.latitude,
              lng: newPos.coords.longitude
            });
          }
        });
      }
    });
  }

  useEffect(() => {
    let timer;
    timer = setInterval(updateUserLocation, 1000);
    
    return () => { clearInterval(timer); };
  });

  function restarCurrentPosition() {
    setCurrentPosition((prevC) => prevC = {
      lat: latitude,
      lng: longitude
    });
  }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: credentials.mapsKey
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => { restarCurrentPosition(); mapRef.current = map; }, []);

  if (loadError) { return "Error loadinf maps"; }
  if (!isLoaded) { return "Loading Maps"; }

  return (
    <div className="mapa">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={preferredZoom}
        center={pPosition}
        options={options}
        onLoad={onMapLoad}>
        <Markers rad={radioBusqueda} />
        { userSelected ? <InfoWindow
            onCloseClick={() => setUserSelected()}
            position={{lat: userSelected.location.lat + 0.0005, lng: userSelected.location.lng}}><div>{userSelected.name}</div></InfoWindow> : null}
      </GoogleMap>
    </div>
  );
}