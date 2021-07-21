import React, { useEffect } from "react";
import Navbar from "./components/navBar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {useLoggedIn} from "@solid/react";
import Welcome  from "./components/welcome/Welcome";
import SignIn from "./components/signIn/SignIn";
import AboutUs from "./components/aboutUs/AboutUs";
import Docs from "./components/docs/Docs";
import Admin from "./components/admin/Admin";
import FriendList from "./components/friendlist/FriendList";
import { getToken, onMessageListener } from "./services/firebase";
import { saveUserLocation, saveUserToken } from "./services/updateUserData";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import MapContainer from "./components/map/MapContainer";


var log;

export function showNotification(notification) {
  store.addNotification({
    title: notification.title ? notification.title : "Notificación",
    message: notification.body ? notification.body : "Tienes una notificación",
    type: "custom",
    container: "top-center",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000
    }
  });
}

function prepareToAndroidNotifications() {
  window.saveToken = new Event("saveToken");

  window.addEventListener("saveToken", function() {
    const token = window.Android.getToken();
    if(token) {
      saveUserToken(token);
    }
  }, false);

  window.Android.getFirebaseToken();

  window.showNotification = new Event("showNotification");

  window.addEventListener("showNotification", () => {
    const notification = {
      "title": window.Android.getNotificationTitle(),
      "body": window.Android.getNotificationBody()
    };
    showNotification(notification);
  });
}

function FuntionGetLoggedUser() {
  const loggedIn = useLoggedIn();
  return loggedIn;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    log
    ? <Component {...props} />
    : <Redirect to="/"/> 
    )}/>
);

export default function App() {
  log = FuntionGetLoggedUser();
  useEffect(() => {
    window.onbeforeunload = () => saveUserLocation();

    // Obtener token de app móvil
    if(window.Android) {
      prepareToAndroidNotifications();
    }
    else {
      getToken((token) => {
        saveUserToken(token);
      });
    }
  }, []);
  
  onMessageListener().then((payload) => {
    showNotification(payload.notification);
  }).catch((err) => {});

  return (
    <Router>
      <ReactNotification types={[
          {
            htmlClasses: ["notification__item--custom"],
            name: "custom"
          }
        ]}/>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Welcome} />
        <PrivateRoute path="/map" component={MapContainer} />
        <Route path="/sign-in"  component={SignIn} />
        <Route path="/about-us"  component={AboutUs} />
        <Route path="/docs"  component={Docs} />
        <PrivateRoute path="/admin" component={Admin} />
        <PrivateRoute path="/friend-list" component={FriendList} />
      </Switch>
      <Footer/>
    </Router>
  );          
}