import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import FormInput from "./components/FormInput";
import CustomButton from "./components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { NewPasswordNavigationProp } from "../../navigation/types";
import { Auth } from "aws-amplify";
import { useState } from "react";
import { EMAIL_REGEX } from "../../util/regExs";

type NewPasswordType = {
  email: string;
  code: string;
  password: string;
};

const NewPasswordScreen = () => {
  const { control, handleSubmit, reset } = useForm<NewPasswordType>();

  const navigation = useNavigation<NewPasswordNavigationProp>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitPressed = async (data: NewPasswordType) => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const response = await Auth.forgotPasswordSubmit(
        data.email,
        data.code,
        data.password
      );
      Alert.alert("Success");
      reset();
      navigation.navigate("Sign in");
    } catch (e) {
      Alert.alert("Something went wrong", "Invalid credentials");
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
          placeholder="Email"
          name="email"
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
          placeholder="Code"
          name="code"
          control={control}
          rules={{ required: "Code is required" }}
        />

        <FormInput
          placeholder="Enter your new password"
          name="password"
          control={control}
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters long",
            },
          }}
        />

        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />

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

export default NewPasswordScreen;
