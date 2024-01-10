import type { RaidBuild } from '../data/models/RaidBuild';
import type { PokemonType } from '$/shared/types/pokemonType.type';
import type { RankingValue } from '$/shared/types/tierRanking.type';
import buildsList from '$lib/data/builds.json';

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

export const findBuildById = (slug: string): Partial<RaidBuild> | undefined => {
  return typedBuildList.find((build) => build.slug === slug);
};
