import type { RaidBuild } from '$lib/data/models/RaidBuild';
import type { PokemonSpecies } from '$lib/data/models/PokemonSpecies';
import type { PokemonType } from '$/shared/types/pokemonType.type';
import pokemonList from '$lib/data/pokemon.json';
import buildsList from '$lib/data/builds.json';
import type { RankingValue } from '$/shared/types/tierRanking.type';
import type { Origin } from '$/shared/types/origin.type';

const typedPokemonList = pokemonList.map((pokemon) => {
  const newPokemon: PokemonSpecies = {
    ...pokemon,
    type1: pokemon.type1 as PokemonType,
    type2: pokemon.type2 as PokemonType | undefined,
    origin: pokemon.origin as Origin,
  };
  return newPokemon;
});

const typedBuildList = buildsList.map((build) => {
  const newBuild: Partial<RaidBuild> = {
    ...build,
    teraType: build.teraType as PokemonType,
    ranking: {
      solo: build.ranking.solo as RankingValue | undefined,
      multiplayer: build.ranking.multiplayer as RankingValue | undefined,
    },
  };
  return newBuild;
});

export const findPokemonById = (pokemonId: string): PokemonSpecies | undefined => {
  return typedPokemonList.find((poke) => poke.slug === pokemonId);
};

export const findBuildsByPokemonId = (pokemonId: string): Partial<RaidBuild>[] | undefined => {
  return typedBuildList.filter((build) => build.pokemon?.slug === pokemonId);
};

export const getAllPokemon = () => {
  return typedPokemonList;
};
