import { findBuildsByPokemonId, findPokemonById } from '$lib/services/pokedex.service';
import { error } from '@sveltejs/kit';

type PokedexParams = {
  pokeId: string;
};

export function load({ params }: { params: PokedexParams }) {
  const { pokeId } = params;
  if (pokeId) {
    const pokemon = findPokemonById(pokeId);
    const builds = findBuildsByPokemonId(pokeId);
    if (pokemon) {
      return {
        pokemon,
        builds: builds || undefined,
      };
    }
  }

  error(404, 'Not found');
}
