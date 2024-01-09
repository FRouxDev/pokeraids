import mongoose, { Model } from 'mongoose';

type Move = {
  nameFr: string;
  nameEn?: string;
};

const MoveSchema = new mongoose.Schema({
  nameFr: {
    type: String,
    required: true,
  },
  nameEn: {
    type: String,
  },
});

export const MoveModel: Model<Move> =
  mongoose.models.Move ?? mongoose.model<Move>('Move', MoveSchema);
