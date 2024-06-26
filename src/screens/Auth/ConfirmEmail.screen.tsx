import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import FormInput from "./components/FormInput";
import CustomButton from "./components/CustomButton";
import SocialSignInButtons from "./components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/core";
import { useForm } from "react-hook-form";
import {
  ConfirmEmailNavigationProp,
  ConfirmEmailRouteProp,
} from "../../navigation/types";
import { useRoute } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { EMAIL_REGEX } from "../../util/regExs";

type ConfirmEmailData = {
  email: string;
  code: string;
};

const ConfirmEmailScreen = () => {
  const route = useRoute<ConfirmEmailRouteProp>();
  const { control, handleSubmit, watch } = useForm<ConfirmEmailData>({
    defaultValues: { email: route.params.email },
  });
  const navigation = useNavigation<ConfirmEmailNavigationProp>();
  const [isLoading, setIsLoading] = useState(false);

  const onConfirmPressed = async (data: ConfirmEmailData) => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const res = await Auth.confirmSignUp(data.email, data.code);
      // @ts-ignore
      alert("Successfully confirmed email");
      navigation.navigate("Sign in");
    } catch (e) {
      Alert.alert("Something went wrong", e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onSignInPress = () => {
    navigation.navigate("Sign in");
  };

  const onResendPress = async () => {
    try {
      if (route.params.email) {
        await Auth.resendSignUp(route.params.email);
      }
      Alert.alert("Confirmation code sent");
    } catch (e) {
      Alert.alert("Something went wrong", e.message);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <FormInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            pattern: {
              value: EMAIL_REGEX,
              message: "Please enter a valid email",
            },
            required: "Email is required",
          }}
        />

        <FormInput
          name="code"
          control={control}
          placeholder="Enter your confirmation code"
          rules={{
            required: "Confirmation code is required",
          }}
        />

        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />

        <CustomButton
          text="Resend code"
          onPress={onResendPress}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Sign in"
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
    color: "#051C60",
    margin: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
});

export default ConfirmEmailScreen;
