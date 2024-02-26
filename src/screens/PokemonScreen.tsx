import { StackScreenProps } from "@react-navigation/stack"
import { StyleSheet, Text, View } from "react-native"
import { RootStackParams } from "../navigator/Navigator"

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'>{};
export const PokemonScreen = ({navigation, route}:Props) => {
  const {simplePokemon, color} = route.params;

  return (
    <View style={{flex:1}}>
        <Text >{simplePokemon.name}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  headerContainer:{
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backButton:{
    position: 'absolute',
    left:20,
  },
  pokemonName:{
    color: '#000000',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20
  },
  pokeball:{
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7,
  },
  pokemonImage: {
    width:250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
  loadingIndicator:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})