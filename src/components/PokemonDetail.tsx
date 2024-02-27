import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PokemonFull } from '../interfaces/Pokemon.interface';
import { FadeInImage } from './FadeInImage';
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
                <Text style={styles.title}>Tipo de Pokemon:</Text>
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

            <View style={styles.container}>
                <Text style={styles.title}>Peso:</Text>
                <Text style={styles.regularText}>{pokemon.weight}</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Sprites:</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <FadeInImage uri={pokemon.sprites.front_default} style={styles.basicSprites} />
                <FadeInImage uri={pokemon.sprites.back_default} style={styles.basicSprites} />
                <FadeInImage uri={pokemon.sprites.front_shiny} style={styles.basicSprites} />
                <FadeInImage uri={pokemon.sprites.back_shiny} style={styles.basicSprites} />
            </ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Habilidades Básicas:</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.abilities.map(({ ability }) => (
                            <Text
                                key={ability.name}
                                style={{ ...styles.regularText, marginRight: 10 }}>
                                {ability.name}
                            </Text>
                        ))
                    }
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Ataques:</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        pokemon.moves.map(({ move }) => (
                            <Text
                                key={move.name}
                                style={{ ...styles.regularText, marginRight: 10 }}>
                                {move.name + '\n'}
                            </Text>
                        ))
                    }
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Estadisticas:</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        pokemon.stats.map((stat, i) => (
                            <View key={stat.stat.name + i} style={{ flexDirection: 'row' }}>
                                <Text
                                    style={{ ...styles.regularText, marginRight: 10, width: 150 }}>
                                    {stat.stat.name}
                                </Text>
                                <Text
                                    key={stat.stat.name + i}
                                    style={{ ...styles.regularText, fontWeight: 'bold' }}>
                                    {stat.base_stat}
                                </Text>
                            </View>
                        ))
                    }
                </View>
            </View>
            <View style={{ marginBottom: 30, alignItems: 'center' }}>
                <FadeInImage uri={pokemon.sprites.front_default} style={styles.basicSprites} />
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
