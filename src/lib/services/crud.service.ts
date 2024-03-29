import { AbilityModel, type Ability } from '$lib/data/models/Ability';
import { ItemModel, type Item } from '../data/models/Item';
import { MoveModel, type Move } from '../data/models/Move';
import { PokemonSpeciesModel, type PokemonSpecies } from '../data/models/PokemonSpecies';
import { RaidBuildModel, type RaidBuild, type RaidBuildDto } from '../data/models/RaidBuild';

export const getAllAbilities = async (): Promise<Ability[]> => {
  const abilitiesList = await AbilityModel.find().lean();

  return abilitiesList.map((ability) => {
    return {
      ...ability,
      _id: ability._id.toString(),
    };
  });
};

export const deleteItem = async (itemId: string): Promise<void> => {
  await ItemModel.deleteOne({ _id: itemId });
};

export const getAllItems = async (): Promise<Item[]> => {
  const itemsList = await ItemModel.find().lean();

  return itemsList.map((item) => {
    return {
      ...item,
      _id: item._id.toString(),
    };
  });
};

export const deleteAbility = async (abilityId: string): Promise<void> => {
  await AbilityModel.deleteOne({ _id: abilityId });
};

export const getAllPokemonSpecies = async (): Promise<PokemonSpecies[]> => {
  const pokemonSpeciesList = await PokemonSpeciesModel.find().lean();

  return structuredClone(
    pokemonSpeciesList.map((pokemon) => {
      return {
        ...pokemon,
        _id: pokemon._id.toString(),
      };
    }),
  );
};

export const getAllRaidBuilds = async (): Promise<RaidBuild[]> => {
  const raidBuildsList = await RaidBuildModel.find().lean();

  return structuredClone(
    raidBuildsList.map((build) => {
      return {
        ...build,
        _id: build._id.toString(),
      };
    }),
  );
};

export const createBuild = async (build: RaidBuildDto): Promise<void> => {
  const newBuild = new RaidBuildModel<RaidBuildDto>(build);
  await newBuild.save();
};

export const getAllMoves = async (): Promise<Move[]> => {
  const movesList = await MoveModel.find().lean();

  return movesList.map((move) => {
    return {
      ...move,
      _id: move._id.toString(),
    };
  });
};

export const deleteMove = async (moveId: string): Promise<void> => {
  await MoveModel.deleteOne({ _id: moveId });
};
