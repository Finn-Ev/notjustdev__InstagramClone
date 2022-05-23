import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FeedScreen from "../screens/Feed.screen";
import CommentsScreen from "../screens/Comments.screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "../theme/colors";
import { SearchTabNavigatorParamList } from "../types/navigation";
import UserSearchScreen from "../screens/UserSearch.screen";

const Tab = createMaterialTopTabNavigator<SearchTabNavigatorParamList>();

const SearchTabNavigator = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { paddingTop: insets.top },
        tabBarIndicatorStyle: { backgroundColor: colors.primary },
      }}
    >
      <Tab.Screen name="Users" component={UserSearchScreen} />
      <Tab.Screen name="Posts" component={CommentsScreen} />
      {/*<Tab.Screen name="Settings" component={SettingsScreen} />*/}
    </Tab.Navigator>
  );
};

export default SearchTabNavigator;
