package com.example.radarin2;

import android.util.Log;
import android.webkit.JavascriptInterface;

import androidx.annotation.NonNull;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.RemoteMessage;

public class AndroidJSInterface {

    public String token;
    public RemoteMessage.Notification notification;

    public void setToken(String token) {
        this.token = token;
    }

    public void setRemoteMessage(RemoteMessage.Notification remoteMessage) {
        this.notification = remoteMessage;
    }

    @JavascriptInterface
    public void getFirebaseToken() {
        try {
            FirebaseMessaging.getInstance().getToken()
                    .addOnCompleteListener(new OnCompleteListener<String>() {
                        @Override
                        public void onComplete(@NonNull Task<String> task) {
                            if (!task.isSuccessful()) {
                                Log.w(MyFirebaseMessagingService.TAG, "Fetching FCM registration token failed", task.getException());
                                return;
                            }

                            // Get new FCM registration token
                            String token = task.getResult();

                            // Log and toast
                            String msg = "Obtenido token: " + token;
                            Log.d(MyFirebaseMessagingService.TAG, msg);

                            MyFirebaseMessagingService.sendRegistrationToServer(token);
                        }
                    });
        } catch(Exception error) {
            Log.w(MyFirebaseMessagingService.TAG, "Fetching FCM registration token failed", error);
        }
    }

    @JavascriptInterface
    public String getToken() {
        return token;
    }

    @JavascriptInterface
    public String getNotificationTitle() {
        return notification.getTitle();
    }

    @JavascriptInterface
    public String getNotificationBody() {
        return notification.getBody();
    }
}
