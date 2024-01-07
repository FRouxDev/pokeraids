import type { Pokemon } from '$/shared/types/pokemon.type';
import type { PokemonSpecies } from '$/shared/types/pokemonSpecies.type';
import type { PokemonType } from '$/shared/types/pokemonType.type';
import pokemonList from '$lib/data/pokemon.json';
import buildsList from '$lib/data/builds.json';
import type { Role } from '$/shared/types/role.type';
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
  const newBuild: Pokemon = {
    ...build,
    teraType: build.teraType as PokemonType,
    role: build.role as Role,
    level: 100,
    ranking: {
      solo: build.ranking.solo as RankingValue | undefined,
      multiplayer: build.ranking.multiplayer as RankingValue | undefined,
    },
  };
  return newBuild;
});

export const findPokemonById = (pokemonId: string): PokemonSpecies | undefined => {
  return typedPokemonList.find((poke) => poke.id === pokemonId);
};

export const findBuildsByPokemonId = (pokemonId: string): Pokemon[] | undefined => {
  return typedBuildList.filter((build) => build.pokemonId === pokemonId);
};

export const getAllPokemon = () => {
  return typedPokemonList;
};
