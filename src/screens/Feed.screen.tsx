import { useRef, useState } from "react";
import { FlatList, View, ViewToken } from "react-native";
import posts from "../../assets/data/posts.json";
import FeedPost from "../components/feed/FeedPost";
import CommentsScreen from "./Comments.screen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

interface IHomeScreen {}
{
}

const FeedScreen: React.FC<IHomeScreen> = (props) => {
  const [activePostId, setActivePostId] = useState<string | null>(null);
  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setActivePostId(viewableItems[0].item.id || 0);
      }
    }
  );

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <FeedPost isVisible={activePostId === item.id} post={item} />
        )}
        showsVerticalScrollIndicator={false}
        viewabilityConfig={{ itemVisiblePercentThreshold: 66 }}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  );
};

export default FeedScreen;
