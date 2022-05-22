import Navigation from "./src/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
// @ts-ignore
import { withAuthenticator, AmplifyTheme } from "aws-amplify-react-native";
import colors from "./src/theme/colors";

Amplify.configure(config);

const App: React.FC = ({}) => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

const signUpConfig = {
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Username",
      key: "preferred_username",
      required: true,
      displayOrder: 1,
      type: "string",
      placeholder: "Username/handle",
    },
    {
      label: "Full name",
      key: "name",
      required: true,
      displayOrder: 2,
      type: "string",
      placeholder: "Full name",
    },
    {
      label: "Email",
      key: "email",
      required: true,
      displayOrder: 3,
      type: "string",
      placeholder: "Email",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 4,
      type: "password",
      placeholder: "Password",
    },
  ],
};

const customTheme = {
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    backgroundColor: colors.primary,
    borderRadius: 100,
  },
  buttonDisabled: {
    ...AmplifyTheme.buttonDisabled,
    backgroundColor: "#5c78ff",
    borderRadius: 100,
  },
  sectionFooterLink: {
    ...AmplifyTheme.sectionFooterLink,
    color: colors.primary,
  },
};

export default withAuthenticator(App, { signUpConfig, theme: customTheme });
