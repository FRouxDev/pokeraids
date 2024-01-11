import { findBuildsByPokemonId } from '$/lib/services/builds.service';
import { findPokemonById } from '$lib/services/pokedex.service';
import { error } from '@sveltejs/kit';

type PokedexParams = {
  pokeId: string;
};

export async function load({ params }: { params: PokedexParams }) {
  const { pokeId } = params;
  if (pokeId) {
    const pokemon = await findPokemonById(pokeId);
    const builds = await findBuildsByPokemonId(pokeId);
    if (pokemon) {
      return {
        pokemon,
        builds: builds || undefined,
      };
    }
  }

  error(404, 'Not found');
}
