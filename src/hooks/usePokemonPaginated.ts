import { useEffect, useRef, useState } from "react"
import { PokemonPaginatedResponse, Result, SimplePokemon } from "../interfaces/Pokemon.interface";
import { pokemonAPI } from "../api/pokemonAPI";

export const usePokemonPaginated = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);
    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=20');

    const loadPokemons = async () => {
        setIsLoading(true);
        const response = await pokemonAPI.get<PokemonPaginatedResponse>(nextPageUrl.current);
        nextPageUrl.current = response.data.next;
        mapPokemonList(response.data.results);
    }

    const mapPokemonList = (pokemonList: Result[]) => {
        const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {
            const urlPaths = url.split('/');
            const id = urlPaths[urlPaths.length - 2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png`
            return { id, picture, name }
        })
        setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
        setIsLoading(false);
    }


    useEffect(() => {
        loadPokemons();
    }, [])


    return { isLoading, simplePokemonList, loadPokemons }
}