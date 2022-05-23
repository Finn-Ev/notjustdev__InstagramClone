import Navigation from "./src/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Amplify from "aws-amplify";
import awsconfig from "./src/aws-exports";
import AuthContextProvider from "./src/context/AuthContext";
import React from "react";
import { Linking, Platform } from "react-native";
import * as WebBrowser from "expo-web-browser";

Amplify.configure(awsconfig);

const urlOpener = async (url: string, redirectUrl: string) => {
  const response = await WebBrowser.openAuthSessionAsync(url, redirectUrl);

  if (response.type === "success" && Platform.OS === "ios") {
    WebBrowser.dismissBrowser();
    return Linking.openURL(response.url);
  }
};

// set app-scheme as redirect url when in production
if (process.env.NODE_ENV === "production") {
  awsconfig.oauth.redirectSignIn = "notjustphotos://";
  awsconfig.oauth.redirectSignOut = "notjustphotos://";
} else {
  // set local-expo-url as redirect url when in development
  awsconfig.oauth.redirectSignIn = "exp://127.0.0.1:19000/--/";
  awsconfig.oauth.redirectSignOut = "exp://127.0.0.1:19000/--/";
}

Amplify.configure({
  ...awsconfig,
  oauth: {
    ...awsconfig.oauth,
    urlOpener,
  },
});

const App: React.FC = ({}) => {
  return (
    <SafeAreaProvider>
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </SafeAreaProvider>
  );
};

export default App;
