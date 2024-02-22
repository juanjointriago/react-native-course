import { TouchableOpacity, View, Text, Image } from "react-native";
import { SimplePokemon } from "../interfaces/Pokemon.interface";
import { FadeInImage } from "./FadeInImage";


interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => { }}
        >
            <View>
                <View>
                    <Text>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>
                <View>
                    <Image
                        source={require('../assets/pokebola-blanca.png')} />
                </View>
                <FadeInImage
                    uri={pokemon.picture}
                />
            </View>
        </TouchableOpacity>
    )
}