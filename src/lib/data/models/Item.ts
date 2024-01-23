import mongoose, { Model } from 'mongoose';

export type Item = {
  _id?: string;
  slug: string;
  nameFr: string;
  nameEn: string;
  descriptionFr: string;
  descriptionEn?: string;
};

export const ItemSchema = new mongoose.Schema({
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
  descriptionFr: {
    type: String,
    required: true,
  },
  descriptionEn: {
    type: String,
  },
});

export const ItemModel: Model<Item> =
  mongoose.models?.Item ?? mongoose.model<Item>('Item', ItemSchema);
