import React from 'react';
import { withNavigationItem } from 'hybrid-navigation';
import {
  LogBox,
  StyleSheet,
  SafeAreaView,
  Platform,
} from 'react-native';
import { KYCAID, VerificationData } from '@kycaid/react-native-sdk'

function App() {
  const handleVerificationCallback = (data?: VerificationData) => {
    console.log(`Callback successfully received!`);
    console.log(`Verification ${data?.verification_id} has status: ${data?.status}`);
  };

  LogBox.ignoreAllLogs();

  return (
    <SafeAreaView style={styles.container}>
      <KYCAID
        config={{
          api_token: '<api_token>',
          form_id: '<form_id>',
          response_url: '<response_url>',
        }}
        verificationCallback={handleVerificationCallback}
      />
    </SafeAreaView>
  )
}

export default withNavigationItem({
  titleItem: {
    title: 'Example App',
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
