package com.example.radarin2;

import android.os.Build;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

public class MyFirebaseMessagingService extends FirebaseMessagingService {

    public static final String TAG = "Firebase Messaging";

    @RequiresApi(api = Build.VERSION_CODES.KITKAT)
    @Override
    public void onNewToken(String token) {
        Log.d(TAG, "Refreshed token: " + token);

        // If you want to send messages to this application instance or
        // manage this apps subscriptions on the server side, send the
        // FCM registration token to your app server.
        sendRegistrationToServer(token);
    }

    @Override
    public void onMessageReceived(@NonNull RemoteMessage remoteMessage) {
        super.onMessageReceived(remoteMessage);

        Log.d(TAG, "Showing notification");

        MainActivity.androidJSInterface.setRemoteMessage(remoteMessage.getNotification());

        if( MainActivity.myWebView == null)
            return;

        MainActivity.myWebView.post(new Runnable() {
            @Override
            public void run() {
                sendMessageToWeb();
            }
        });

    }

    public void sendMessageToWeb() {
        String event = "(function() { window.dispatchEvent(window.showNotification); })();";
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.KITKAT) {
            MainActivity.myWebView.evaluateJavascript(event, null);
        } else {
            MainActivity.myWebView.loadUrl("javascript:" + event);
        }
    }

    public static void sendRegistrationToServer(String token) {
        if( MainActivity.myWebView == null)
            return;

        Log.d(TAG, "Updating token");

        MainActivity.androidJSInterface.setToken(token);

        // Evento para guardar token de webapp
        String event = "(function() { window.dispatchEvent(window.saveToken); })();";
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.KITKAT) {
            MainActivity.myWebView.evaluateJavascript(event, null);
        } else {
            MainActivity.myWebView.loadUrl("javascript:" + event);
        }
    }
}