import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface IInput {
  label: string;
  multiline?: boolean;
}

const FormInput: React.FC<IInput> = ({ label, multiline = false }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} multiline={multiline} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  label: {
    width: 75,
  },
  input: {
    flex: 1,
    borderColor: colors.border,
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
});

export default FormInput;
