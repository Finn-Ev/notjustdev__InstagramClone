import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedScreen from "../screens/Feed.screen";
import ProfileScreen from "../screens/Profile.screen";
import { Image } from "react-native";
// @ts-ignore
import logo from "../../assets/logo.png";
import PostUploadScreen from "../screens/PostUpload.screen";
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import colors from "../theme/colors";
import HomeStackNavigator from "./HomeStackNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";
import { BottomTabNavigatorParamList } from "../types/navigation";
import SearchTabNavigator from "./SearchTabNavigator";

const BottomTabNavigator =
  createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTab = () => {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.black,
      }}
    >
      <BottomTabNavigator.Screen
        name="HomeStack"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home-filled" size={size} color={color} />
          ),
        }}
        component={HomeStackNavigator}
      />
      <BottomTabNavigator.Screen
        name="Search"
        component={SearchTabNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" size={size} color={color} />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="Upload"
        component={PostUploadScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="Notifications"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="heart-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="MyProfile"
        component={ProfileStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle-o" size={size} color={color} />
          ),
        }}
      />
    </BottomTabNavigator.Navigator>
  );
};

export default BottomTab;
