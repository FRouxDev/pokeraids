import pokemonList from '$lib/data/pokemon.json';

export const findPokemonById = (pokemonId: string) => {
  return pokemonList.find((poke) => poke.id === pokemonId);
};

export const getAllPokemon = () => {
  return pokemonList;
};
