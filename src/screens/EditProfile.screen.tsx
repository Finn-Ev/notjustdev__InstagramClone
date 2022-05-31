import { Alert, Image, StyleSheet, Text, View } from "react-native";
import user from "../../assets/data/user.json";
import colors from "../theme/colors";
import fonts from "../theme/fonts";
import FormInput from "../components/shared/FormInput";
import { useForm } from "react-hook-form";
import * as ImagePicker from "expo-image-picker";
import { URL_REGEX } from "../util/regExs";
import { useState } from "react";
import {
  DeleteUserMutation,
  DeleteUserMutationVariables,
  GetUserQuery,
  GetUserQueryVariables,
  UpdateUserInput,
  UpdateUserMutation,
  UpdateUserMutationVariables,
  User,
} from "../API";
import { gql, useMutation, useQuery } from "@apollo/client";
import { DEFAULT_USER_IMAGE } from "../config";
import { useAuthContext } from "../context/AuthContext";
import LoadingIndicator from "../components/shared/LoadingIndicator";
import ApiErrorMessage from "../components/shared/ApiErrorMessage";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";

interface IEditProfile {}

export type IEditableUserFields =
  | "name"
  | "username"
  | "website"
  | "bio"
  | "image";

export type IEditableUser = Pick<User, IEditableUserFields>;

const EditProfileScreen: React.FC<IEditProfile> = ({}) => {
  const { userId, user: authUser } = useAuthContext();
  const navigation = useNavigation();

  const {
    data: userData,
    loading,
    error,
  } = useQuery<GetUserQuery, GetUserQueryVariables>(getUser, {
    variables: {
      id: userId,
    },
  });

  const [executeUpdateUser, { loading: updateLoading, error: updateError }] =
    useMutation<UpdateUserMutation, UpdateUserMutationVariables>(updateUser);

  const [executeDeleteUser] = useMutation<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >(deleteUser);

  const user = userData?.getUser;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditableUser>({
    defaultValues: {
      name: user?.name,
      username: user?.username,
      website: user?.website,
      bio: user?.bio,
    },
  });

  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const onSubmit = async (data: IEditableUser) => {
    await executeUpdateUser({
      variables: {
        input: {
          id: userId,
          ...data,
          _version: user?._version,
        },
      },
    });
    navigation.canGoBack() && navigation.goBack();
  };

  const confirmDeleteUser = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes, delete",
          style: "destructive",
          onPress: async () => {
            // delete user from DB
            await executeDeleteUser({
              variables: {
                input: {
                  id: userId,
                  _version: user?._version,
                },
              },
            });
            await authUser?.deleteUser((err) => {
              if (err) console.log(err);
            });
            await Auth.signOut();
          },
        },
      ]
    );
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
      mediaTypes: ImagePicker.MediaTypeOptions.All,
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

  if (loading || updateLoading) {
    return <LoadingIndicator />;
  }

  if (error || updateError) {
    return <ApiErrorMessage message={error?.message || updateError?.message} />;
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: selectedPhoto || user?.image || DEFAULT_USER_IMAGE }}
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
        {updateLoading ? "Saving changes..." : "Save changes"}
      </Text>

      <Text
        onPress={confirmDeleteUser}
        style={[styles.textButton, styles.deleteButton]}
      >
        {updateLoading ? "Deleting user" : "Delete User"}
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
  deleteButton: {
    marginTop: 50,
    textTransform: "uppercase",
    color: colors.error,
  },
});

export default EditProfileScreen;

const getUser = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      username
      image
      website
      bio

      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

const updateUser = gql`
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      username
      image
      website
      bio

      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

export const deleteUser = gql`
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      updatedAt
      _deleted
      _version
      _lastChangedAt
    }
  }
`;
