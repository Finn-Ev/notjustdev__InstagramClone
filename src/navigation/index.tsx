import { NavigationContainer } from "@react-navigation/native";
import FeedScreen from "../screens/Feed.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/Profile.screen";
import { Image } from "react-native";

// @ts-ignore
import logo from "../../assets/logo.png";

const Stack = createNativeStackNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Feed"} screenOptions={{}}>
        <Stack.Screen
          name="Feed"
          component={FeedScreen}
          options={{
            headerTitle: () => (
              <Image
                source={logo}
                resizeMode={"contain"}
                style={{ width: 160, height: 45 }}
              />
            ),
          }}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="UserProfile"
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
