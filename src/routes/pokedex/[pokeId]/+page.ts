import { findPokemonById } from '$lib/services/pokedex.service';
import { error } from '@sveltejs/kit';

type PokedexParams = {
  pokeId: string;
};

export function load({ params }: { params: PokedexParams }) {
  const { pokeId } = params;
  if (pokeId) {
    const pokemon = findPokemonById(pokeId);
    if (pokemon) return pokemon;
  }

  error(404, 'Not found');
}
