import { PokemonSpeciesModel } from '../data/models/PokemonSpecies';
import { RaidBuildModel, type RaidBuild } from '../data/models/RaidBuild';

export const findBuildById = async (slug: string): Promise<RaidBuild | null> => {
  const build = await RaidBuildModel.findOne({ slug })
    .populate('ability')
    .populate('pokemon')
    .lean();
  return structuredClone(build);
};

export const findBuildsByPokemonId = async (pokemonId: string): Promise<RaidBuild[]> => {
  const _id = (await PokemonSpeciesModel.findOne({ slug: pokemonId }).lean())?._id;
  if (_id) {
    const builds = await RaidBuildModel.find({ pokemon: _id })
      .populate('ability')
      .populate('pokemon')
      .lean();
    return structuredClone(builds);
  }

  return [];
};
