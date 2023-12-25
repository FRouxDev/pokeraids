import type { PokemonSpecies } from '$/shared/types/pokemonSpecies.type';
import type { PokemonType } from '$/shared/types/pokemonType.type';
import pokemonList from '$lib/data/pokemon.json';

const typedPokemonList = pokemonList.map((pokemon) => {
  const newPokemon: PokemonSpecies = {
    ...pokemon,
    type1: pokemon.type1 as PokemonType,
    type2: pokemon.type2 as PokemonType | undefined,
  };
  return newPokemon;
});

export const findPokemonById = (pokemonId: string): PokemonSpecies | undefined => {
  return typedPokemonList.find((poke) => poke.id === pokemonId);
};

export const getAllPokemon = () => {
  return typedPokemonList;
};
