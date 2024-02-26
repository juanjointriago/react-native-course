import { TouchableOpacity, View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { SimplePokemon } from '../interfaces/Pokemon.interface';
import { FadeInImage } from "./FadeInImage";
import { useEffect, useRef, useState } from "react";
import ImageColors from "react-native-image-colors";
import { useNavigation } from "@react-navigation/core";
interface Props {
    pokemon: SimplePokemon
}

const windowWidth = Dimensions.get('window').width;

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
                        : setbgColor('grey')
            }
            )
        return () => {
            isMounted.current = false;
        }
    }, [])

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={
                () => navigation.navigate('PokemonScreen', {
                simplePokemon: pokemon,
                color: bgColor
            })
            } >
            <View
                style={{
                    ...styles.cardContainer,
                    width: windowWidth * 0.4,
                    backgroundColor: bgColor
                }}>
                {/* contenedor del texto */}
                <View>
                    <Text style={styles.name} >
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
                    uri={pokemon.picture}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        width: 120,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    name: {
        color: '#ffff',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10,
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -25,
        bottom: -25
    },
    pokebolalaContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        opacity: 0.5
    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -5

    }
})