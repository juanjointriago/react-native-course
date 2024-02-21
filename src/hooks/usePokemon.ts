import { useEffect, useState } from "react"
import { pokemonAPI } from "../api/pokemonAPI";
import { PokemonFull } from "../interfaces/Pokemon.interface";


export const usePokemon = (id: string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull);

    const loadPokemon = async () => {
        const response = await pokemonAPI.get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(response.data);
        setIsLoading(false);
    }

    //useEffect
    //un efecto ejecuta la fiuncion que existe dentro de el, cuando se renderiza por primera vez el componente
    //si dentro de los corchetes del efecto colo una variable o constante o estado (state) este ejectura esa funcion o isntruccion las veces que lo monitoreado cambie

    useEffect(() => {
        loadPokemon();
    }, []);
    



    return {
        isLoading,
        pokemon
    }
} 