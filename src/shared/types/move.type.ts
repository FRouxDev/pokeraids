import type { PokemonType } from './pokemonType.type';

type MoveCategory = 'physical' | 'special' | 'status';

type BaseMove = {
  nameFr: string;
  nomEn: string;
  type: PokemonType;
  description: string;
  pp: number;
  accuracy: number;
};

type AttackMove = {
  category: 'physical' | 'special';
  basePower: number | 'specific';
};

type StatusMove = {
  category: 'status';
};

export type PokemonMove = BaseMove & (AttackMove | StatusMove);
