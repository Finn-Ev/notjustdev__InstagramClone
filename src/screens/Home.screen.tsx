import { useRef, useState } from 'react';
import { FlatList, View, ViewToken } from 'react-native';
import posts from '../../assets/data/posts.json';
import FeedPost from '../components/FeedPost';
import Comments from './Comments.screen';

interface IHomeScreen {}

const HomeScreen: React.FC<IHomeScreen> = ({}) => {
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

export default HomeScreen;
