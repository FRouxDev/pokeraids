import type { Ability } from '$/lib/data/models/Ability';
import type { PokemonMove } from '$/lib/data/models/Move';
import type { EvSpread } from './evSpread.type';
import type { PokemonType } from './pokemonType.type';
import type { Role } from './role.type';
import type { TierRanking } from './tierRanking.type';

export type Pokemon = {
  pokemonId: string;
  buildId: string;
  description: string;
  teraType: PokemonType;
  ability: Ability;
  moveset?: PokemonMove[];
  evSpread: EvSpread;
  level: 100;
  role: Role;
  ranking: TierRanking;
};
