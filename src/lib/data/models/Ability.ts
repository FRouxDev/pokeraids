import mongoose, { Model } from 'mongoose';

export type Ability = {
  nameFr: string;
  nameEn: string;
  descriptionFr: string;
  descriptionEn?: string;
};

const AbilitySchema = new mongoose.Schema({
  nameFr: {
    type: String,
    required: true,
  },
  nameEn: {
    type: Number,
    required: true,
  },
});

export const AbilityModel: Model<Ability> =
  mongoose.models.Ability ?? mongoose.model<Ability>('Ability', AbilitySchema);
