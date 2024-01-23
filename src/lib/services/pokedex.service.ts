import { PokemonSpeciesModel, type PokemonSpecies } from '$lib/data/models/PokemonSpecies';
import { RaidBuildModel } from '../data/models/RaidBuild';

export type EnrichedPokemonSpecies = {
  pokemon: PokemonSpecies;
  buildsCount: number;
};

export const findPokemonById = async (pokemonId: string): Promise<PokemonSpecies | null> => {
  const pokemon = await PokemonSpeciesModel.findOne({ slug: pokemonId })
    .populate('abilities')
    .populate('hiddenAbility')
    .lean();
  return structuredClone(pokemon);
};

export const getAllPokemon = async (): Promise<EnrichedPokemonSpecies[]> => {
  const pokemonList = await PokemonSpeciesModel.find().populate('abilities').lean();
  const listWithBuilds = await Promise.all(
    pokemonList.map(async (pokemon) => {
      return {
        pokemon,
        buildsCount: await RaidBuildModel.countDocuments({ pokemon }),
      };
    }),
  );
  return structuredClone(listWithBuilds);
};
