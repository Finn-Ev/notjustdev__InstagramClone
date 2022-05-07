import { StyleSheet, View, Text, Image, TextInput } from 'react-native';
import user from '../../assets/data/user.json';
import colors from '../theme/colors';
import fonts from '../theme/fonts';
import FormInput from '../components/shared/FormInput';

interface IEditProfile {}

const EditProfileScreen: React.FC<IEditProfile> = ({}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.image }} style={styles.avatar} />
      <Text style={styles.textButton}>Change profile photo</Text>

      <FormInput label="Name" />
      <FormInput label="Username" />
      <FormInput label="Website" />
      <FormInput label="Bio" multiline />

      <Text onPress={() => console.log('submit')} style={styles.textButton}>
        Save changes
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 999,
  },
  textButton: {
    color: colors.primary,
    fontWeight: fonts.weight.semi,
    fontSize: fonts.size.md,
    marginTop: 10,
    marginBottom: 20,
  },
});

export default EditProfileScreen;
