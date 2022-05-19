import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeedScreen from "../screens/Feed.screen";
import ProfileScreen from "../screens/Profile.screen";
import { Image } from "react-native";

// @ts-ignore
import logo from "../../assets/logo.png";
import EditProfileScreen from "../screens/EditProfile.screen";

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
