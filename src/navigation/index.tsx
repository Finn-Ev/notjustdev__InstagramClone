import { NavigationContainer } from "@react-navigation/native";
import FeedScreen from "../screens/Feed.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/Profile.screen";
import { Image } from "react-native";
import BottomTabNavigator from "./BottomTabNavigator";

// @ts-ignore
import logo from "../../assets/logo.png";
import CommentsScreen from "../screens/Comments.screen";

const Stack = createNativeStackNavigator();

const Navigation: React.FC = ({}) => {
  return (
    <NavigationContainer>
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
