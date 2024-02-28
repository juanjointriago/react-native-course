import { useEffect, useState } from "react"
import { PokemonPaginatedResponse, Result, SimplePokemon } from "../interfaces/Pokemon.interface";
import { pokemonAPI } from "../api/pokemonAPI";

export const usePokemonSearch = () => {
    const [isFetching, setIsFetching] = useState(true);
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);

    const loadPokemons = async () => {
        setIsFetching(true);
        const response = await pokemonAPI.get<PokemonPaginatedResponse>('https://pokeapi.co/api/v2/pokemon?limit=1200');
        mapPokemonList(response.data.results);
    }

    const mapPokemonList = (pokemonList: Result[]) => {
        const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {
            const urlParts = url.split('/');
            const id = urlParts[urlParts.length - 2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
            return { id, picture, name };
        });

        setSimplePokemonList(newPokemonList);
        setIsFetching(false);
    }

    useEffect(() => {
        loadPokemons()
    }, [])


    return { isFetching, simplePokemonList }
}
