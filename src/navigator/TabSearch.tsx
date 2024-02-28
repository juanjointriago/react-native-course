import { createStackNavigator } from "@react-navigation/stack"
import { RootStackParams } from "./Navigator"
import { SearchScreen } from "../screens/SearchScreen";
import { PokemonScreen } from "../screens/PokemonScreen";



const TabS = createStackNavigator<RootStackParams>();
export const TabSearch = () => {
  return (
    <TabS.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle:{
        backgroundColor: 'white'
      }
    }}>
        <TabS.Screen name="HomeScreen" component={SearchScreen}/>
        <TabS.Screen name="PokemonScreen" component={PokemonScreen}/>
    </TabS.Navigator>
  )
}
