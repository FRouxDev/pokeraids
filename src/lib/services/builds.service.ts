import type { Pokemon } from '$/shared/types/pokemon.type';
import type { PokemonType } from '$/shared/types/pokemonType.type';
import type { Role } from '$/shared/types/role.type';
import type { RankingValue } from '$/shared/types/tierRanking.type';
import buildsList from '$lib/data/builds.json';

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

export const findBuildById = (buildId: string): Pokemon | undefined => {
  return typedBuildList.find((build) => build.buildId === buildId);
};
