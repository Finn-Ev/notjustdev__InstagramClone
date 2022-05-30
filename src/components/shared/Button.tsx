import {
  StyleSheet,
  View,
  Text,
  Pressable,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";

interface IButton {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  inline?: boolean;
}

const Button: React.FC<IButton> = ({
  children,
  onPress,
  style = {},
  textStyle = {},
  inline = false,
}) => {
  return (
    <Pressable
      style={[styles.container, style, inline && { flex: 1 }]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  text: {
    color: colors.black,
    fontWeight: fonts.weight.semi,
  },
});

export default Button;
