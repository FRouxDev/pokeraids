import type { MongooseEntity } from '$/shared/types/data/mongooseEntity.type';
import mongoose, { Model } from 'mongoose';

export type PostDto = {
  title: string;
  author: string;
  content: string;
  shortText: string;
  slug: string;
  tags?: string[];
};

export type Post = MongooseEntity<PostDto>;

export const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    shortText: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
    },
  },
  {
    timestamps: true,
  },
);

export const PostModel: Model<Post> =
  mongoose.models?.Post ?? mongoose.model<Post>('Post', PostSchema);
