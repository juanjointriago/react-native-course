import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Platform } from "react-native";
import { TabHome } from "./TabHome";
import Icon from "react-native-vector-icons/Ionicons";
import { TabSearch } from "./TabSearch";

const Tab = createBottomTabNavigator();
export const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#5856D6',
                tabBarLabelStyle: {
                    marginBottom: (Platform.OS === 'ios') ? 0 : 10,
                },
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'rgba(255,255,255, 0.92)',
                    borderWidth: 0,
                    elevation: 0,
                    height: (Platform.OS === "ios") ? 80 : 60,
                }
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={TabHome}
                options={{
                    tabBarLabel: 'Lista',
                    tabBarIcon: ({ color }) => (
                        <Icon color={color} size={25} name="list-outline" />
                    )
                }} />
            <Tab.Screen
                name="SearchScreen" component={TabSearch}
                options={{
                    tabBarLabel: 'Búsqueda',
                    tabBarIcon: (({ color }) =>
                        (<Icon color={color} size={25} name="search-outline" />))
                }} />
        </Tab.Navigator>
    )
}
