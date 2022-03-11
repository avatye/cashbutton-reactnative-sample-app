package com.sample_react_native_cashbutton;

import android.os.Bundle;

import com.avatye.sdk.cashbutton.CashButtonConfig;
import com.avatye.sdk.cashbutton.ICashButtonBackPressedListener;
import com.avatye.sdk.cashbutton.ICashButtonCallback;
import com.avatye.sdk.cashbutton.ui.CashButtonLayout;
import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.ReactMethod;;

public class MainActivity extends ReactActivity {

    private CashButtonLayout cashButton;

    /**
     * Returns the name of the main component registered from JavaScript. This is used to schedule
     * rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "sample_react_native_cashbutton";
    }

    @Override
    public void onBackPressed() {
        if (cashButton != null) {
            cashButton.onBackPressed(new ICashButtonBackPressedListener() {
                @Override
                public void onBackPressed(boolean isSuccess) {
                    if (isSuccess) {
                        finish();
                    }
                }
            });
        } else {
            finish();
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_main);

        /** initialize cashbutton view */
        CashButtonLayout.init(this, new ICashButtonCallback() {
            @Override
            public void onSuccess(CashButtonLayout cashButtonLayout) {
                cashButton = cashButtonLayout;
            }
        });
    }

}
