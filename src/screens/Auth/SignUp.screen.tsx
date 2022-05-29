import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import FormInput from "./components/FormInput";
import CustomButton from "./components/CustomButton";
import SocialSignInButtons from "./components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/core";
import { useForm } from "react-hook-form";
import { SignUpNavigationProp } from "../../types/navigation";
import colors from "../../theme/colors";
import { Auth } from "aws-amplify";
import { useState } from "react";
import { EMAIL_REGEX } from "../../types/regExs";

type SignUpData = {
  name: string;
  email: string;
  password: string;
  passwordRepeat: string;
};

const SignUpScreen = () => {
  const { control, handleSubmit, watch, reset } = useForm<SignUpData>();
  const pwd = watch("password");
  const navigation = useNavigation<SignUpNavigationProp>();
  const [isLoading, setIsLoading] = useState(false);

  const [
    currentlySelectedInputDisplayIndex,
    setCurrentlySelectedInputDisplayIndex,
  ] = useState(0);

  const onRegisterPressed = async ({ name, email, password }: SignUpData) => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: { name },
      });

      reset();
      // @ts-ignore
      navigation.navigate("Confirm email", { email });
    } catch (e) {
      Alert.alert("Something went wrong", e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onSignInPress = () => {
    navigation.navigate("Sign in");
  };

  const onTermsOfUsePressed = () => {
    console.warn("onTermsOfUsePressed");
  };

  const onPrivacyPressed = () => {
    console.warn("onPrivacyPressed");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <FormInput
          displayIndex={1}
          currentlySelectedInputDisplayIndex={
            currentlySelectedInputDisplayIndex
          }
          onSubmitEditing={() => {
            setCurrentlySelectedInputDisplayIndex(2);
          }}
          onFocus={() => {
            setCurrentlySelectedInputDisplayIndex(1);
          }}
          name="name"
          control={control}
          placeholder="Full name"
          rules={{
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name should be at least 3 characters long",
            },
            maxLength: {
              value: 24,
              message: "Name should be max 24 characters long",
            },
          }}
        />
        <FormInput
          displayIndex={2}
          currentlySelectedInputDisplayIndex={
            currentlySelectedInputDisplayIndex
          }
          onSubmitEditing={() => {
            setCurrentlySelectedInputDisplayIndex(3);
          }}
          onFocus={() => {
            setCurrentlySelectedInputDisplayIndex(2);
          }}
          name="email"
          control={control}
          placeholder="Email"
          keyboardType={"email-address"}
          rules={{
            required: "Email is required",
            pattern: {
              value: EMAIL_REGEX,
              message: "Please enter a valid email",
            },
          }}
        />
        <FormInput
          displayIndex={3}
          currentlySelectedInputDisplayIndex={
            currentlySelectedInputDisplayIndex
          }
          onSubmitEditing={() => {
            setCurrentlySelectedInputDisplayIndex(4);
          }}
          onFocus={() => {
            setCurrentlySelectedInputDisplayIndex(3);
          }}
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters long",
            },
          }}
        />
        <FormInput
          displayIndex={4}
          currentlySelectedInputDisplayIndex={
            currentlySelectedInputDisplayIndex
          }
          onSubmitEditing={handleSubmit(onRegisterPressed)}
          onFocus={() => {
            setCurrentlySelectedInputDisplayIndex(4);
          }}
          name="passwordRepeat"
          control={control}
          placeholder="Repeat Password"
          secureTextEntry
          isLastInput
          rules={{
            validate: (value: string) =>
              value === pwd || "Password do not match",
          }}
        />

        <CustomButton
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}
        />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        {/*<SocialSignInButtons />*/}

        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.black,
    margin: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: colors.primary,
  },
});

export default SignUpScreen;
