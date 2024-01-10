import { findBuildById } from '$/lib/services/builds.service';
import { error } from '@sveltejs/kit';

type BuildParams = {
  slug: string;
};

export function load({ params }: { params: BuildParams }) {
  const { slug } = params;
  if (slug) {
    const build = findBuildById(slug);
    if (build) {
      return {
        build,
      };
    }
  }

  error(404, 'Not found');
}
