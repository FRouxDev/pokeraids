import { getAllPokemon } from '$lib/services/pokedex.service';

export function load() {
  const pokemonList = getAllPokemon();
  return { pokemonList };
}
