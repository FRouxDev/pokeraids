import { getAllPokemonSpecies } from '$/lib/services/crud.service';

export async function load() {
  const pokemonSpeciesList = await getAllPokemonSpecies();
  return { pokemonSpeciesList };
}
