import { useCounter } from "../hooks/useCounter";
import { usePokemon } from "../hooks/usePokemon";

export const PokemonPage = () => {

    const { counter, increment, decrement } = useCounter(); // Se encarga de la lógica del contador
    const { pokemon, isLoading, formattedId } = usePokemon({ id: counter }); // Se encarga de la lógica de obtener el pokémon

    if (isLoading) {
        return (
            <div className="bg-gradient flex flex-col items-center">
                <span className="text-white">Cargando...</span>
            </div>
        )
    }

    if (!pokemon) {
        return (
            <div className="bg-gradient flex flex-col items-center">
                <span className="text-white">No encontrado</span>
            </div>
        )
    }

    return (
        <div className="bg-gradient flex flex-col items-center">
            <h1 className="text-2xl font-thin text-white">Pokémon</h1>
            <h3 className="text-xl font-bold text-white">#{formattedId} {pokemon?.name}</h3>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${counter}.svg`}
                alt={pokemon?.name}
            />

            <div className="flex gap-2">
                
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={decrement}>
                Anterior
                </button>
                
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={increment}>
                Siguiente
                </button>
            
            </div>
        </div>
    );
};