import React, { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
} from "react-native";
import { Control, Controller, Path } from "react-hook-form";

interface ICustomInput<ContentType> {
  control: Control<ContentType, object>;
  name: Path<ContentType>;
  rules?: {};
  onFocus?: () => void;
  displayIndex?: number;
  currentlySelectedInputDisplayIndex?: number;
  placeholder?: string;
  secureTextEntry?: boolean;
  onSubmitEditing?: () => void;
  isLastInput?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

function CustomInput<ContentType>({
  control,
  name,
  rules = {},
  displayIndex = 0,
  currentlySelectedInputDisplayIndex = 0,
  onFocus,
  placeholder = "",
  secureTextEntry = false,
  onSubmitEditing,
  isLastInput = false,
  keyboardType = "default",
}: ICustomInput<ContentType>) {
  const inputRef = React.useRef<TextInput>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (currentlySelectedInputDisplayIndex === displayIndex) {
      focusInput();
    }
  }, [currentlySelectedInputDisplayIndex, displayIndex]);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[
              styles.container,
              { borderColor: error ? "red" : "#e8e8e8" },
            ]}
          >
            <TextInput
              value={value as string}
              onChangeText={onChange}
              onBlur={onBlur}
              blurOnSubmit={false}
              keyboardType={keyboardType}
              ref={inputRef}
              onFocus={onFocus}
              placeholderTextColor={"#a8a8a8"}
              placeholder={placeholder}
              autoCorrect={false}
              autoCapitalize={"none"}
              returnKeyType={isLastInput ? "done" : "next"}
              style={styles.input}
              secureTextEntry={secureTextEntry}
              onSubmitEditing={onSubmitEditing}
            />
          </View>
          {error && (
            <Text style={{ color: "red", alignSelf: "stretch" }}>
              {error.message || "Error"}
            </Text>
          )}
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",

    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    height: 50,
  },
});

export default CustomInput;
