import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/Profile.screen";
// @ts-ignore
import logo from "../../assets/logo.png";
import EditProfileScreen from "../screens/EditProfile.screen";
import { ProfileStackNavigatorParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<ProfileStackNavigatorParamList>();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
