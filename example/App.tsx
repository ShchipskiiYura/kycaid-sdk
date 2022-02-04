import React from 'react';
import { withNavigationItem } from 'hybrid-navigation';
import {
  LogBox,
  StyleSheet,
  SafeAreaView,
  Platform,
  Alert
} from 'react-native';
import { KYCAID, VerificationData } from '@kycaid/react-native-sdk'

function App() {
  const handleVerificationCallback = (data?: VerificationData) => {
    console.log(`Callback successfully received!`);
    console.log(`Verification ${data?.verification_id} has status: ${data?.status}`);

    Alert.alert(
        "Callback successfully received!",
        `Verification ${data?.verification_id} has status: ${data?.status}`,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
    );
  };

  LogBox.ignoreAllLogs();

  return (
    <SafeAreaView style={styles.container}>
      <KYCAID
        config={{
          // api_url: 'https://api.kycaid.com',
          // api_token: 'bc9d9bad1c355148071abab5fca77264a02f',
          // form_id: '7c87abe91c56614f9018d30533f67a385b42',
            // api_token: '03762a190801c54e3c2ae8d84cc6abbc8afe',
            // form_id: '25579bf50d4d4144291a12a7bab6e7a7af8b',
          api_url: 'https://stg-api.kycaid.com',
          api_token: '8d861e830717f648f11a27d888ff11f05616',
          form_id: 'c029792f042e324a230a70d30930dd56da6d',
          // applicant_id: '9bbf9d4c041e41473918c7176b1c263691cc',
            // api_url: 'https://192.168.0.115:3005',
            // api_token: '03762a190801c54e3c2ae8d84cc6abbc8afe',
            // form_id: '41b0f81402fff14a9e2bc6b4c1d11ff844b5',
            response_url: 'https://www.google.com/',
        }}
        verificationCallback={handleVerificationCallback}
      />
    </SafeAreaView>
  )
}

export default withNavigationItem({
  titleItem: {
    title: 'KYCAID SDK',
  },
})(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f3f9',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  webView: {
    backgroundColor: '#f0f3f9',
  }
});
