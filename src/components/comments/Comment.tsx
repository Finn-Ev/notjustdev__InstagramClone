import { Image, Pressable, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";
import { useState } from "react";
import { Comment as IComment } from "../../API";
import { DEFAULT_USER_IMAGE } from "../../config";

interface CommentProps {
  comment: IComment;
  displayedInCommentScreen?: boolean;
}

const Comment: React.FC<CommentProps> = ({
  comment,
  displayedInCommentScreen = false,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={styles.comment}>
      {displayedInCommentScreen && (
        <Image
          source={{ uri: comment.User.image || DEFAULT_USER_IMAGE }}
          style={styles.avatar}
        />
      )}

      <View style={styles.commentContent}>
        <Text
          style={{
            ...styles.text,
            marginHorizontal: displayedInCommentScreen ? 10 : 0,
          }}
        >
          <Text style={styles.bold}>{comment.User.username}</Text>{" "}
          {comment.text}
        </Text>
        {displayedInCommentScreen && (
          <View style={styles.footer}>
            <Text style={styles.footerText}>2d</Text>
            <Text style={styles.footerText}>5 likes</Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        )}
      </View>

      <Pressable hitSlop={10} onPress={() => setIsLiked((v) => !v)}>
        <AntDesign
          name={isLiked ? "heart" : "hearto"}
          size={14}
          color={isLiked ? colors.accent : colors.black}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentContent: {
    flex: 1,
  },
  text: {
    color: colors.black,
    lineHeight: 18,
    flex: 1,
    marginRight: 10,
  },
  footer: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  footerText: {
    marginRight: 7.5,
    color: colors.lightgrey,
  },
  avatar: {
    width: 35,
    aspectRatio: 1,
    borderRadius: 20,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
});

export default Comment;
