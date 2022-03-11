package com.sample_react_native_cashbutton;

import android.app.Activity;
import androidx.annotation.NonNull;
import com.avatye.sdk.cashbutton.CashButtonConfig;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class AndroidModule extends ReactContextBaseJavaModule {

    public AndroidModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "AndroidModule";
    }

    @ReactMethod
    void actionSuggestion() {
        Activity activity = getCurrentActivity();
        if (activity != null) {
            CashButtonConfig.actionSuggestion(activity);
        }
    }
}
