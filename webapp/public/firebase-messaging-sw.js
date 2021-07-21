// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyBXfLAAMgu31qw2Y2JTfcj03ZKghEcV6Dw",
    authDomain: "radarin-es3a.firebaseapp.com",
    projectId: "radarin-es3a",
    storageBucket: "radarin-es3a.appspot.com",
    messagingSenderId: "407429701050",
    appId: "1:407429701050:web:811db1dbe2157f07981183",
    measurementId: "G-VLC6HJHN5M"
};
try {
  firebase.initializeApp(firebaseConfig);
} catch (error) {
  return;
}

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});