import { findBuildsByPokemonId } from '$/lib/services/builds.service';
import { findPokemonById } from '$lib/services/pokedex.service';
import { error } from '@sveltejs/kit';

type PokedexParams = {
  slug: string;
};

export async function load({ params }: { params: PokedexParams }) {
  const { slug } = params;
  if (slug) {
    const pokemon = await findPokemonById(slug);
    const builds = await findBuildsByPokemonId(slug);
    if (pokemon) {
      return {
        pokemon,
        builds: builds || undefined,
      };
    }
  }

  error(404, 'Not found');
}
