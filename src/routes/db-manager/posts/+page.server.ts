import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from '../$types';
import { isTruthyString } from '$/shared/utils/validators/isTruthyString';
import { createPost } from '$/lib/services/news.service';
import type { PostDto } from '$/lib/data/models/News';

const DEFAULT_AUTHOR = 'Nelsiemon';

export const actions: Actions = {
  default: async (event) => {
    const { request } = event;
    const data = await request.formData();
    const title = data.get('title');
    const slug = data.get('slug');
    const shortText = data.get('shortText');
    const content = data.get('content');

    if (
      !isTruthyString(title) ||
      !isTruthyString(slug) ||
      !isTruthyString(shortText) ||
      !isTruthyString(content)
    ) {
      return fail(400, {
        missing: {
          title: !isTruthyString(title),
          slug: !isTruthyString(slug),
          shortText: !isTruthyString(shortText),
          content: !isTruthyString(content),
        },
      });
    }

    const newPost: PostDto = {
      title,
      shortText,
      content,
      slug,
      author: DEFAULT_AUTHOR,
    };

    await createPost(newPost);

    redirect(301, '/db-manager/posts');
  },
};
