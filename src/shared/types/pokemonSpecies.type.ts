import type { PokemonType } from './pokemonType.type';

export type PokemonSpecies = {
  id: string;
  nameFr: string;
  nameEn: string;
  type1: PokemonType;
  type2?: PokemonType;
  picture?: string;
};
