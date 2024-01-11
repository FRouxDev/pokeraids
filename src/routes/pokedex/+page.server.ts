import { getAllPokemon } from '$lib/services/pokedex.service';

export async function load() {
  const pokemonList = await getAllPokemon();
  return { pokemonList };
}
