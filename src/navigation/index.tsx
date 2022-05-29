import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, View, Text } from "react-native";
import BottomTabNavigator from "./BottomTabNavigator";

// @ts-ignore
import logo from "../../assets/logo.png";
import CommentsScreen from "../screens/Comments.screen";
import { RootStackParamList } from "../types/navigation";
import * as Linking from "expo-linking";
import AuthStackNavigator from "./AuthStackNavigator";
import { useAuthContext } from "../context/AuthContext";

const Stack = createNativeStackNavigator<RootStackParamList>();

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [
    Linking.createURL("/"),
    "https://notjustphotos38623.com",
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
  const { user } = useAuthContext();

  // means user is loading
  if (user === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator screenOptions={{}}>
        {user ? (
          <>
            <Stack.Screen
              name={"Home"}
              component={BottomTabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name={"Comments"} component={CommentsScreen} />
          </>
        ) : (
          <>
            <Stack.Screen
              name={"Auth"}
              component={AuthStackNavigator}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
