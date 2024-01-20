import { getPostById } from '$/lib/services/news.service';
import { error } from '@sveltejs/kit';

type PostParams = {
  postId: string;
};

export async function load({ params }: { params: PostParams }) {
  const { postId } = params;
  if (postId) {
    const post = await getPostById(postId);
    if (post) {
      return post;
    }
  }

  error(404, 'Not found');
}
