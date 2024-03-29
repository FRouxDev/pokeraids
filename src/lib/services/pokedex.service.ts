import { PokemonSpeciesModel, type PokemonSpecies } from '$lib/data/models/PokemonSpecies';

export const findPokemonById = async (pokemonId: string): Promise<PokemonSpecies | null> => {
  const pokemon = await PokemonSpeciesModel.findOne({ slug: pokemonId })
    .populate('abilities')
    .populate('hiddenAbility')
    .lean();
  return structuredClone(pokemon);
};

export const getAllPokemon = async (): Promise<PokemonSpecies[]> => {
  const pokemonList = await PokemonSpeciesModel.find().populate('abilities').lean();
  return structuredClone(pokemonList);
};
