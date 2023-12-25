import type { Ability } from './ability.type';
import type { EvSpread } from './evSpread.type';
import type { PokemonMove } from './move.type';
import type { PokemonSpecies } from './pokemonSpecies.type';
import type { PokemonType } from './pokemonType.type';
import type { Role } from './role.type';
import type { TierRanking } from './tierRanking.type';

export type Pokemon = PokemonSpecies & {
  teraType: PokemonType;
  ability: Ability;
  moveset: PokemonMove[];
  evSpread: EvSpread;
  level: 100;
  role: Role;
  ranking: TierRanking;
};