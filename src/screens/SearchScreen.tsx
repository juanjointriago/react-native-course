import { FlatList, View, Text, Platform } from "react-native"
import { SearchInput } from "../components/SearchInput"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useEffect, useState } from "react";
import { usePokemonSearch } from "../hooks/usePokemonSearch";
import { SimplePokemon } from "../interfaces/Pokemon.interface";
import { Loading } from "../components/Loading";
import { globalStyles } from '../theme/appTheme';
import { PokemonCard } from "../components/PokemonCard";

export const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isFetching, simplePokemonList } = usePokemonSearch();
  const [pokemonFiltered, setPokemonFilterd] = useState<SimplePokemon[]>([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (term.length === 0) {
      return setPokemonFilterd([]);
    }
    if (isNaN(Number(term))) {
      setPokemonFilterd(simplePokemonList.filter((poke) => poke.name.toLowerCase()
        .includes(term.toLowerCase()))
      );
    } else {
      const pokemonById = simplePokemonList.find((poke) => poke.id === term);
      setPokemonFilterd((pokemonById) ? [pokemonById] : []);
    }
  }, [term]);

  // if (isFetching) {
  //   return <Loading />
  // }
  return (
    <>
      {isFetching ? <Loading />
        : <View style={{ flex: 1, marginHorizontal: 20 }}>
          <SearchInput onDebounce={(value)=>setTerm(value)} 
          style={{
            position: "absolute", 
            zIndex: 999, 
            width: '100%' , 
          top : (Platform.OS === 'ios')?top:top+30}} />
            <FlatList
                data={ pokemonFiltered }
                keyExtractor={ (pokemon) => pokemon.id }
                showsVerticalScrollIndicator={ false }
                numColumns={ 2 }

                    // Header
                    ListHeaderComponent={(
                        <Text style={{
                            ...globalStyles.title,
                            ...globalStyles.globalMargin,
                            paddingBottom: 10,
                            marginTop: ( Platform.OS === 'ios' ) ? top + 60 : top + 80
                        }}>{ term }</Text>
                    )}

                    renderItem={ ({ item }) => ( <PokemonCard pokemon={ item } /> )}
                />
        </View>}
    </>
  )
}
