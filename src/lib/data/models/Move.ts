import { PokemonType } from '$/shared/types/pokemonType.type';
import mongoose, { Model } from 'mongoose';

export type PokemonMove = {
  _id: string;
  nameFr: string;
  nameEn: string;
  type: PokemonType;
  descriptionFr: string;
  descriptionEn?: string;
  pp: number;
  accuracy: number;
};

export type AttackMove = PokemonMove & {
  category: 'physical' | 'special';
  basePower: number;
};

export type StatusMove = PokemonMove & {
  category: 'status';
};

const MoveSchema = new mongoose.Schema({
  nameFr: {
    type: String,
    required: true,
  },
  nameEn: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: PokemonType,
    required: true,
  },
  descriptionFr: {
    type: String,
    required: true,
  },
  descriptionEn: {
    type: String,
  },
  pp: {
    type: Number,
    required: true,
  },
  accuracy: {
    type: Number,
    required: true,
  },
});

const AttackMoveSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ['physical', 'special'],
    required: true,
  },
  basePower: {
    type: Number,
    required: true,
  },
});

const StatusMoveSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ['status'],
    required: true,
  },
});

export const MoveModel: Model<PokemonMove> =
  mongoose.models.Move ?? mongoose.model<PokemonMove>('PokemonMove', MoveSchema);

export const AttackMoveModel: Model<AttackMove> =
  mongoose.models.AttackMove ?? MoveModel.discriminator<AttackMove>('AttackMove', AttackMoveSchema);

export const StatusMoveModel: Model<StatusMove> =
  mongoose.models.StatusMove ?? MoveModel.discriminator<StatusMove>('StatusMove', StatusMoveSchema);
