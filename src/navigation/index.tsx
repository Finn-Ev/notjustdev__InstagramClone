import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import FeedScreen from "../screens/Feed.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/Profile.screen";
import { Image, Text } from "react-native";
import BottomTabNavigator from "./BottomTabNavigator";

// @ts-ignore
import logo from "../../assets/logo.png";
import CommentsScreen from "../screens/Comments.screen";
import { RootStackParamList } from "./types";
import * as Linking from "expo-linking";

const Stack = createNativeStackNavigator<RootStackParamList>();

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [
    Linking.createURL("/"),
    "https://instagramclone.com",
    "exp://192.168.178.21:19000",
  ],
  config: {
    initialRouteName: "Home",
    screens: {
      Comments: "comments",
      Home: {
        screens: {
          HomeStack: {
            initialRouteName: "Feed", // <- to be able to go back to the feed
            screens: {
              UserProfile: "user/:userId",
            },
          },
        },
      },
    },
  },
};

const Navigation: React.FC = ({}) => {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator initialRouteName={"Home"} screenOptions={{}}>
        <Stack.Screen
          name={"Home"}
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={"Comments"} component={CommentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
