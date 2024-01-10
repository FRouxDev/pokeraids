import mongoose, { Model } from 'mongoose';

export type Ability = {
  _id?: string;
  nameFr: string;
  nameEn: string;
  descriptionFr: string;
  descriptionEn?: string;
};

export const AbilitySchema = new mongoose.Schema({
  nameFr: {
    type: String,
    required: true,
  },
  nameEn: {
    type: String,
    required: true,
  },
  descriptionFr: {
    type: String,
    required: true,
  },
  descriptionEn: {
    type: String,
    required: true,
  },
});

export const AbilityModel: Model<Ability> =
  mongoose.models.Ability ?? mongoose.model<Ability>('Ability', AbilitySchema);
