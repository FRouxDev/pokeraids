import { PostModel, type Post, type PostDto } from '../data/models/News';

export const getAllPosts = async (): Promise<Post[]> => {
  const postsList = await PostModel.find().lean();

  return postsList.map((post) => {
    return {
      ...post,
      _id: post._id.toString(),
    };
  });
};

export const getPostById = async (id: string): Promise<Post | null> => {
  const post = await PostModel.findById(id).lean();
  if (post) {
    post._id = post?._id.toString();
  }
  return post;
};

export const createPost = async (post: PostDto): Promise<void> => {
  const newPost = new PostModel<PostDto>(post);
  await newPost.save();
};
