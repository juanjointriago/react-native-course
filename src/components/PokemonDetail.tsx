import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PokemonFull } from '../interfaces/Pokemon.interface';
interface Props {
    pokemon: PokemonFull
}
export const PokemonDetail = ({ pokemon }: Props) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}
            style={{
                ...StyleSheet.absoluteFillObject,
            }}>
            <View style={{ ...styles.container, marginTop: 370 }}>
                <Text style={styles.title}></Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.types.map(({ type }) => (
                            <Text key={type.name}
                                style={{ ...styles.regularText, marginRight: 10 }} >
                                {type.name}
                            </Text>
                        ))
                    }
                </View>
            </View>
            <View style={{}}>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
    },
    regularText: {
        fontSize: 10,
    },
    basicSprites: {
        width: 100,
        height: 100,
    }
})
