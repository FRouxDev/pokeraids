import { error } from '@sveltejs/kit';

type PokedexParams = {
  pokeId: string;
};

export function load({ params }: { params: PokedexParams }) {
  if (params.pokeId) {
    return {
      pokemonId: params.pokeId,
    };
  }

  error(404, 'Not found');
}
