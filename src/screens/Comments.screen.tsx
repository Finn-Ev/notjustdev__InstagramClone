import { FlatList, KeyboardAvoidingView, Platform, View } from 'react-native';
import comments from '../../assets/data/comments.json';
import Comment from '../components/Comment';
import CommentInput from '../components/CommentInput';

interface IComments {}

const Comments: React.FC<IComments> = ({}) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <FlatList
        style={{ padding: 10 }}
        data={comments}
        renderItem={({ item }) => (
          <Comment displayedInCommentScreen comment={item} />
        )}
      />
      <CommentInput />
    </KeyboardAvoidingView>
  );
};

export default Comments;
