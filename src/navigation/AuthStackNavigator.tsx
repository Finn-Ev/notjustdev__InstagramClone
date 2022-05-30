import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackNavigatorParamList } from "./types";
import SignInScreen from "../screens/Auth/SignIn.screen";
import SignUpScreen from "../screens/Auth/SignUp.screen";
import ConfirmEmailScreen from "../screens/Auth/ConfirmEmail.screen";
import ForgotPasswordScreen from "../screens/Auth/ForgotPassword.screen";
import NewPasswordScreen from "../screens/Auth/NewPassword.screen";

const Stack = createNativeStackNavigator<AuthStackNavigatorParamList>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sign in"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Sign up" component={SignUpScreen} />
      <Stack.Screen name="Confirm email" component={ConfirmEmailScreen} />
      <Stack.Screen name="Forgot password" component={ForgotPasswordScreen} />
      <Stack.Screen name="New password" component={NewPasswordScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
