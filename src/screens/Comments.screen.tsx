import { FlatList, Text, View } from 'react-native';
import comments from '../../assets/data/comments.json';
import Comment from '../components/Comment';

interface IComments {}

const Comments: React.FC<IComments> = ({}) => {
  return (
    <View>
      <FlatList
        style={{ padding: 10 }}
        data={comments}
        renderItem={({ item }) => (
          <Comment displayedInCommentScreen comment={item} />
        )}
      />
    </View>
  );
};

export default Comments;
