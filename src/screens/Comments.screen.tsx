import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import comments from "../../assets/data/comments.json";
import Comment from "../components/comments/Comment";
import CommentInput from "../components/comments/CommentInput";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface IComments {}

const CommentsScreen: React.FC<IComments> = ({}) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <FlatList
          style={{ padding: 10 }}
          data={comments}
          renderItem={({ item }) => (
            <Comment displayedInCommentScreen comment={item} />
          )}
        />
        <CommentInput />
        <View style={{ flex: 1 }}></View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CommentsScreen;
