import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeedScreen from "../screens/Feed.screen";
import ProfileScreen from "../screens/Profile.screen";
import { Image } from "react-native";

// @ts-ignore
import logo from "../../assets/logo.png";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          headerTitleAlign: "center",
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
        // options={{ headerShown: false }}
        name="UserProfile"
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
