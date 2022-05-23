import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../../theme/colors";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import Comment from "../comments/Comment";
import AntDesign from "@expo/vector-icons/AntDesign";
import { IPost } from "../../types/models";
import { useState } from "react";
import DoublePressable from "../shared/DoublePressable";
import fonts from "../../theme/fonts";
import Carousel from "../shared/Carousel";
import VideoPlayer from "../shared/VideoPlayer";
import { useNavigation } from "@react-navigation/native";
import { FeedNavigationProp } from "../../types/navigation";

interface IFeedPost {
  post: IPost;
  isVisible: boolean;
}

const FeedPost: React.FC<IFeedPost> = ({ post, isVisible }) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation<FeedNavigationProp>();

  const getContent = () => {
    if (post.image) {
      return (
        <DoublePressable onDoublePress={() => setIsLiked(true)}>
          <Image
            source={{
              uri: post.image,
            }}
            style={styles.image}
          />
        </DoublePressable>
      );
    } else if (post.images) {
      return (
        <Carousel images={post.images} onDoublePress={() => setIsLiked(true)} />
      );
    } else if (post.video) {
      return (
        <DoublePressable onDoublePress={() => setIsLiked(true)}>
          <VideoPlayer isVisible={isVisible} uri={post.video} />
        </DoublePressable>
      );
    }
  };

  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.userAvatar}
          source={{
            uri: post.user.image,
          }}
        />
        <Text
          onPress={() =>
            navigation.navigate("UserProfile", { userId: post.user.id })
          }
          style={styles.userName}
        >
          {post.user.username}
        </Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/* Content */}
      {getContent()}

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={() => setIsLiked((v) => !v)}>
            <AntDesign
              name={isLiked ? "heart" : "hearto"}
              size={24}
              style={styles.icon}
              color={isLiked ? colors.error : colors.black}
            />
          </Pressable>
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{ marginLeft: "auto" }}
            color={colors.black}
          />
        </View>

        {/* Likes */}
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>vadimsavin</Text> and{" "}
          <Text style={styles.bold}>{post.nofLikes} others</Text>
        </Text>

        {/* Description */}
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <Text style={styles.bold}>{post.user.username}</Text>{" "}
          {post.description}
        </Text>
        {!isDescriptionExpanded && (
          <Text
            style={styles.utilText}
            onPress={() => setIsDescriptionExpanded(true)}
          >
            more
          </Text>
        )}

        {/* Comments*/}
        <Text
          onPress={() =>
            // @ts-ignore
            navigation.navigate("Comments", { postId: post.id })
          }
          style={styles.utilText}
        >
          View all {post.nofComments} comments
        </Text>
        {post.comments &&
          post.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}

        {/* Posted date */}
        <Text style={styles.utilText}>{post.createdAt}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {},
  text: {
    color: colors.black,
    lineHeight: 18,
  },
  utilText: {
    color: colors.lightgrey,
    marginVertical: 2,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  header: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  threeDots: {
    marginLeft: "auto",
    marginRight: 10,
  },
  footer: {
    padding: 10,
  },
  iconContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  icon: {
    marginRight: 10,
  },
});

export default FeedPost;
