import { PokemonType } from '$/shared/types/pokemonType.type';
import type { TierRanking } from '$/shared/types/tierRanking.type';
import mongoose, { Model } from 'mongoose';
import { PokemonNature } from '$/shared/types/pokemonNature.type';
import type { MongooseEntity } from '$/shared/types/data/mongooseEntity.type';
import type { EvSpread } from '$/shared/types/evSpread.type';

export type RaidBuildDto = {
  pokemon: string;
  slug: string;
  labels?: string[];
  nameFr: string;
  nameEn?: string;
  descriptionFr: string;
  descriptionEn?: string;
  teraType: string;
  ability: string;
  item: string;
  nature: string;
  moveset?: string[];
  evSpread: EvSpread;
  role?: string;
  ranking: TierRanking;
  youtubeLink?: string;
};

export type RaidBuild = MongooseEntity<RaidBuildDto>;

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
  nameFr: {
    type: String,
    required: true,
  },
  nameEn: {
    type: String,
  },
  descriptionFr: {
    type: String,
    required: true,
  },
  descriptionEn: {
    type: String,
  },
  labels: {
    type: [String],
    required: true,
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
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
    required: true,
  },
  moveset: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'PokemonMove',
    required: true,
  },
  nature: {
    type: String,
    enum: PokemonNature,
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
