import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import FormInput from "./components/FormInput";
import CustomButton from "./components/CustomButton";
import { useNavigation } from "@react-navigation/core";
import { useForm } from "react-hook-form";
import { ForgotPasswordNavigationProp } from "../../types/navigation";
import { Auth } from "aws-amplify";

type ForgotPasswordData = {
  username: string;
};

const ForgotPasswordScreen = () => {
  const { control, handleSubmit } = useForm<ForgotPasswordData>();
  const navigation = useNavigation<ForgotPasswordNavigationProp>();
  const [isLoading, setIsLoading] = useState(false);

  const onSendPressed = async (data: ForgotPasswordData) => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const response = await Auth.forgotPassword(data.username);
      Alert.alert(
        "Check your email",
        `The Confirmation Code has been sent to ${response.CodeDeliveryDetails.Destination}`
      );
      navigation.navigate("New password");
    } catch (e) {
      Alert.alert("Something went wrong", "Username not found");
    } finally {
      setIsLoading(false);
    }
  };

  const onSignInPress = () => {
    navigation.navigate("Sign in");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <FormInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: "Username is required",
          }}
        />

        <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />

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

export default ForgotPasswordScreen;
