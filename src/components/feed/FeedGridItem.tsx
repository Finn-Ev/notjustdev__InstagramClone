import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View, Image } from "react-native";
import colors from "../../theme/colors";
import { Post } from "../../API";

interface IFeedGridItem {
  post: Post;
}

const FeedGridItem: React.FC<IFeedGridItem> = ({ post }) => {
  return (
    <View style={styles.container}>
      <Image
        key={post.id}
        style={{ flex: 1 }}
        source={{ uri: post.image || post.images?.[0] }}
      />
      {post.images && (
        <MaterialIcons
          name="collections"
          size={16}
          color={colors.white}
          sa
          style={styles.icon}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "33.3333%",
    aspectRatio: 1,
    padding: 1,
  },
  icon: {
    position: "absolute",
    top: 3.5,
    right: 2.5,
  },
});

export default FeedGridItem;
