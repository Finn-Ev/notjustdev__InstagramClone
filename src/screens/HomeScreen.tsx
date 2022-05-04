import {FlatList, View} from 'react-native';
import posts from '../assets/data/posts.json';
import FeedPost from '../components/FeedPost';

interface IHomeScreen {}

const HomeScreen: React.FC<IHomeScreen> = ({}) => {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <FeedPost post={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
