import { Image, StyleSheet, Text, View } from "react-native";
import user from "../../assets/data/user.json";
import colors from "../theme/colors";
import fonts from "../theme/fonts";
import FormInput from "../components/shared/FormInput";
import { useForm } from "react-hook-form";
import * as ImagePicker from "expo-image-picker";
import { IUser } from "../types/models";
import { URL_REGEX } from "../types/regExs";
import { useState } from "react";

interface IEditProfile {}

export type IEditableUserFields =
  | "name"
  | "username"
  | "website"
  | "bio"
  | "image";

export type IEditableUser = Pick<IUser, IEditableUserFields>;

const EditProfileScreen: React.FC<IEditProfile> = ({}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      // website: user.website,
      bio: user.bio,
    },
  });

  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const onSubmit = (data: any) => {
    console.log({ data });
  };

  const changePhoto = async () => {
    // let cameraAccess = await ImagePicker.getCameraPermissionsAsync();
    // if (!cameraAccess.granted) {
    //   const cameraAccess = await ImagePicker.requestCameraPermissionsAsync();
    //   if (!cameraAccess.granted) {
    //     return;
    //   }
    // }

    // @ts-ignore
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!cancelled) {
      setSelectedPhoto(uri);
    } else {
      console.log("cancelled");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: selectedPhoto || user.image }}
        style={styles.avatar}
      />
      <Text onPress={async () => await changePhoto()} style={styles.textButton}>
        Change profile photo
      </Text>

      <FormInput
        label="Name"
        control={control}
        rules={{
          required: "Please provide a name",
          minLength: {
            value: 3,
            message: "Name must contain at least 3 characters",
          },
        }}
        name={"name"}
      />
      <FormInput
        label="Username"
        control={control}
        rules={{
          required: "Please provide a username",
          minLength: {
            value: 3,
            message: "Name must contain at least 3 characters",
          },
        }}
        name={"username"}
      />
      <FormInput
        label="Website"
        control={control}
        rules={{
          pattern: {
            value: URL_REGEX,
            message: "Please provide a valid website",
          },
        }}
        name={"website"}
      />
      <FormInput
        label="Bio"
        control={control}
        rules={{
          maxLength: {
            value: 200,
            message: "Bio must contain at most 200 characters",
          },
        }}
        name={"bio"}
        multiline
      />

      <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
        Save changes
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: "30%",
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
