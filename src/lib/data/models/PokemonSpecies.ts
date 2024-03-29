import { Origin } from '$/shared/types/origin.type';
import { PokemonType } from '$/shared/types/pokemonType.type';
import type { PokemonStats } from '$/shared/types/stats.type';
import mongoose, { Model } from 'mongoose';
import { type Ability } from './Ability';

export type PokemonSpecies = {
  _id?: string;
  slug: string;
  nameFr: string;
  nameEn: string;
  formFr?: string;
  formEn?: string;
  type1: PokemonType;
  type2?: PokemonType;
  picture?: string;
  abilities: Ability[];
  hiddenAbility?: Ability;
  pokemonStats?: PokemonStats;
  origin: Origin;
};

const PokemonSpeciesSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
  },
  nameFr: {
    type: String,
    required: true,
  },
  nameEn: {
    type: String,
    required: true,
  },
  formFr: {
    type: String,
  },
  formEn: {
    type: String,
  },
  type1: {
    type: String,
    enum: PokemonType,
    required: true,
  },
  type2: {
    type: String,
    enum: PokemonType,
  },
  picture: {
    type: String,
  },
  abilities: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Ability',
    required: true,
  },
  hiddenAbility: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ability',
  },
  pokemonStats: {
    type: {
      hp: {
        type: Number,
        required: true,
      },
      attack: {
        type: Number,
        required: true,
      },
      defense: {
        type: Number,
        required: true,
      },
      spattack: {
        type: Number,
        required: true,
      },
      spdefense: {
        type: Number,
        required: true,
      },
      speed: {
        type: Number,
        required: true,
      },
    },
    required: true,
  },
  origin: {
    type: String,
    enum: Origin,
    required: true,
  },
});

export const PokemonSpeciesModel: Model<PokemonSpecies> =
  mongoose.models?.PokemonSpecies ??
  mongoose.model<PokemonSpecies>('PokemonSpecies', PokemonSpeciesSchema);
