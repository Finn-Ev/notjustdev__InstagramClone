import colors from "../../theme/colors";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Control, Controller, useForm, ValidationRule } from "react-hook-form";
import {
  IEditableUser,
  IEditableUserFields,
} from "../../screens/EditProfile.screen";

interface IInput {
  label: string;
  name: IEditableUserFields;
  multiline?: boolean;
  control: Control<IEditableUser, object>;
  rules?: object;
}

const FormInput: React.FC<IInput> = ({
  label,
  name,
  multiline = false,
  control,
  rules = {},
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, value, onBlur },
        fieldState: { error },
      }) => {
        return (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={{ flex: 1 }}>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                style={[styles.input, error && styles.inputError]}
                multiline={multiline}
              />
              {error && (
                <Text style={{ color: colors.error }}>
                  {error?.message || "Invalid value"}
                </Text>
              )}
            </View>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    alignSelf: "stretch",
  },
  label: {
    width: 75,
  },
  input: {
    borderColor: colors.border,
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  inputError: {
    borderColor: colors.error,
  },
});

export default FormInput;
