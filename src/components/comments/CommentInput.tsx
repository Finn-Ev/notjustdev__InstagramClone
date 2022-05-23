import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";

interface IInput {}

const CommentInput: React.FC<IInput> = ({}) => {
  const [text, setText] = useState("");

  const onPost = () => {
    setText("");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg",
        }}
      />
      <TextInput
        value={text}
        onChangeText={(val) => setText(val)}
        style={styles.input}
        placeholder="Write your comment..."
        multiline
      />
      <Pressable hitSlop={10} onPress={onPost} style={styles.button}>
        <Text style={styles.buttonText}>POST</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    borderTopWidth: 1,
    borderColor: colors.border,
    alignItems: "flex-end",
  },
  avatar: {
    height: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    paddingRight: 55,
    marginLeft: 5,
    marginBottom: 5,
  },
  button: {
    position: "absolute",
    right: 15,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.bold,
    color: colors.primary,
  },
});

export default CommentInput;
