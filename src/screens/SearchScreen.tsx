import { FlatList, View } from "react-native"
import { SearchInput } from "../components/SearchInput"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useEffect, useState } from "react";
import { usePokemonSearch } from "../hooks/usePokemonSearch";
import { SimplePokemon } from "../interfaces/Pokemon.interface";
import { Loading } from "../components/Loading";



export const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isFetching, simplePokemonList } = usePokemonSearch();
  const [pokemonFilterder, setPokemonFilterder] = useState<SimplePokemon[]>([]);
  const [term, setTerm] = useState('');

  useEffect(() => {

    if (term.length === 0) {
      return setPokemonFilterder([]);
    }
    if (isNaN(Number(term))) {
      setPokemonFilterder(
        simplePokemonList.filter(
          (poke) => poke.name.toLowerCase()
            .includes(term.toLowerCase()))
      );
    } else {
      const pokemonById = simplePokemonList.find((poke) => poke.id === term);
      setPokemonFilterder((pokemonById) ? [pokemonById] : []);
    }
  }, [term]);


  // if (isFetching) {
  //   return <Loading />
  // }

  return (
    <>
      {isFetching ? <Loading />
        : <View style={{flex:1, marginHorizontal: 20}}>
          <SearchInput />
          {/* <FlatList/> */}
        </View>}
    </>
  )
}
