import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { usePokemonPaginated } from "../hooks/usePokemonPaginated";
import { globalStyles } from '../theme/appTheme';
import { PokemonCard } from "../components/PokemonCard";
import { PokeballLoading } from "../components/PokeballLoading";

export const HomeScreen = () => {
    //si se encuantra instalado react native navigation react-native-screens react native safe area context
    //se puede utilizar el apartado del custom hook useSafeAreaInsets
    const { top } = useSafeAreaInsets();
    const { simplePokemonList, loadPokemons } = usePokemonPaginated();

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={globalStyles.pokebolaBG}
            />
            <View
                style={{ alignItems: 'center' }}>
                <FlatList
                    data={simplePokemonList}
                    keyExtractor={(pokemon) => pokemon.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    ListHeaderComponent={(
                        <Text
                            style={{
                                ...globalStyles.title,
                                ...globalStyles.globalMargin,
                                top: top + 20,
                                marginBottom: 10,
                                paddingBottom: 10
                            }}>
                            Pokedex
                        </Text>
                    )}
                    renderItem={({ item }) => (<PokemonCard pokemon={item} />)}
                    //iniciando scroll
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}
                    ListFooterComponent={(
                        // <ActivityIndicator
                        //     style={{ height: 100 }}
                        //     size={20}
                        //     color={'gray'} />
                        <PokeballLoading/>
                    )}
                />
            </View>
        </>
    )
}