import type { Ability } from './ability.type';
import type { Origin } from './origin.type';
import type { PokemonType } from './pokemonType.type';
import type { PokemonStats } from './stats.type';

export type PokemonSpecies = {
  id: string;
  nameFr: string;
  nameEn: string;
  type1: PokemonType;
  type2?: PokemonType;
  picture?: string;
  abilities?: Ability[];
  hiddenAbility?: Ability;
  pokemonStats?: PokemonStats;
  origin: Origin;
};
