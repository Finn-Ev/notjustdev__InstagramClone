import {
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import comments from '../../assets/data/comments.json';
import Comment from '../components/Comment';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CommentInput from '../components/CommentInput';

interface IComments {}

const Comments: React.FC<IComments> = ({}) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ padding: 10 }}
        data={comments}
        renderItem={({ item }) => (
          <Comment displayedInCommentScreen comment={item} />
        )}
      />
      <CommentInput />
    </View>
  );
};

export default Comments;
