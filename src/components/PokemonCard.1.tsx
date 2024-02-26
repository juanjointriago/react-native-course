import { TouchableOpacity, View, Text, Image } from "react-native";
import { FadeInImage } from "./FadeInImage";
import { useEffect, useRef, useState } from "react";
import ImageColors from "react-native-image-colors";
import { useNavigation } from "@react-navigation/core";
import { Props, styles, windowWidth } from "./PokemonCard";


export const PokemonCard = ({ pokemon }: Props) => {
    const [bgColor, setbgColor] = useState('gray');
    const isMounted = useRef(true);
    const navigation = useNavigation();

    useEffect(() => {
        ImageColors.getColors(pokemon.picture, { fallback: '#000000' })
            .then(colors => {
                if (!isMounted.current) return;
                (colors.platform === 'android') ? setbgColor(colors.dominant || '#000000')
                    : (colors.platform === 'ios') ? setbgColor(colors.background || '#000000')
                        : setbgColor('grey');
            }
            );
        return () => {
            isMounted.current = false;
        };
    }, []);

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('PokemonScreen', {
                simplePokemon: pokemon,
                color: bgColor
            })}>
            <View
                style={{
                    ...styles.cardContainer,
                    width: windowWidth * 0.4,
                    backgroundColor: bgColor
                }}>
                {/* contenedor del texto */}
                <View>
                    <Text style={styles.name}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>
                <View style={styles.pokebolalaContainer}>
                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokebola} />
                </View>
                <FadeInImage
                    style={styles.pokemonImage}
                    uri={pokemon.picture} />
            </View>
        </TouchableOpacity>
    );
};
