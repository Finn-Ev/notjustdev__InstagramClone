import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../../../theme/colors";
import { MaterialIcons } from "@expo/vector-icons";

interface ICustomButton {
  onPress: () => void;
  text: string;
  type?: "PRIMARY" | "SECONDARY" | "TERTIARY";
  bgColor?: string;
  fgColor?: string;
  icon?: any;
}

const CustomButton = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
  icon = null,
}: ICustomButton) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        // @ts-ignore
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={[
            styles.text,
            // @ts-ignore
            styles[`text_${type}`],
            fgColor ? { color: fgColor } : {},
          ]}
        >
          {text + " "}
        </Text>

        {icon}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",

    padding: 15,
    marginVertical: 5,

    alignItems: "center",
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: colors.primary,
  },

  container_SECONDARY: {
    borderColor: colors.primary,
    borderWidth: 2,
  },

  container_TERTIARY: {},

  text: {
    fontWeight: "bold",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  text_PRIMARY: {},

  text_SECONDARY: {
    color: colors.primary,
  },

  text_TERTIARY: {
    color: colors.grey,
  },
});

export default CustomButton;
