import { Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet } from 'react-native';
import colors from '../theme/colors';
import fonts from '../theme/fonts';
import { IComment } from '../types/models';

interface CommentProps {
  commentData: IComment;
}

const Comment: React.FC<CommentProps> = ({ commentData }) => {
  return (
    <View style={styles.comment}>
      <Text style={{ ...styles.text, flex: 1, marginRight: 10 }}>
        <Text style={styles.bold}>{commentData.user.username}</Text>{' '}
        {commentData.comment}
      </Text>
      <AntDesign name={'hearto'} size={14} color={colors.black} />
    </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: colors.black,
    lineHeight: 18,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
});

export default Comment;
