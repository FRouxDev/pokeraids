import type { EvSpread } from '$/shared/types/evSpread.type';
import { PokemonType } from '$/shared/types/pokemonType.type';
import type { Role } from '$/shared/types/role.type';
import type { TierRanking } from '$/shared/types/tierRanking.type';
import mongoose, { Model } from 'mongoose';
import type { Ability } from './Ability';
import type { PokemonMove } from './Move';
import type { PokemonSpecies } from './PokemonSpecies';

export type RaidBuild = {
  _id?: string;
  pokemon: PokemonSpecies;
  slug: string;
  descriptionFr: string;
  descriptionEn?: string;
  teraType: PokemonType;
  ability: Ability;
  moveset?: PokemonMove[];
  evSpread: EvSpread;
  role?: Role;
  ranking: TierRanking;
  youtubeLink?: string;
};

const RaidBuildSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
  },
  pokemon: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PokemonSpecies',
    required: true,
  },
  descriptionFr: {
    type: String,
    required: true,
  },
  descriptionEn: {
    type: String,
  },
  teraType: {
    type: String,
    enum: PokemonType,
    required: true,
  },
  ability: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ability',
    required: true,
  },
  evSpread: {
    type: {
      hp: {
        type: Number,
      },
      attack: {
        type: Number,
      },
      defense: {
        type: Number,
      },
      spattack: {
        type: Number,
      },
      spdefense: {
        type: Number,
      },
      speed: {
        type: Number,
      },
    },
    required: true,
  },
  ranking: {
    type: {
      solo: {
        type: String,
        enum: ['S', 'A', 'B', 'C', 'D'],
      },
      multiplayer: {
        type: String,
        enum: ['S', 'A', 'B', 'C', 'D'],
      },
    },
  },
  youtube: {
    type: String,
  },
});

export const RaidBuildModel: Model<RaidBuild> =
  mongoose.models?.RaidBuild ?? mongoose.model<RaidBuild>('RaidBuild', RaidBuildSchema);
