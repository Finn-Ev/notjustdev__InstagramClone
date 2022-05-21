import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";

// stack navigation param lists
export type RootStackParamList = {
  Home: undefined;
  Comments: { postId: string };
};

export type BottomTabNavigatorParamList = {
  HomeStack: undefined;
  Search: undefined;
  Upload: undefined;
  Notifications: undefined;
  MyProfile: undefined;
};

export type HomeStackNavigatorParamList = {
  Feed: undefined;
  UserProfile: { userId: string };
};

export type SearchTabNavigatorParamList = {
  Users: undefined;
  Posts: undefined;
};

export type ProfileStackNavigatorParamList = {
  Profile: undefined;
  EditProfile: undefined;
};

// navigation prop types
export type FeedNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  "Feed"
>;

export type ProfileNavigationProp = NativeStackNavigationProp<
  ProfileStackNavigatorParamList,
  "Profile"
>;

export type UserProfileNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  "UserProfile"
>;

export type MyProfileNavigationProp = BottomTabNavigationProp<
  BottomTabNavigatorParamList,
  "MyProfile"
>;

// route prop types
export type UserProfileRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  "UserProfile"
>;

export type MyProfileRouteProp = RouteProp<
  BottomTabNavigatorParamList,
  "MyProfile"
>;
