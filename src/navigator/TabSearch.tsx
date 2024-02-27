import { createStackNavigator } from "@react-navigation/stack"
import { RootStackParams } from "./Navigator"
import { SearchScreen } from "../screens/SearchScreen";



const TabS = createStackNavigator<RootStackParams>();
export const TabSearch = () => {
  return (
    <TabS.Navigator>
        <TabS.Screen name="HomeScreen" component={SearchScreen}/>
    </TabS.Navigator>
  )
}
