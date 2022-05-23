import {
  Alert,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
// @ts-ignore
import Logo from "../../../assets/logo.png";
import FormInput from "./components/FormInput";
import CustomButton from "./components/CustomButton";
import SocialSignInButtons from "./components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { set, useForm } from "react-hook-form";
import { SignInNavigationProp } from "../../types/navigation";
import { Auth } from "aws-amplify";
import { useRef, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useAuthContext } from "../../context/AuthContext";
import { EMAIL_REGEX } from "../../types/regExs";

type SignInData = {
  email: string;
  password: string;
};

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation<SignInNavigationProp>();
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit, reset } = useForm<SignInData>();

  const onSignInPressed = async ({ email, password }: SignInData) => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      await Auth.signIn(email, password);
      reset();
    } catch (e) {
      console.log(e.type);
      if (e.name === "UserNotConfirmedException") {
        navigation.navigate("Confirm email", { email });
      } else {
        Alert.alert(
          "Sign in failed",
          "Please check your username and password",
          [{ text: "OK" }],
          { cancelable: false }
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("Forgot password");
  };

  const onSignUpPressed = () => {
    navigation.navigate("Sign up");
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <SocialSignInButtons />

        <Text style={{ marginVertical: 10 }}> or </Text>
        <FormInput
          name="email"
          placeholder="Email"
          control={control}
          rules={{
            pattern: {
              value: EMAIL_REGEX,
              message: "Please enter a valid email",
            },
            required: "Email is required",
          }}
        />

        <FormInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 3,
              message: "Password should be minimum 3 characters long",
            },
          }}
          onSubmitEditing={() => handleSubmit(onSignInPressed)}
        />

        <CustomButton
          text={isLoading ? "Loading..." : "Sign in"}
          onPress={handleSubmit(onSignInPressed)}
        />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
