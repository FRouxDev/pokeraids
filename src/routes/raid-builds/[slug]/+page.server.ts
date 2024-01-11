import { findBuildById } from '$/lib/services/builds.service';
import { error } from '@sveltejs/kit';

type BuildParams = {
  slug: string;
};

export async function load({ params }: { params: BuildParams }) {
  const { slug } = params;
  if (slug) {
    const build = await findBuildById(slug);
    if (build) {
      return {
        build,
      };
    }
  }

  error(404, 'Not found');
}
